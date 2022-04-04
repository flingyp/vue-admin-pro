import { App } from 'vue'
import { createPinia } from 'pinia'

export const initStore = (app: App) => {
  app.use(createPinia())
}
