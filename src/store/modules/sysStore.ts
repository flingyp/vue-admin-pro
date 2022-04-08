import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption, GlobalThemeOverrides } from 'naive-ui'
import {
  ISysConfig,
  layoutModeType,
  ThemeColor,
  ThemeColorScene,
  ThemeColorTypes,
  themeModeType,
  ThemeColorName
} from '@/typings/common/sys'

import { getLocalKey } from '@/utils/common/handleLocalStorage'
import { getColorPalette } from '@/utils/common/colors'

interface ISysStoreState {
  constantRoutes?: RouteRecordRaw[]
  asyncRoutes?: RouteRecordRaw[]
  sysMenus?: MenuOption[]
  sysConfig: ISysConfig
}

interface ColorAction {
  scene: ThemeColorScene
  handler: (color: string) => string
}

// 其它默认场景颜色
const otherDefaultSceneColors: [ThemeColorTypes, string][] = [
  ['success', '#43a047'],
  ['warning', '#e53935'],
  ['info', '#126CDB'],
  ['error', '#ffb300']
]

/**
 * 获取主题颜色的各种场景颜色值
 * @param colors
 * @returns
 */
const getSysThemeColors = (colors: [ThemeColorTypes, string][]) => {
  const colorActions: ColorAction[] = [
    { scene: '', handler: (color) => color },
    { scene: 'Suppl', handler: (color) => color },
    { scene: 'Hover', handler: (color) => getColorPalette(color, 5) },
    { scene: 'Pressed', handler: (color) => getColorPalette(color, 7) }
  ]
  const themeColor: ThemeColor = {}
  colors.forEach((color) => {
    colorActions.forEach((action) => {
      const [colorType, colorValue] = color
      const colorKey: ThemeColorName = `${colorType}Color${action.scene}`
      themeColor[colorKey] = action.handler(colorValue)
    })
  })
  return themeColor
}

/** 添加css vars至html */
const addThemeCssVarsToHtml = (themeVars: ThemeColor) => {
  const keys = Object.keys(themeVars)
  const style: string[] = []
  keys.forEach((key) => {
    // @ts-ignore
    style.push(`--${key}:${themeVars[key]}`)
  })
  const styleStr = style.join(';')
  document.body.style.cssText += styleStr
}

export const useSysStore = defineStore('sysStore', {
  state: () => {
    const sysStoreState: ISysStoreState = {
      constantRoutes: [],
      asyncRoutes: [],
      sysMenus: [],
      sysConfig: {
        themeMode: (getLocalKey('themeMode') as themeModeType) || 'light',
        isNeedCollapsed: false,
        layoutMode: 'LEFT_MENU_MODE',
        themeColor: getLocalKey('themeColor') || '#18a058'
      }
    }
    return sysStoreState
  },
  getters: {
    themeMode: (state) => state.sysConfig.themeMode,
    siderMenuCollapsed: (state) => state.sysConfig.isNeedCollapsed,
    layoutMode: (state) => state.sysConfig.layoutMode,
    themeColor: (state) => state.sysConfig.themeColor,
    naiveUiGlobalThemeOverrides(state): GlobalThemeOverrides {
      const primaryColor: [ThemeColorTypes, string] = ['primary', state.sysConfig.themeColor]
      const sysThemeColors = getSysThemeColors([primaryColor, ...otherDefaultSceneColors])
      addThemeCssVarsToHtml(sysThemeColors)
      return {
        common: {
          ...sysThemeColors
        }
      }
    }
  },
  actions: {
    setSysMenus(menus: MenuOption[]) {
      /**
       * 提示：类型实例化过深，且可能无限
       * 暂且不知道咋解决
       */
      // @ts-ignore
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
    },
    setLayoutMode(mode: layoutModeType) {
      if (mode === 'LEFT_MENU_MIX_MODE') {
        this.sysConfig.isNeedCollapsed = true
        this.sysConfig.layoutMode = 'LEFT_MENU_MODE'
      } else {
        this.sysConfig.isNeedCollapsed = false
        this.sysConfig.layoutMode = mode
      }
    },
    setThemeColor(color: string) {
      this.sysConfig.themeColor = color
    }
  }
})
