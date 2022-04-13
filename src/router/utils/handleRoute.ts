import type { MenuOption } from 'naive-ui'
import type { Router, RouteRecordRaw } from 'vue-router'

import iconifyRender from '@/utils/iconifyIconRender'

/**
 * 挂载路由
 * @param route
 * @param routerInstance
 */
export const mountRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  routerInstance.addRoute(route)
}

// 过滤路由方法
const handleOperation = (handleRoutes: RouteRecordRaw[], handlePermissions: string[]) => {
  const filterSuccessRoutes: RouteRecordRaw[] = []

  handleRoutes.forEach((item) => {
    if (item.children && item.children.length !== 0) {
      item.children = handleOperation(item.children, handlePermissions)
    }
    let isHavePermission = false
    if (item.meta?.permission) {
      isHavePermission = item.meta.permission.some((_per) => {
        return handlePermissions.includes(_per)
      })
    }
    if (isHavePermission) {
      filterSuccessRoutes.push(item)
    }
  })

  return filterSuccessRoutes
}

/**
 * 过滤路由
 * @param routes
 * @param permissions
 */
export const filterRoutes = (routes: RouteRecordRaw[], permissions: string[]): RouteRecordRaw[] => {
  if (permissions.includes('*:*:*')) {
    // 超级管理员的权限
    return routes
  }
  return handleOperation(routes, permissions)
}

/**
 * 生成菜单方法
 * @param routes
 * @returns
 */
const handleCreateMenu = (routes: RouteRecordRaw[]): MenuOption[] => {
  const menus: MenuOption[] = []
  routes.forEach((route) => {
    const menu: MenuOption = {}
    if (route.meta?.isShow === undefined || route.meta.isShow === true) {
      if (route.children) {
        menu.children = handleCreateMenu(route.children)
      }
      menu.label = route.meta?.title
      menu.key = route.name as string
      if (route.meta?.icon) {
        menu.icon = iconifyRender(route.meta?.icon)
      }
      if (JSON.stringify(menu) !== '{}') {
        menus.push(menu)
      }
    }
  })

  return menus
}

/**
 * 生成菜单
 * @param routes
 * @param menus
 */
export const createMenus = (routes: RouteRecordRaw[]): MenuOption[] => {
  const menus = handleCreateMenu(routes)
  const newMenus = menus.map((menu) => {
    if (menu.children && menu.children.length === 1) {
      return menu.children[0]
    }
    return menu
  })
  return newMenus
}
