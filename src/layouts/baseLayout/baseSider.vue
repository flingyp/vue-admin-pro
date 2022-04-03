<template>
  <n-layout-sider
    bordered
    embedded
    class="fixed z-99 h-screen max-h-screen"
    collapse-mode="width"
    :collapsed-width="45"
    :width="264"
    :collapsed="sysStore.isCollapsed"
  >
    <!-- Logo -->
    <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]" v-if="!sysStore.isCollapsed">
      <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="w-[3rem] h-[3rem] text-[3rem] mr-2" />
      <span style="color: rgba(59, 130, 246, 1)" class="text-[2rem] font-bold font-serif">Vue Admin Pro</span>
    </div>

    <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]" v-else>
      <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="w-[3rem] h-[3rem] text-[3rem] mr-2" />
    </div>

    <global-sider-menu></global-sider-menu>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { NLayoutSider } from 'naive-ui'

import globalSiderMenu from '../global/globalSiderMenu/index.vue'

import SvgIcon from '@/components/svgIcon.vue'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
</script>

<style scoped></style>
