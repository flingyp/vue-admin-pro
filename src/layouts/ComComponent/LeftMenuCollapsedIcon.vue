<template>
  <div v-if="SysStoreModule.siderMenuCollapsed" @click="clickIsCollapsedSider(false)" class="header-item-base-style">
    <IconifyIconCom icon-label="mdi-light:format-indent-increase" :fontSize="20" />
  </div>

  <div v-else @click="clickIsCollapsedSider(true)" class="header-item-base-style">
    <IconifyIconCom icon-label="mdi-light:format-indent-decrease" :fontSize="20" />
  </div>
</template>

<script setup lang="ts">
import { useSysStoreModule } from '@/store/modules/SysStoreModule'

import IconifyIconCom from '@/components/IconifyIconCom.vue'

const SysStoreModule = useSysStoreModule()

const clickIsCollapsedSider = (collapsed: boolean) => {
  SysStoreModule.setIsCollapsed(collapsed)
}
</script>

<style scoped></style>
