import { RouteMeta } from 'vue-router'

declare namespace SysTyping {
  interface RouteStruct {
    path: string
    name?: string
    component?: unknown
    redirect?: string
    children?: RouteStruct[]
    meta?: RouteMeta
  }
}
