/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // 启用类模式来切换暗黑主题
  darkMode: 'class',
  // 写HTML属性编写windi类
  attributify: true,
  // 配置采用类的组合
  shortcuts: {
    'box-page-center': 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2', // 盒子页面水平垂直居中
    'flex-center': 'flex justify-center items-center', // flex 水平垂直居中
    'flex-col-center': 'flex flex-col items-center justify-center',
    'header-item-base-style':
      'w-[4rem] h-full p-[1rem] cursor-pointer flex-center hover:(bg-[#f6f6f6]) dark:(hover:bg-[#333])' // 头部布局 item基本样式（参照控制侧边栏的按钮）
  },
  theme: {
    extend: {
      colors: {
        primary: 'var(--primaryColor)',
        'primary-hover': 'var(--primaryColorHover)',
        'primary-pressed': 'var(--primaryColorPressed)',
        info: 'var(--infoColor)',
        'info-hover': 'var(--infoColorHover)',
        'info-pressed': 'var(--infoColorPressed)',
        success: 'var(--successColor)',
        'success-hover': 'var(--successColorHover)',
        'success-pressed': 'var(--successColorPressed)',
        warning: 'var(--warningColor)',
        'warning-hover': 'var(--warningColorHover)',
        'warning-pressed': 'var(--warningColorPressed)',
        error: 'var(--errorColor)',
        'error-hover': 'var(--errorColorHover)',
        'error-pressed': 'var(--errorColorPressed)'
      }
    }
  }
})
