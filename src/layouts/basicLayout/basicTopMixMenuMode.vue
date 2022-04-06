<template>
  <n-layout class="h-screen max-h-screen">
    <n-layout-header bordered class="h-[6.4rem]">
      <slot name="header"> 头部部分 </slot>
    </n-layout-header>
    <n-layout has-sider class="h-[calc(100vh-6.4rem)]">
      <n-layout-sider
        bordered
        :width="264"
        collapse-mode="width"
        :collapsed-width="64"
        :collapsed="sysStore.siderMenuCollapsed"
        class="h-full max-h-full"
      >
        <slot name="sider"> 侧边栏 </slot>
      </n-layout-sider>
      <n-layout-content bordered class="h-full max-h-full bg-[#f6f9f8] dark:bg-[#101014] px-[0.5rem] py-[1rem]">
        <slot name="main"> 内容部分 </slot>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
</script>

<style scoped></style>
