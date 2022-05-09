<template>
  <div class="m-[2rem]">
    <n-button type="primary" v-button-permission="['sys:user:list']">普通用户可见按钮</n-button>
    <n-button type="primary" v-button-permission="['sys:root:list']">超级管理员可见按钮</n-button>
    <n-button type="primary" v-button-permission="['sys:user:list', 'sys:root:list']"
      >超级管理员、普通用户可见按钮</n-button
    >
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<style scoped>
.n-button {
  margin: 0 10px;
}
</style>
