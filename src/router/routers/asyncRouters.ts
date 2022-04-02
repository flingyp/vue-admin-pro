import { RouteRecordRaw } from 'vue-router'

import Layout from '@/layouts/index.vue'

export const asyncRouters: RouteRecordRaw[] = [
  {
    path: '/permission1',
    name: 'Permission1',
    component: Layout,
    meta: {
      title: '权限测试1部分',
      icon: 'mdi-light:format-indent-increase',
      permission: ['sys:user:*', 'sys:role:*']
    },
    children: [
      {
        path: 'user',
        name: 'PermissionUser',
        component: import('@/views/permission/permissionUser.vue'),
        meta: { title: '权限测试1-User', icon: 'mdi-light:format-indent-increase', permission: ['sys:user:*'] }
      },
      {
        path: 'role',
        name: 'PermissionRser',
        component: import('@/views/permission/permissionRole.vue'),
        meta: { title: '权限测试1-Role', icon: 'mdi-light:format-indent-increase', permission: ['sys:role:*'] }
      }
    ]
  },
  {
    path: '/permission2',
    name: 'Permission2',
    component: Layout,
    meta: { title: '权限测试2部分', icon: 'mdi-light:format-indent-decrease', permission: ['sys:test:*'] },
    children: [
      {
        path: 'test',
        name: 'PermissionTest',
        component: import('@/views/permission/permissionTest.vue'),
        meta: { title: '权限测试2-Test', icon: 'mdi-light:format-indent-decrease', permission: ['sys:test:*'] }
      }
    ]
  }
]
