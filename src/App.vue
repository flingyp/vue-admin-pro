<template>
  <n-config-provider
    :theme="SysStoreModule.themeMode === 'light' ? undefined : darkTheme"
    :theme-overrides="SysStoreModule.naiveUiGlobalThemeOverrides"
    :locale="locale"
  >
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
import { ref } from 'vue'
import { NConfigProvider, NNotificationProvider, darkTheme, zhCN } from 'naive-ui'
import type { NLocale } from 'naive-ui'

import { useSysStoreModule } from '@/store/modules/SysStoreModule'

const SysStoreModule = useSysStoreModule()
const locale = ref<NLocale | null>(zhCN)
</script>
