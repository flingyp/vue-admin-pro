<template>
  <n-layout has-sider>
    <!-- 侧边栏只在左侧菜单、顶部菜单混合中存在 -->
    <n-layout-sider
      v-show="isNeedSider"
      bordered
      :width="sysStore.leftExtendWidth"
      :collapsed-width="sysStore.leftShrinkWidth"
      :native-scrollbar="false"
      collapse-mode="width"
      :collapsed="sysStore.siderMenuCollapsed"
      class="h-full max-h-full"
      :inverted="sysStore.leftIsInverted"
    >
      <slot name="sider"> 侧边栏 </slot>
    </n-layout-sider>

    <n-layout>
      <n-layout-header bordered :inverted="sysStore.topIsInverted" :style="{ height: TopHeaderHeight + 'px' }">
        <slot name="header"> 头部部分 </slot>
      </n-layout-header>

      <n-layout-content
        bordered
        :native-scrollbar="false"
        :style="{ height: ContentHeight }"
        class="bg-[#f6f9f8] dark:bg-[#101014]"
      >
        <slot name="main"> 内容部分 </slot>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui'

import { computed } from 'vue'
import { useSysStore } from '@/store/modules/SysStore'

const sysStore = useSysStore()

const isNeedSider = computed(() => {
  const { layoutMode } = sysStore
  if (layoutMode === 'LEFT_MENU_MODE' || layoutMode === 'LEFT_MENU_MIX_MODE' || layoutMode === 'TOP_MIX_MENU_MODE') {
    return true
  }
  return false
})

const TopHeaderHeight = computed(() => {
  return sysStore.headerHeight
})
const ContentHeight = computed(() => {
  return `calc(100vh - ${TopHeaderHeight.value}px)`
})
</script>

<style scoped>
.n-layout {
  transition: padding 0.5s;
}
</style>
