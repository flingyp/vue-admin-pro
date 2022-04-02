import { defineStore } from 'pinia'
import type { MenuOption } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'

interface ISysStoreState {
  constantRoutes?: RouteRecordRaw[]
  asyncRoutes?: RouteRecordRaw[]
  sysMenus?: MenuOption[]
  isCollapsed?: boolean // 系统侧边栏是否折叠
}

export const useSysStore = defineStore('sysStore', {
  state: () => {
    const sysStoreState: ISysStoreState = {
      constantRoutes: [],
      asyncRoutes: [],
      sysMenus: [],
      isCollapsed: false
    }
    return sysStoreState
  },
  actions: {
    setSysMenus(menus: MenuOption[]) {
      this.sysMenus = menus
    },
    setConstantRoutes(routes: RouteRecordRaw[]) {
      this.constantRoutes = routes
    },
    setAsyncRoutes(routes: RouteRecordRaw[]) {
      this.asyncRoutes = routes
    },
    setIsCollapsed(collapsed: boolean) {
      console.log('collapsed', collapsed)

      this.isCollapsed = collapsed
    }
  }
})
