import type { RouteRecordRaw } from 'vue-router'

export const constantRouters: RouteRecordRaw[] = [
  {
    path: '/dev/test',
    name: 'Test',
    component: import('@/views/test.vue'),
    meta: {
      title: '测试页面',
      icon: 'mdi-light:format-indent-increase',
      isShow: false
    }
  },
  {
    path: '/layout',
    name: 'LayoutTest',
    component: import('@/layouts/index.vue'),
    meta: {
      isShow: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: import('@/views/login/loginIndex.vue'),
    meta: {
      isShow: false
    }
  },
  {
    path: '/404',
    name: '404',
    component: import('@/views/common/notFound.vue'),
    meta: {
      isShow: false
    }
  }
]

export const redirect404Router: RouteRecordRaw = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  meta: {
    isShow: false
  }
}
