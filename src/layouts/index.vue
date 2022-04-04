<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      embedded
      class="fixed z-99 h-screen max-h-screen"
      collapse-mode="width"
      :collapsed-width="45"
      :width="264"
      :collapsed="sysStore.siderMenuCollapsed"
    >
      <!-- Logo -->
      <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]" v-if="!sysStore.siderMenuCollapsed">
        <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="w-[3rem] h-[3rem] text-[3rem] mr-2" />
        <span style="color: rgba(59, 130, 246, 1)" class="text-[2rem] font-bold font-serif">Vue Admin Pro</span>
      </div>

      <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]" v-else>
        <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="w-[3rem] h-[3rem] text-[3rem] mr-2" />
      </div>
      <!-- 左侧侧边栏 -->
      <global-sider-menu></global-sider-menu>
    </n-layout-sider>

    <n-layout :class="sysStore.siderMenuCollapsed ? 'pl-[45px]' : 'pl-[264px]'" class="h-screen flex flex-col">
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
import { NLayout, NLayoutSider } from 'naive-ui'

import globalHeader from './global/globalHeader/index.vue'
import globalMain from './global/globalMain/index.vue'
import globalSiderMenu from './global/globalSiderMenu/index.vue'

import SvgIcon from '@/components/svgIcon.vue'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
</script>

<style scoped>
* {
  transition: padding 0.4s;
}
</style>
