<template>
  <n-layout has-sider>
    <baseSider />
    <n-layout :class="sysStore.isCollapsed ? 'pl-[45px]' : 'pl-[264px]'" class="h-screen flex flex-col">
      <div class="fixed top-0 z-50 w-full">
        <global-header></global-header>
      </div>
      <div class="mt-[6rem] h-[calc(100vh-6.4rem)]">
        <global-main></global-main>
      </div>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout } from 'naive-ui'

import baseSider from './baseLayout/baseSider.vue'

import globalHeader from './global/globalHeader/index.vue'
import globalMain from './global/globalMain/index.vue'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
</script>

<style scoped>
* {
  transition: padding 0.4s;
}
</style>
