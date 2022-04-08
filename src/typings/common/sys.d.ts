import 'vue-router'

import type { GlobalThemeOverrides } from 'naive-ui'

declare module 'vue-router' {
  interface RouteMeta {
    // 菜单标题
    title?: string
    // 菜单图标
    icon?: string
    // 是否显示在菜单
    isShow?: boolean
    // 访问此路由需要的权限
    permission?: string[]
  }
}

type themeModeType = 'light' | 'dark'
type layoutModeType = 'LEFT_MENU_MODE' | 'LEFT_MENU_MIX_MODE' | 'TOP_MENU_MODE' | 'TOP_MIX_MENU_MODE'
type ThemeColorTypes = 'primary' | 'info' | 'success' | 'warning' | 'error'
type ThemeColorScene = '' | 'Hover' | 'Pressed' | 'Suppl'
type ThemeColorName = `${ThemeColorTypes}Color${ThemeColorScene}`
type ThemeColor = {
  [key in ThemeColorName]?: string
}

// 系统配置
interface ISysConfig {
  themeMode: themeModeType // 主题模式
  isNeedCollapsed: boolean // 侧边栏（是否折叠）
  layoutMode: layoutModeType // 布局模式
  themeColor: string // 主题颜色
}
