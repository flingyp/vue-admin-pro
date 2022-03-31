/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

export default defineConfig({
  // 配置别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: true,
    // 指定项目启动端口
    port: 3000,
    // 启动项目时自动打开
    open: true,
    // 允许跨域
    cors: true,
    // 开发时的解决跨域问题
    // https://cn.vitejs.dev/config/#server-proxy
    proxy: {}
  },
  plugins: [WindiCSS(), vue()]
})
