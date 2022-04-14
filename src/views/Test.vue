<template>
  <div class="m-[1rem] flex items-center flex-wrap">
    <n-card title="测试Naive Ui 组件" hoverable>
      <n-button>Default</n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-card>

    <n-card title="测试WindiCSS" hoverable>
      <div class="text-[1rem] text-red-400 dark:text-green-400 dark:text-[2rem]">Vue Admin Pro</div>
    </n-card>

    <n-card title="定制WindiCSS色值" hoverable>
      <div class="text-primary">需要在windi.config.ts theme.extend.colors 中重写</div>
      <div class="text-primary">查看windicss文档 colors 部分</div>
      <div class="text-primary">Vue Admin Pro</div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard, NButton } from 'naive-ui'
</script>

<style scoped>
.n-card {
  display: inline-block;
  max-width: 300px;
  height: 200px;
  margin: 10px;
  vertical-align: top; /* 设置元素的垂直对齐方式 */
}
</style>
