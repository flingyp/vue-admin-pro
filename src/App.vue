<template>
  <n-config-provider :theme="sysStore.themeMode === 'light' ? undefined : darkTheme">
    <n-notification-provider>
      <!-- <suspense> 处理在setup语法糖直接使用await导致页面空白问题 -->
      <!-- https://blog.csdn.net/zy21131437/article/details/113823014 -->
      <suspense>
        <router-view></router-view>
      </suspense>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { NConfigProvider, NNotificationProvider, darkTheme } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
</script>
