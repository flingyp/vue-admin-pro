import { createApp } from 'vue'

import App from './App.vue'

import initStyle from '@/style/InitStyle'
import { initRouterInstance } from '@/router/index'
import { initStore } from '@/store/index'
import { initGlobalDirectives } from './directives'

const app = createApp(App)

function InitAPP() {
  // 初始化样式
  initStyle()

  // 初始化路由
  initRouterInstance(app)

  // 初始化状态管理
  initStore(app)

  // 初始化全局自定义指令
  initGlobalDirectives(app)

  app.mount('#app')
}

InitAPP()
