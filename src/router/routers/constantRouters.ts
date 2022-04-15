import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layouts/index.vue'

export const constantRouters: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/test',
    meta: {
      isShow: false
    }
  },
  {
    path: '/layout',
    component: () => import('@/layouts/testIndex.vue'),
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
        path: '',
        name: 'TestIndex',
        component: () => import('@/views/test.vue'),
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
    component: () => import('@/views/login/LoginIndex.vue'),
    meta: {
      isShow: false
    }
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    children: [
      {
        path: '',
        name: 'AboutIndex',
        component: () => import('@/views/about/AboutIndex.vue'),
        meta: {
          title: '关于',
          icon: 'cib:about-me'
        }
      }
    ]
  },
  {
    path: '/common',
    name: 'Common',
    component: Layout,
    meta: {
      title: '常用页面',
      icon: 'entypo:creative-commons-share'
    },
    children: [
      {
        path: 'component',
        name: 'CommonComponent',
        component: () => import('@/views/common/uiComponents/ComponentIndex.vue'),
        meta: {
          title: '常用组件',
          icon: 'bxs:component'
        }
      },
      {
        path: 'icon',
        name: 'CommonIcon',
        component: () => import('@/views/common/icons/IconIndex.vue'),
        meta: {
          title: '图标示例',
          icon: 'line-md:iconify1'
        }
      },
      {
        path: '404',
        name: 'Common404',
        component: () => import('@/views/common/exceptPage/NotFound.vue'),
        meta: {
          title: '404页面',
          icon: 'tabler:error-404'
        }
      },
      {
        path: '500',
        name: 'Common500',
        component: () => import('@/views/common/exceptPage/ServerExcept.vue'),
        meta: {
          title: '500页面',
          icon: 'la:500px'
        }
      }
    ]
  },
  {
    path: '/multi',
    name: 'Multi',
    component: Layout,
    meta: {
      title: ' 多级菜单',
      icon: 'octicon:multi-select-24'
    },
    children: [
      {
        path: 'first',
        name: 'MultiFirst',
        component: () => import('@/views/common/multiLevelMenu/multiFirst/MultiFirstIndex.vue'),
        meta: {
          title: '一级菜单',
          icon: 'octicon:multi-select-24'
        }
      },
      {
        path: 'two',
        name: 'MultiTwo',
        component: () => import('@/views/common/multiLevelMenu/multiTwo/MultiTwoIndex.vue'),
        meta: {
          title: '二级菜单',
          icon: 'octicon:multi-select-24'
        },
        children: [
          {
            path: 'first',
            name: 'MultiTwo_First',
            component: () => import('@/views/common/multiLevelMenu/multiTwo/MultiTwo_First.vue'),
            meta: {
              title: '子菜单1',
              icon: 'octicon:multi-select-24'
            }
          },
          {
            path: 'two',
            name: 'MultiTwo_Second',
            component: () => import('@/views/common/multiLevelMenu/multiTwo/MultiTwo_Second.vue'),
            meta: {
              title: '子菜单2',
              icon: 'octicon:multi-select-24'
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
