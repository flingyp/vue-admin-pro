import type { MenuOption } from 'naive-ui'
import type { Router, RouteRecordRaw } from 'vue-router'

import iconifyRender from '@/utils/iconifyIconRender'

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
      if (route.meta?.link && route.meta.link !== 'SYS_Link') {
        if (route.meta.link === 'External_Link') {
          menu.label = `${menu.label} (外链)`
        }
        if (route.meta.link === 'Internal_Link') {
          menu.label = `${menu.label} (内链)`
        }
        menu.link = route.meta.link
        menu.url = route.meta.url
      }
      if (JSON.stringify(menu) !== '{}') {
        menus.push(menu)
      }
    }
  })

  return menus
}

const handleNotSysLinkOperation = (routes: RouteRecordRaw[]) => {
  const needHandleRoutes: RouteRecordRaw[] = []

  routes.forEach((route) => {
    if (route.children) {
      route.children = handleNotSysLinkOperation(route.children)
    }

    needHandleRoutes.push(route)

    // if (!route.meta || !route.meta.link || (route.meta.link && route.meta.link === 'SYS_Link')) {
    //   needHandleRoutes.push(route)
    // } else {
    //   let shapeExternalRoute: RouteRecordRaw = { path: '', redirect: '' }
    //   if (route.meta.link === 'External_Link') {
    //     shapeExternalRoute = {
    //       path: `/ShapeRoute${String(route.name)}`,
    //       name: route.name,
    //       redirect: String(route.redirect),
    //       meta: route.meta
    //     }
    //   } else if (route.meta.link === 'Internal_Link') {
    //     route.meta.url = route.redirect
    //     shapeExternalRoute = {
    //       path: `/ShapeRoute${String(route.name)}`,
    //       name: route.name,
    //       redirect: '/iframe',
    //       meta: route.meta
    //     }
    //     console.log('shapeExternalRoute：内链', shapeExternalRoute)
    //   }
    //   needHandleRoutes.push(shapeExternalRoute)
    // }
  })
  return needHandleRoutes
}

/**
 * 挂载路由
 * @param route
 * @param routerInstance
 */
export const mountRoute = (route: RouteRecordRaw, routerInstance: Router) => {
  routerInstance.addRoute(route)
}

/**
 * 过滤路由（过滤相关权限）
 * @param routes
 * @param permissions
 */
export const filterRoutes = (routes: RouteRecordRaw[], permissions: string[]): RouteRecordRaw[] => {
  const needHandleRoutes = routes

  if (permissions.includes('*:*:*')) {
    // 超级管理员的权限
    return needHandleRoutes
  }

  return handleOperation(routes, permissions)
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

/**
 * 过滤路由（过滤不是系统链接，外部链接）：不应该挂载到路由中，但应该生成菜单
 * @param routes
 * @returns
 */
export const filterNotSysLinkRoutes = (routes: RouteRecordRaw[]) => {
  const isSysLinkRoutes = routes

  return handleNotSysLinkOperation(isSysLinkRoutes)
}
