import { SysTyping } from '@/typings/Sys'

import Layout from '@/layouts/index.vue'
import IframeIndexVue from '@/views/plugins/iframe/IframeIndex.vue'
import NotFound from '@/views/common/exceptPage/NotFound.vue'

/**
 * Vite 提供的API import.meta.glob
 * https://cn.vitejs.dev/guide/features.html#glob-import
 * () => import(`../../view/xx.vue`) 这种动态导入的方式在 Vite 不行了
 * import.meta.glob() 会将指定路径文件夹的文件 () => import(`../../view/xx.vue`) 输出给我们
 * 参考文章：https://wenku.baidu.com/view/141dd0eb0608763231126edb6f1aff00bed5709e.html
 * 解决：在做对接后台获取路由接口 动态设置 component 路由懒加载的形式。
 * 之前是参考若依系统的拼接方式，发现行不通了，现在可以参数这个
 */
const allViewModules = import.meta.glob('../../views/**/*.vue')

/**
 * @param component 文件夹/文件名 （例如：permission/ButtonPermission）
 * @returns
 */
const getViewAsyncImportPath = (component: string) => {
  const asyncImportPath = allViewModules[`../../views/${component}.vue`]

  if (asyncImportPath !== undefined) {
    return allViewModules[`../../views/${component}.vue`]
  }
  // 如果返回的菜单不存在，这指定404组件
  return NotFound
}

/**
 * 将后端服务返回的字符串路径转为VueRouter中路由懒加载的形式
 * 使用 import 实现生产环境的路由懒加载
 */
export const loadViewComponent = (component: string) => {
  return getViewAsyncImportPath(component)
}
/**
 * 将数据库的路由数据结构整理成VueRouter中的路由
 * 主要是对component字段的 页面路由懒加载形式拼接
 * @param ServeRouters
 */
export const handleServeRouteToSysRoute = (ServeRouters: SysTyping.RouteStruct[]): SysTyping.RouteStruct[] => {
  return ServeRouters.map((ServeRoute) => {
    if (ServeRoute.children) {
      ServeRoute.children = handleServeRouteToSysRoute(ServeRoute.children)
    }
    // 特殊组件处理
    if (ServeRoute.component === 'Layout') {
      ServeRoute.component = Layout
    } else if (ServeRoute.component === 'IframeIndexVue') {
      ServeRoute.component = IframeIndexVue
    } else {
      ServeRoute.component = loadViewComponent(ServeRoute.component as string)
    }

    return ServeRoute
  })
}
