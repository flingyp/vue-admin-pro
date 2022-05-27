import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import type { MenuOption, GlobalThemeOverrides } from 'naive-ui'
import { ISysConfig, layoutModeType, ThemeColorTypes, themeModeType } from '@/types/SysType'

import { getLocalKey, setLocalKey } from '@/utils/common/HandleLocalStorageUtil'

import { addThemeCssVarsToHtml, getSysThemeColors } from '../utils/ThemeColors'

interface ISysStoreModuleState {
  constantRoutes: RouteRecordRaw[]
  asyncRoutes: RouteRecordRaw[]
  sysMenus: MenuOption[]
  sysConfig: ISysConfig
  tabMenusKey: String[]
  isNeedReload: boolean
  isAddAsyncRouter: boolean
}

export const useSysStoreModule = defineStore('SysStoreModule', {
  state: () => {
    const SysStoreModuleState: ISysStoreModuleState = {
      constantRoutes: [],
      asyncRoutes: [],
      sysMenus: [],
      sysConfig: {
        themeMode: (getLocalKey('themeMode') as themeModeType) || 'light',
        isNeedCollapsed: false,
        layoutMode: 'LEFT_MENU_MODE',
        themeColor: getLocalKey('themeColor') || '#18a058',
        leftIsInverted: false,
        topIsInverted: false,
        leftExtendWidth: 264,
        leftShrinkWidth: 50,
        headerHeight: 70
      },
      tabMenusKey: getLocalKey('tabMenu')?.split(',') || [],
      isNeedReload: false,
      isAddAsyncRouter: false // 是否添加了动态路由
    }
    return SysStoreModuleState
  },
  getters: {
    themeMode: (state) => state.sysConfig.themeMode,
    siderMenuCollapsed: (state) => state.sysConfig.isNeedCollapsed,
    layoutMode: (state) => state.sysConfig.layoutMode,
    themeColor: (state) => state.sysConfig.themeColor,
    leftIsInverted: (state) => state.sysConfig.leftIsInverted,
    topIsInverted: (state) => state.sysConfig.topIsInverted,
    leftExtendWidth: (state) => state.sysConfig.leftExtendWidth,
    leftShrinkWidth: (state) => state.sysConfig.leftShrinkWidth,
    headerHeight: (state) => state.sysConfig.headerHeight,
    naiveUiGlobalThemeOverrides(state): GlobalThemeOverrides {
      // 主色值
      const primaryColor: [ThemeColorTypes, string] = ['primary', state.sysConfig.themeColor]
      // 其它默认场景颜色
      const otherDefaultSceneColors: [ThemeColorTypes, string][] = [
        ['success', '#43a047'],
        ['warning', '#e53935'],
        ['info', '#126CDB'],
        ['error', '#ffb300']
      ]
      const sysThemeColors = getSysThemeColors([primaryColor, ...otherDefaultSceneColors])
      addThemeCssVarsToHtml(sysThemeColors)
      return {
        common: {
          ...sysThemeColors
        }
      }
    },
    sysAllMenus(state): MenuOption[] {
      const menus = state.sysMenus
      const handleSuccessMenus: MenuOption[] = []
      const spreadAllMenus = (needHandleMenus: MenuOption[]) => {
        needHandleMenus.forEach((item) => {
          if (item.children) {
            spreadAllMenus(item.children)
          } else {
            handleSuccessMenus.push(item)
          }
        })
      }
      // @ts-ignore
      spreadAllMenus(menus)
      return handleSuccessMenus
    },
    sysTabMenus(state): MenuOption[] {
      const allTbaMenusKey = state.tabMenusKey
      const allSysMenus = this.sysAllMenus
      const sysTabMenus: MenuOption[] = []
      allTbaMenusKey.forEach((key) => {
        const menuIndex = allSysMenus.findIndex((menu) => {
          return menu.key === key
        })
        if (menuIndex !== -1) {
          sysTabMenus.push(allSysMenus[menuIndex])
        }
      })

      return sysTabMenus
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
    },
    // 添加一个TabMenu
    addTabMenuKey(key: string) {
      if (!this.tabMenusKey.includes(key)) {
        this.tabMenusKey.push(key)
        if (getLocalKey('tabMenu') === undefined) {
          setLocalKey('tabMenu', key)
        } else {
          setLocalKey('tabMenu', `${getLocalKey('tabMenu')},${key}`)
        }
      }
    },
    // 删除一个TabMenu
    deleteTabMenuKey(key: string) {
      const menuKeyIndex = this.tabMenusKey.indexOf(key)
      const localTabMenuKeys = getLocalKey('tabMenu')?.split(',')
      const localMenuKeyIndex = localTabMenuKeys?.indexOf(key)
      if (menuKeyIndex !== -1 && localMenuKeyIndex !== -1 && menuKeyIndex === localMenuKeyIndex) {
        this.tabMenusKey.splice(menuKeyIndex, 1)
        localTabMenuKeys?.splice(menuKeyIndex, 1)
        setLocalKey('tabMenu', localTabMenuKeys?.join())
      }
    },
    // 设置TabMenu
    setTabMenuKeys(keys: string[]) {
      this.tabMenusKey = keys
      setLocalKey('tabMenu', keys.join())
    },
    // 设置左侧侧边栏是否为反转色
    setLeftIsInverted(value: boolean) {
      this.sysConfig.leftIsInverted = value
    },
    // 设置左侧侧边栏是否为反转色
    setTopIsInverted(value: boolean) {
      this.sysConfig.topIsInverted = value
    },
    // 设置侧边栏宽度
    setLeftExtendWidth(value: number) {
      this.sysConfig.leftExtendWidth = value
    },
    // 设置侧边栏收缩的宽度
    setLeftShrinkWidth(value: number) {
      this.sysConfig.leftShrinkWidth = value
    },
    // 设置头部高度
    setHeaderHeight(value: number) {
      this.sysConfig.headerHeight = value
    }
  }
})
