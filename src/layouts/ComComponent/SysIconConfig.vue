<template>
  <div class="header-item-base-style" @click="openSysConfigDrawer">
    <IconifyIconCom iconLabel="ep:setting"></IconifyIconCom>
  </div>

  <GlobalConfigDrawer ref="sysConfig"></GlobalConfigDrawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import IconifyIconCom from '@/components/IconifyIconCom.vue'
import GlobalConfigDrawer from '@/layouts/global/globalConfigDrawer/GlobalConfigDrawer.vue'

const sysConfig = ref<any>(null)

const openSysConfigDrawer = () => {
  sysConfig.value.openDrawer('right')
}
</script>
