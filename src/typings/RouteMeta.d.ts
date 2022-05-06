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
    // 路由是否需要KeepAlive（默认true）
    cache?: boolean
    // 路由菜单地址： 系统链接 | 内链链接 | 外链链接
    link?: 'SYS_Link' | 'Internal_Link' | 'External_Link'

    [key: string]: any
  }
}
