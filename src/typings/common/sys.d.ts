import 'vue-router'

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

// 系统配置
interface ISysConfig {
  themeMode: themeModeType // 主题模式
  isNeedCollapsed: boolean // 侧边栏（是否折叠）
}
