<template>
  <n-layout class="h-screen max-h-screen">
    <n-layout-header bordered class="h-[6.4rem]">
      <slot name="header">头部部分</slot>
    </n-layout-header>
    <n-layout-content
      bordered
      class="h-[calc(100%-6.4rem)] max-h-[calc(100%-6.4rem)] bg-[#f6f9f8] dark:bg-[#101014] px-[0.5rem] py-[1rem]"
    >
      <slot name="main">内容部分</slot>
    </n-layout-content>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NLayoutHeader } from 'naive-ui'
</script>
