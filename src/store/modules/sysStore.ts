import { defineStore } from 'pinia'
import type { MenuOption } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'
import { ISysConfig, themeModeType } from '@/typings/common/sys'

import { getLocalKey } from '@/utils/common/handleLocalStorage'

interface ISysStoreState {
  constantRoutes?: RouteRecordRaw[]
  asyncRoutes?: RouteRecordRaw[]
  sysMenus?: MenuOption[]
  sysConfig: ISysConfig
}

export const useSysStore = defineStore('sysStore', {
  state: () => {
    const sysStoreState: ISysStoreState = {
      constantRoutes: [],
      asyncRoutes: [],
      sysMenus: [],
      sysConfig: {
        themeMode: (getLocalKey('themeMode') as themeModeType) || 'light',
        isNeedCollapsed: false
      }
    }
    return sysStoreState
  },
  getters: {
    themeMode: (state) => state.sysConfig.themeMode,
    siderMenuCollapsed: (state) => state.sysConfig.isNeedCollapsed
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
      this.sysConfig.isNeedCollapsed = collapsed
    },
    setThemeMode(mode: themeModeType) {
      this.sysConfig.themeMode = mode
    }
  }
})
