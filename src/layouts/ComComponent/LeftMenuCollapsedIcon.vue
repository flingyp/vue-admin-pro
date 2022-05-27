<template>
  <div v-if="sysStore.siderMenuCollapsed" @click="clickIsCollapsedSider(false)" class="header-item-base-style">
    <IconifyIconCom icon-label="mdi-light:format-indent-increase" :fontSize="20" />
  </div>

  <div v-else @click="clickIsCollapsedSider(true)" class="header-item-base-style">
    <IconifyIconCom icon-label="mdi-light:format-indent-decrease" :fontSize="20" />
  </div>
</template>

<script setup lang="ts">
import { useSysStore } from '@/store/modules/SysStore'

import IconifyIconCom from '@/components/IconifyIconCom.vue'

const sysStore = useSysStore()

const clickIsCollapsedSider = (collapsed: boolean) => {
  sysStore.setIsCollapsed(collapsed)
}
</script>

<style scoped></style>
