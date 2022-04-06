<template>
  <n-drawer v-model:show="active" :width="400" :placement="placement" display-directive="show">
    <n-drawer-content title="系统设置">
      <BasicConfigItemBox title="布局模式">
        <n-button
          v-for="(item, index) in layoutItemsArray"
          :key="item.key"
          :type="activeIndexLayoutBtn === index ? 'primary' : 'tertiary'"
          class="mr-[1.7rem] mb-[2rem] w-[10rem] text-[1rem]"
          @click="changeLayoutMode(item.key)"
          >{{ item.value }}</n-button
        >
      </BasicConfigItemBox>
      <!-- <BasicConfigItemBox></BasicConfigItemBox> -->
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NDrawer, NDrawerContent, NButton } from 'naive-ui'
import type { DrawerPlacement } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'

import BasicConfigItemBox from './components/basicConfigItemBox.vue'
import { layoutModeType } from '@/typings/common/sys'

const sysStore = useSysStore()

const active = ref(false)
const placement = ref<DrawerPlacement>('right')
const openDrawer = (place: DrawerPlacement) => {
  active.value = true
  placement.value = place
}

const layoutItemsArray: {
  key: layoutModeType
  value: string
}[] = [
  {
    key: 'LEFT_MENU_MODE',
    value: '左侧菜单'
  },
  {
    key: 'LEFT_MENU_MIX_MODE',
    value: '左侧菜单混合'
  },
  {
    key: 'TOP_MENU_MODE',
    value: '顶部菜单'
  },
  {
    key: 'TOP_MIX_MENU_MODE',
    value: '顶部菜单混合'
  }
]
const changeLayoutMode = (mode: layoutModeType) => {
  sysStore.setLayoutMode(mode)
}

const activeIndexLayoutBtn = computed(() => {
  const currentMode = sysStore.layoutMode
  const isCollapsed = sysStore.siderMenuCollapsed

  if (currentMode === 'LEFT_MENU_MODE' && !isCollapsed) {
    return 0
  }
  if (currentMode === 'LEFT_MENU_MODE' && isCollapsed) {
    return 1
  }
  if (currentMode === 'TOP_MENU_MODE') {
    return 2
  }
  if (currentMode === 'TOP_MIX_MENU_MODE') {
    return 3
  }
  return 0
})

defineExpose({
  openDrawer
})
</script>

<style scoped></style>
