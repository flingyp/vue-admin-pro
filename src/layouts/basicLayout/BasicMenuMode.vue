<template>
  <n-layout has-sider>
    <!-- 侧边栏只在左侧菜单、顶部菜单混合中存在 -->
    <n-layout-sider
      v-show="isNeedSider"
      bordered
      :width="SysStoreModule.leftExtendWidth"
      :collapsed-width="SysStoreModule.leftShrinkWidth"
      :native-scrollbar="false"
      collapse-mode="width"
      :collapsed="SysStoreModule.siderMenuCollapsed"
      class="h-full max-h-full"
      :inverted="SysStoreModule.leftIsInverted"
    >
      <slot name="sider"> 侧边栏 </slot>
    </n-layout-sider>

    <n-layout>
      <n-layout-header bordered :inverted="SysStoreModule.topIsInverted" :style="{ height: TopHeaderHeight + 'px' }">
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
import { useSysStoreModule } from '@/store/modules/SysStoreModule'

const SysStoreModule = useSysStoreModule()

const isNeedSider = computed(() => {
  const { layoutMode } = SysStoreModule
  if (layoutMode === 'LEFT_MENU_MODE' || layoutMode === 'LEFT_MENU_MIX_MODE' || layoutMode === 'TOP_MIX_MENU_MODE') {
    return true
  }
  return false
})

const TopHeaderHeight = computed(() => {
  return SysStoreModule.headerHeight
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
