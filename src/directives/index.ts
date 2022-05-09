import { App } from 'vue'

import VButtonPermission from './VButtonPermission'

export const initGlobalDirectives = (app: App<Element>) => {
  VButtonPermission(app)
}
