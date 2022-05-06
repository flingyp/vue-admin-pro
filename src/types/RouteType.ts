import { RouteMeta } from 'vue-router'

export interface CustomRouteRecordRaw {
  path: string
  name?: string
  component?: unknown
  redirect?: string
  children?: CustomRouteRecordRaw[]
  meta?: RouteMeta
}
