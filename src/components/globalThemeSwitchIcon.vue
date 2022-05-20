<template>
  <div @click="switchThemeMode('dark')" class="cursor-pointer dark:text-[#fff]" v-if="sysStore.themeMode === 'light'">
    <IconifyIconVue icon-label="bi:cloud-sun" :fontSize="18" />
  </div>
  <div @click="switchThemeMode('light')" class="cursor-pointer dark:text-[#fff]" v-if="sysStore.themeMode === 'dark'">
    <IconifyIconVue icon-label="bi:moon-stars" :fontSize="18" />
  </div>
</template>

<script setup lang="ts">
import { useSysStore } from '@/store/modules/sysStore'

import IconifyIconVue from '@/components/IconifyIcon.vue'

import { useSwitchTheme } from '@/hooks/sysHook/useSwitchTheme'

const sysStore = useSysStore()
const switchTheme = useSwitchTheme()

switchTheme.currentThemeMode()

const switchThemeMode = (mode: 'light' | 'dark') => {
  switchTheme.switchTheme(mode)
}
</script>
