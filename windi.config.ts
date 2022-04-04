/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // 启用类模式来切换暗黑主题
  darkMode: 'class',
  // 配置采用类的组合
  shortcuts: {
    'box-page-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', // 盒子页面水平垂直居中
    'flex-center': 'flex justify-center items-center', // flex 水平垂直居中
    'header-item-base-style': 'w-[4rem] h-full p-[1rem] cursor-pointer  flex-center' // 头部布局 item基本样式（参照控制侧边栏的按钮）
  }
})
