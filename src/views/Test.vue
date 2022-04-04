<template>
  <div>
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
      <div class="text-[1rem] text-blue-600">Vue Admin Pro</div>
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
  margin: 15px 10px;
  /* 设置元素的垂直对齐方式 */
  vertical-align: top;
}
</style>
