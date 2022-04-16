<template>
  <!-- 左侧菜单模式 -->
  <LeftMenuMode v-if="sysStore.layoutMode === 'LEFT_MENU_MODE'"></LeftMenuMode>
  <!-- 顶部菜单模式 -->
  <TopMenuMode v-if="sysStore.layoutMode === 'TOP_MENU_MODE'"></TopMenuMode>
  <!-- 顶部菜单混合模式 -->
  <TopMixMenuMode v-if="sysStore.layoutMode === 'TOP_MIX_MENU_MODE'"></TopMixMenuMode>
</template>

<script setup lang="ts">
import { useSysStore } from '@/store/modules/sysStore'

import LeftMenuMode from './mode/leftMenu/leftMenuIndex.vue'
import TopMenuMode from './mode/topMenu/topMenuIndex.vue'
import TopMixMenuMode from './mode/topMixMenu/topMixMenuIndex.vue'

const sysStore = useSysStore()
</script>
