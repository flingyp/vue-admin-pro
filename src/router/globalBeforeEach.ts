import { NavigationGuardNext, RouteLocationNormalized, Router, RouteRecordRaw } from 'vue-router'

import lodashUtil from 'lodash'

import { getLocalKey } from '@/utils/common/handleLocalStorage'
import { useUserStore } from '@/store/modules/userStore'
import { useSysStore } from '@/store/modules/sysStore'

import { filterRoutes, mountRoute, createMenus } from './utils/handleRouteOnWeb'
import { handleServeRouteToSysRoute } from './utils/handleRouteOnServe'

// 常量路由、 异步路由
import { constantRouters, redirect404Router } from './routers/constantRouters'
import { asyncRouters } from './routers/asyncRouters'

import { RouteHandleConfig } from '@/globalConfig'

import { getSysRouters } from '@/apis/sys'

// 是否挂载了404通用路由
let isMounted404Router: boolean = false

// 白名单路由（不需要token，定义路由name）
const whiteRouteByName: string[] = ['Login']

// 路由菜单处理函数
const routeMenuProcess = async (userStore: any, sysStore: any, routerInstance: Router) => {
  // 1. 获取用户信息
  await userStore.getUserInfo()

  let handleSuccessAsyncRouters: RouteRecordRaw[] = []

  // 2. 判断当前系统配置是前端控制路由还是后端控制路由
  if (RouteHandleConfig === 'Web') {
    // 1. 深拷贝异步路由
    const deepAsyncRouters = lodashUtil.cloneDeep(asyncRouters)

    // 2. 获取权限
    const permissions = userStore.getPermissions

    // 3. 过滤路由
    if (permissions && permissions.length !== 0) {
      handleSuccessAsyncRouters = filterRoutes(deepAsyncRouters as RouteRecordRaw[], permissions)
    }
  } else {
    // 1. 接口中获取异步路由
    const { data } = await getSysRouters()
    // 2. handleServeRouteToSysRoute() 处理JSON路由结构
    handleSuccessAsyncRouters = handleServeRouteToSysRoute(data) as RouteRecordRaw[]
  }

  //  4. 挂载路由
  handleSuccessAsyncRouters.forEach((route) => {
    mountRoute(route, routerInstance)
  })

  // 5. 生成菜单
  const sysMenus = createMenus([...constantRouters, ...handleSuccessAsyncRouters] as RouteRecordRaw[])

  // 6. 初始化状态管理
  sysStore.setConstantRoutes(constantRouters)
  sysStore.setAsyncRoutes(handleSuccessAsyncRouters)
  sysStore.setSysMenus(sysMenus)
}

/**
 * 路由全局控制守卫：
 * 有Token的情况
 *  1. 第一次从登录页登录后存在Token，挂载异步路由
 *  2. 页面刷新后存在Token, 需要重新挂载异步路由
 *  3. 正常的页面跳转
 *  4. 不可以手动修改URL跳转登陆页面
 * 没有Token的情况
 *  1. 没有Token前提 查询要跳转的页面是否是不需要Token的，如果需要返回到登录页面
 *  2. 没有Token前提 查询要跳转的页面是否是不需要Token的，如果不需要这进入该页面
 */
export default async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  routerInstance: Router
) => {
  // 获取本地token
  const localAccessToken = getLocalKey('accessToken')
  const userStore = useUserStore()
  const sysStore = useSysStore()

  // 有token情况
  if (localAccessToken && localAccessToken !== '') {
    if (from.name === 'Login' && to.name !== 'Login') {
      /**
       * 通过 isAddAsyncRouter 来控制是否第一次登陆后添加了动态路由
       * 注意：next({ path: to.path, replace: false }) 和 next()的理解
       */

      if (!sysStore.isAddAsyncRouter) {
        await routeMenuProcess(userStore, sysStore, routerInstance)
        sysStore.isAddAsyncRouter = true
        next({ path: to.fullPath, replace: true })
      }
    } else if (from.name === undefined && to.name !== 'Login') {
      // 刷新了页面的情况

      if (!sysStore.isAddAsyncRouter) {
        await routeMenuProcess(userStore, sysStore, routerInstance)
        sysStore.isAddAsyncRouter = true
        next({ path: to.fullPath, replace: true })
      }
    } else if (to.name === 'Login') {
      // 有token，但是想手动跳转登录页，返回指定页面
      next({ path: '/layout' })
    }

    // 挂载404通用路由 只在系统第一次进行挂载即可
    if (!isMounted404Router) {
      mountRoute(redirect404Router as RouteRecordRaw, routerInstance)
      isMounted404Router = true
    }

    // 放行路由
    next()
  } else {
    // 没有token的情况
    // 检查是否配置了白名单
    const isAccess = whiteRouteByName.includes(to.name as string)
    if (isAccess) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
}
