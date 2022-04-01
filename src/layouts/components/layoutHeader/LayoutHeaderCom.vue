<template>
  <n-layout-header bordered class="fixed top-0 h-[6rem] z-50">
    <!-- mdi-light:format-indent-increase 右箭头-->
    <!-- mdi-light:format-indent-decrease 左箭头-->
    <IconifyIconVue icon-label="mdi-light:format-indent-increase" :fontSize="20" />
    <IconifyIconVue icon-label="mdi-light:format-indent-decrease" :fontSize="20" />
  </n-layout-header>
</template>

<script setup lang="ts">
import { NLayoutHeader } from 'naive-ui'

import IconifyIconVue from '@/components/iconifyIcon.vue'
</script>

<style scoped></style>
