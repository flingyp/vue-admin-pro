import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'

import { getLocalKey } from '@/utils/common/handleLocalStorage'

import { useUserStore } from '@/store/modules/userStore'

// 常量路由
import constantRouters from './routers/constantRouters'

// 白名单路由（不需要token，定义路由name）
const whiteRouteByName: string[] = ['Login']

const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes: constantRouters
})

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
routerInstance.beforeEach(async (to, from, next) => {
  // 获取本地token
  const localAccessToken = getLocalKey('accessToken')
  console.log('To--->', to)
  console.log('From--->', from)

  const userStore = useUserStore()

  if (localAccessToken) {
    await userStore.getUserInfo()
    next()
    // 有token
    // if (to.name !== 'Login') {
    // } else if (to.name === 'Login') {
    // }
  } else {
    // 没有token
    const isAccess = whiteRouteByName.includes(to.name as string) // 检查是否配置了白名单
    if (isAccess) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
})

export default routerInstance

export const initRouterInstance = (app: App) => {
  app.use(routerInstance)
}
