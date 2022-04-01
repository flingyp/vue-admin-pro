import type { RouteRecordRaw } from 'vue-router'

const constantRouters: RouteRecordRaw[] = [
  {
    path: '/dev/test',
    name: 'Test',
    component: () => import('@/views/test.vue'),
    meta: {
      title: '测试页面'
    }
  },
  {
    path: '/layout',
    name: 'LayoutTest',
    component: () => import('@/layouts/layoutIndex.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/loginIndex.vue')
  }
]

export const redirect404Router: RouteRecordRaw = {
  path: '/:catchAll(.*)',
  redirect: '/404'
}

export default constantRouters
