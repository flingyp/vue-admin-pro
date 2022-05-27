<template>
  <div @click="switchThemeMode('dark')" class="header-item-base-style" v-if="sysStore.themeMode === 'light'">
    <IconifyIconCom icon-label="bi:cloud-sun" :fontSize="18" />
  </div>
  <div @click="switchThemeMode('light')" class="header-item-base-style" v-if="sysStore.themeMode === 'dark'">
    <IconifyIconCom icon-label="bi:moon-stars" :fontSize="18" />
  </div>
</template>

<script setup lang="ts">
import { useSysStore } from '@/store/modules/SysStore'

import IconifyIconCom from '@/components/IconifyIconCom.vue'

import { useSwitchTheme } from '@/hooks/sysHook/useSwitchTheme'

const sysStore = useSysStore()
const switchTheme = useSwitchTheme()

switchTheme.currentThemeMode()

const switchThemeMode = (mode: 'light' | 'dark') => {
  switchTheme.switchTheme(mode)
}
</script>
