/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // 配置采用类的组合
  shortcuts: {
    'box-page-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' // 盒子页面水平垂直居中
  }
})
