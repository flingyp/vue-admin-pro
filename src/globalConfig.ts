import { ThemeModeType } from './types/SysType'

interface SycGlobalConfig {
  RouteHandleConfig: 'Web' | 'Serve'
  DefaultThemeColor: string
  DefaultThemeMode: ThemeModeType
}

export const sysGlobalConfig: SycGlobalConfig = {
  RouteHandleConfig: 'Serve',
  DefaultThemeColor: '#7B1FA2',
  DefaultThemeMode: 'light'
}
