<template>
  <!-- hover:(bg-[#f6f6f6]) -->
  <div v-if="sysStore.siderMenuCollapsed" @click="clickIsCollapsedSider(false)" class="header-item-base-style">
    <IconifyIconVue icon-label="mdi-light:format-indent-increase" :fontSize="20" />
  </div>

  <div v-else @click="clickIsCollapsedSider(true)" class="header-item-base-style">
    <IconifyIconVue icon-label="mdi-light:format-indent-decrease" :fontSize="20" />
  </div>
</template>

<script setup lang="ts">
import { useSysStore } from '@/store/modules/sysStore'

import IconifyIconVue from '@/components/iconifyIcon.vue'

const sysStore = useSysStore()

const clickIsCollapsedSider = (collapsed: boolean) => {
  sysStore.setIsCollapsed(collapsed)
}
</script>

<style scoped></style>
