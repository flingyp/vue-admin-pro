import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { App } from 'vue'

// 常量路由
const constantRouters: RouteRecordRaw[] = [
  {
    path: '/dev/test',
    name: 'Test',
    component: () => import('@/views/Test.vue')
  },
  {
    path: '/layout',
    name: 'LayoutTest',
    component: () => import('@/layouts/LayoutIndex.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginIndex.vue')
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
