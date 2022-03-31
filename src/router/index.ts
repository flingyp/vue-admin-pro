import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { App } from 'vue'

// 常量路由
const constantRouters: RouteRecordRaw[] = [
  {
    path: '/dev/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  }
]

const routerInstance = createRouter({
  history: createWebHashHistory(),
  routes: constantRouters
})

export default routerInstance

export const initRouterInstance = (app: App) => {
  app.use(routerInstance)
}
