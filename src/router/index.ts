import { createRouter, createWebHashHistory } from 'vue-router'
import { App } from 'vue'

import { filterNotSysLinkRoutes } from './utils/handleRoute'

// 常量路由、 异步路由
import { constantRouters } from './routers/constantRouters'

// 全局路由控制守卫：逻辑控制方法
import GlobalBeforeEach from './globalBeforeEach'

const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes: filterNotSysLinkRoutes(constantRouters)
  // routes: constantRouters
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
  await GlobalBeforeEach(to, from, next, routerInstance)
})

export default routerInstance

export const initRouterInstance = (app: App) => {
  app.use(routerInstance)
}
