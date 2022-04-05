<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      :width="264"
      collapse-mode="width"
      :collapsed-width="64"
      :collapsed="sysStore.siderMenuCollapsed"
      class="fixed z-99 h-screen max-h-screen"
    >
      <slot name="sider"> 侧边栏 </slot>
    </n-layout-sider>

    <n-layout class="h-screen max-h-screen pl-[64px]" :class="sysStore.siderMenuCollapsed ? 'pl-[64px]' : 'pl-[264px]'">
      <n-layout-header bordered class="h-[6.4rem]">
        <slot name="header"> 头部部分 </slot>
      </n-layout-header>

      <n-layout-content
        bordered
        class="h-[calc(100%-6.4rem)] max-h-[calc(100%-6.4rem)] bg-[#f6f9f8] dark:bg-[#101014] px-[0.5rem] py-[1rem]"
      >
        <slot name="main"> 内容部分 </slot>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
</script>

<style>
.n-layout {
  transition: padding 0.5s;
}
</style>
