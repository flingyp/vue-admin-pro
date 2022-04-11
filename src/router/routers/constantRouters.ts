import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layouts/index.vue'

export const constantRouters: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/test/index',
    meta: {
      isShow: false
    }
  },
  {
    path: '/layout',
    component: import('@/layouts/testIndex.vue'),
    meta: {
      isShow: false
    }
  },
  {
    path: '/404',
    redirect: '/common/404'
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'TestIndex',
        component: import('@/views/test.vue'),
        meta: {
          title: '测试页面',
          icon: 'fluent:window-dev-tools-16-regular'
        }
      }
    ]
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
    path: '/common',
    name: 'Common',
    component: Layout,
    meta: {
      title: '常用页面',
      icon: 'emojione:page-facing-up'
    },
    children: [
      {
        path: '404',
        name: 'Common-404',
        component: import('@/views/common/notFound.vue'),
        meta: {
          title: '404页面',
          icon: 'tabler:error-404'
        }
      },
      {
        path: '500',
        name: 'Common-500',
        component: import('@/views/common/serverUnusual.vue'),
        meta: {
          title: '500页面',
          icon: 'la:500px'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    children: [
      {
        path: '',
        name: 'AboutIndex',
        component: import('@/views/about/aboutIndex.vue'),
        meta: {
          title: '关于',
          icon: 'cib:about-me'
        }
      }
    ]
  },
  {
    path: '/multi',
    name: 'Multi',
    component: Layout,
    meta: {
      title: '多级菜单',
      icon: 'cib:about-me'
    },
    children: [
      {
        path: 'first',
        name: 'MultiFirst',
        component: import('@/views/common/multi/first.vue'),
        meta: {
          title: '一级菜单',
          icon: 'cib:about-me'
        }
      },
      {
        path: 'two',
        name: 'MultiTwo',
        component: import('@/views/common/multi/two.vue'),
        meta: {
          title: '二级菜单',
          icon: 'cib:about-me'
        },
        children: [
          {
            path: 'two1',
            name: 'MultiTwo-One',
            component: import('@/views/common/multi/two1.vue'),
            meta: {
              title: '二级菜单-1',
              icon: 'cib:about-me'
            }
          },
          {
            path: 'two2',
            name: 'MultiTwo-Two',
            component: import('@/views/common/multi/two2.vue'),
            meta: {
              title: '二级菜单-2',
              icon: 'cib:about-me'
            }
          }
        ]
      }
    ]
  }
]

export const redirect404Router: RouteRecordRaw = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  meta: {
    isShow: false
  }
}
