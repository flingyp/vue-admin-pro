<template>
  <div
    @click="switchThemeMode('dark')"
    class="cursor-pointer dark:text-[#fff]"
    v-if="SysStoreModule.themeMode === 'light'"
  >
    <IconifyIconCom icon-label="bi:cloud-sun" :fontSize="18" />
  </div>
  <div
    @click="switchThemeMode('light')"
    class="cursor-pointer dark:text-[#fff]"
    v-if="SysStoreModule.themeMode === 'dark'"
  >
    <IconifyIconCom icon-label="bi:moon-stars" :fontSize="18" />
  </div>
</template>

<script setup lang="ts">
import { useSysStoreModule } from '@/store/modules/SysStoreModule'

import IconifyIconCom from '@/components/IconifyIconCom.vue'

import { UseSwitchThemeHook } from '@/hooks/sysHook/UseSwitchThemeHook'

const SysStoreModule = useSysStoreModule()
const switchTheme = UseSwitchThemeHook()

switchTheme.currentThemeMode()

const switchThemeMode = (mode: 'light' | 'dark') => {
  switchTheme.switchTheme(mode)
}
</script>
