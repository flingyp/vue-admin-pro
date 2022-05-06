<template>
  <BasicMenuModeVue>
    <template #header>
      <!-- 菜单模式-头部 -->
      <KeepAlive>
        <Component :is="CurrentLayoutModeHeader"></Component>
      </KeepAlive>
    </template>

    <template #sider>
      <!-- 菜单模式-侧边（左侧菜单模式、顶部混合菜单模式） -->
      <KeepAlive>
        <Component :is="CurrentLayoutModeSider"></Component>
      </KeepAlive>
    </template>

    <template #main>
      <KeepAlive>
        <Component :is="GlobalMainIndexVue"></Component>
      </KeepAlive>
    </template>
  </BasicMenuModeVue>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useSysStore } from '@/store/modules/sysStore'

// 基础布局组件
import BasicMenuModeVue from '@/layouts/basicLayout/BasicMenuMode.vue'

// 布局内容组件
import GlobalMainIndexVue from '@/layouts/global/globalMain/globalMainIndex.vue'

// 布局头部组件
import LeftMenuHeaderVue from './DifModeForm/LeftMenu/LeftMenuHeader.vue'
import TopMenuHeaderVue from './DifModeForm/TopMenu/TopMenuHeader.vue'
import TopMixMenuHeaderVue from './DifModeForm/TopMixMenu/TopMixMenuHeader.vue'

// 布局侧边栏组件
import LeftMenuSiderVue from './DifModeForm/LeftMenu/LeftMenuSider.vue'
import TopMixMenuSiderVue from './DifModeForm/TopMixMenu/TopMixMenuSider.vue'

const sysStore = useSysStore()

const CurrentLayoutModeHeader = computed(() => {
  if (sysStore.layoutMode === 'LEFT_MENU_MODE' || sysStore.layoutMode === 'LEFT_MENU_MIX_MODE') {
    return LeftMenuHeaderVue
  }
  if (sysStore.layoutMode === 'TOP_MENU_MODE') {
    return TopMenuHeaderVue
  }
  if (sysStore.layoutMode === 'TOP_MIX_MENU_MODE') {
    return TopMixMenuHeaderVue
  }
  return LeftMenuHeaderVue
})
const CurrentLayoutModeSider = computed(() => {
  if (sysStore.layoutMode === 'LEFT_MENU_MODE' || sysStore.layoutMode === 'LEFT_MENU_MIX_MODE') {
    return LeftMenuSiderVue
  }
  if (sysStore.layoutMode === 'TOP_MIX_MENU_MODE') {
    return TopMixMenuSiderVue
  }
  return null
})
</script>

<style scoped></style>
