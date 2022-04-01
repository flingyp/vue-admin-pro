<template>
  <n-notification-provider>
    <!-- <suspense> 处理在setup语法糖直接使用await导致页面空白问题 -->
    <!-- https://blog.csdn.net/zy21131437/article/details/113823014 -->
    <suspense>
      <router-view></router-view>
    </suspense>
  </n-notification-provider>
</template>

<script setup lang="ts">
import { NNotificationProvider } from 'naive-ui'
</script>

<style></style>
