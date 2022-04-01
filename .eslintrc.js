module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true // 处理直接使用 defineProps、defineEmits报错问题
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:prettier/recommended' // 添加prettier插件
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'vue/no-multiple-template-root': 'off', // 关闭对Vue文件唯一节点的检测
    'import/no-unresolved': 'off',
    'import/extensions': 'off'
  }
}
