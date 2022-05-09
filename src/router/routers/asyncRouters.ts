import Layout from '@/layouts/index.vue'
import { CustomRouteRecordRaw } from '@/types/RouteType'

/**
 * 异步路由：用来定义一些需要对应权限的路由，如果不需要权限的路由在常量路由中定义即可
 * 如果子路由需要某个权限，则必须先在父路由先定义此权限，如果父路由没有定义此权限，系统不知道 整个父路由都会被过滤
 */

/**
 * 用户是否有权限根据 *:*:* 结构去判断
 * (* 代表任何权限， 一般第一个代表系统，第二个代表系统模块，第三个代表具体的模块业务)
 * 例如：sys:user:update： 解读为用户模块更新权限）
 */
export const asyncRouters: CustomRouteRecordRaw[] = [
  {
    path: '/permission',
    name: 'Permission',
    component: Layout,
    meta: {
      title: '菜单权限控制',
      icon: 'icon-park-outline:permissions',
      permission: ['sys:root:*', 'sys:user:*']
    },
    children: [
      {
        path: 'root',
        name: 'RootPermission',
        component: () => import('@/views/permissions/RootPermission.vue'),
        meta: {
          title: '超级管理员可见',
          icon: 'icon-park-outline:permissions',
          permission: ['sys:root:*']
        }
      },
      {
        path: 'user',
        name: 'UserPermission',
        component: () => import('@/views/permissions/UserPermission.vue'),
        meta: {
          title: '普通用户可见',
          icon: 'icon-park-outline:permissions',
          permission: ['sys:user:*']
        }
      },
      {
        path: 'com',
        name: 'ComPermission',
        component: () => import('@/views/permissions/ComPermission.vue'),
        meta: {
          title: '超级管理员、普通用户可见',
          icon: 'icon-park-outline:permissions',
          permission: ['sys:root:*', 'sys:user:*']
        }
      },
      {
        path: 'button',
        name: 'ButtonPermission',
        component: () => import('@/views/permissions/ButtonPermission.vue'),
        meta: {
          title: '按钮权限控制',
          icon: 'icon-park-outline:permissions',
          permission: ['sys:root:*', 'sys:user:*']
        }
      }
    ]
  }
]
