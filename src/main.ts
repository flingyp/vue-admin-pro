import { createApp } from 'vue'

import App from './App.vue'

import initStyle from '@/style/InitStyle'
import { initRouterInstance } from '@/router/index'
import { initStore } from '@/store/index'

const app = createApp(App)

function InitAPP() {
  // 初始化样式
  initStyle()

  // 初始化路由
  initRouterInstance(app)

  // 初始化状态管理
  initStore(app)

  app.mount('#app')
}

InitAPP()
