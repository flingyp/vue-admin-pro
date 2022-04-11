export type themeModeType = 'light' | 'dark'

export type layoutModeType = 'LEFT_MENU_MODE' | 'LEFT_MENU_MIX_MODE' | 'TOP_MENU_MODE' | 'TOP_MIX_MENU_MODE'

export type ThemeColorTypes = 'primary' | 'info' | 'success' | 'warning' | 'error'
export type ThemeColorScene = '' | 'Hover' | 'Pressed' | 'Suppl'
export type ThemeColorName = `${ThemeColorTypes}Color${ThemeColorScene}`
export type ThemeColor = {
  [key in ThemeColorName]?: string
}

// 系统配置
export interface ISysConfig {
  themeMode: themeModeType // 主题模式
  isNeedCollapsed: boolean // 侧边栏（是否折叠）
  layoutMode: layoutModeType // 布局模式
  themeColor: string // 主题颜色
}
