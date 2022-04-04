<template>
  <n-layout-header bordered class="h-[6rem] flex">
    <!-- hover:(bg-[#f6f6f6]) -->
    <div v-if="sysStore.siderMenuCollapsed" @click="clickIsCollapsedSider(false)" class="header-item-base-style">
      <IconifyIconVue icon-label="mdi-light:format-indent-increase" :fontSize="20" />
    </div>

    <div v-else @click="clickIsCollapsedSider(true)" class="header-item-base-style">
      <IconifyIconVue icon-label="mdi-light:format-indent-decrease" :fontSize="20" />
    </div>

    <theme-mode-icon></theme-mode-icon>
  </n-layout-header>
</template>

<script setup lang="ts">
import { NLayoutHeader } from 'naive-ui'

import IconifyIconVue from '@/components/iconifyIcon.vue'
import ThemeModeIcon from '../../common/themeModeIcon.vue'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()

const clickIsCollapsedSider = (collapsed: boolean) => {
  sysStore.setIsCollapsed(collapsed)
}
</script>

<style scoped></style>
