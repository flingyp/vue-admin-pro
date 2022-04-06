<template>
  <div class="header-item-base-style" v-if="!isFullscreen" @click="toggle">
    <IconifyIconVue icon-label="gridicons-fullscreen" :fontSize="18" />
  </div>
  <div class="header-item-base-style" v-else @click="toggle">
    <IconifyIconVue icon-label="gridicons-fullscreen-exit" :fontSize="18" />
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

import IconifyIconVue from '@/components/iconifyIcon.vue'

const { isFullscreen, toggle } = useFullscreen()
</script>
