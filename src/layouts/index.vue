<template>
  <n-layout has-sider>
    <baseSider />
    <n-layout :class="sysStore.isCollapsed ? 'pl-[64px]' : 'pl-[264px]'">
      <baseHeader />
      <baseContent />
      <baseFooter />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout } from 'naive-ui'

import baseSider from './baseLayout/baseSider.vue'
import baseHeader from './baseLayout/baseHeader.vue'
import baseContent from './baseLayout/baseContent.vue'
import baseFooter from './baseLayout/baseFooter.vue'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
</script>

<style scoped>
* {
  transition: padding 0.4s;
}
</style>
