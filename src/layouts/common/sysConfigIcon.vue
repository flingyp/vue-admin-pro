<template>
  <div class="header-item-base-style" @click="openSysConfigDrawer">
    <IconifyIconVue iconLabel="ep:setting"></IconifyIconVue>
  </div>

  <GlobalConfigDrawerIndex ref="sysConfig"></GlobalConfigDrawerIndex>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import IconifyIconVue from '@/components/iconifyIcon.vue'
import GlobalConfigDrawerIndex from '@/layouts/global/globalConfigDrawer/globalConfigDrawerIndex.vue'

const sysConfig = ref<any>(null)

const openSysConfigDrawer = () => {
  sysConfig.value.openDrawer('right')
}
</script>
