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
      <Component :is="GlobalMainIndexVue"></Component>
    </template>
  </BasicMenuModeVue>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { useSysStoreModule } from '@/store/modules/SysStoreModule'

// 基础布局组件
import BasicMenuModeVue from '@/layouts/basicLayout/BasicMenuMode.vue'

// 布局内容组件
import GlobalMainIndexVue from '@/layouts/global/globalMain/globalMainIndex.vue'

// 布局头部组件
import LeftMenuHeaderVue from './difModeForm/leftMenu/LeftMenuHeader.vue'
import TopMenuHeaderVue from './difModeForm/topMenu/TopMenuHeader.vue'
import TopMixMenuHeaderVue from './difModeForm/topMixMenu/TopMixMenuHeader.vue'

// 布局侧边栏组件
import LeftMenuSiderVue from './difModeForm/leftMenu/LeftMenuSider.vue'
import TopMixMenuSiderVue from './difModeForm/topMixMenu/TopMixMenuSider.vue'

const SysStoreModule = useSysStoreModule()

const CurrentLayoutModeHeader = computed(() => {
  if (SysStoreModule.layoutMode === 'LEFT_MENU_MODE' || SysStoreModule.layoutMode === 'LEFT_MENU_MIX_MODE') {
    return LeftMenuHeaderVue
  }
  if (SysStoreModule.layoutMode === 'TOP_MENU_MODE') {
    return TopMenuHeaderVue
  }
  if (SysStoreModule.layoutMode === 'TOP_MIX_MENU_MODE') {
    return TopMixMenuHeaderVue
  }
  return LeftMenuHeaderVue
})
const CurrentLayoutModeSider = computed(() => {
  if (SysStoreModule.layoutMode === 'LEFT_MENU_MODE' || SysStoreModule.layoutMode === 'LEFT_MENU_MIX_MODE') {
    return LeftMenuSiderVue
  }
  if (SysStoreModule.layoutMode === 'TOP_MIX_MENU_MODE') {
    return TopMixMenuSiderVue
  }
  return null
})
</script>

<style scoped></style>
