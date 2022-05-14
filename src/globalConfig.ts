interface SycGlobalConfig {
  RouteHandleConfig: 'Web' | 'Serve'
}

const sysGlobalConfig: SycGlobalConfig = {
  RouteHandleConfig: 'Serve'
}

export const { RouteHandleConfig } = sysGlobalConfig
