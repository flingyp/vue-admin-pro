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
      <BasicConfigItemBox title="系统主题">
        <div class="flex items-center flex-wrap justify-start">
          <div
            class="w-[2.5rem] h-[2.5rem] rounded-[0.3rem] m-[0.6rem] cursor-pointer flex-center"
            v-for="(item, index) in themeColorArray"
            :key="index"
            :style="{ 'background-color': item }"
            @click="changeThemeColor(item)"
          >
            <SvgIcon
              name="layout-checkmark"
              color="#FFF"
              class="w-[2rem] h-[2rem] font-bold"
              v-show="currentThemeColor === item"
            ></SvgIcon>
          </div>
        </div>
      </BasicConfigItemBox>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NDrawer, NDrawerContent, NButton } from 'naive-ui'
import type { DrawerPlacement } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'

import BasicConfigItemBox from './components/basicConfigItemBox.vue'
import SvgIcon from '@/components/svgIcon.vue'

import { layoutModeType } from '@/types/sysTypes'

import { getLocalKey, setLocalKey } from '@/utils/common/handleLocalStorage'

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

// https://materialui.co/colors 获取该网站的颜色600的色值
const themeColorArray: string[] = [
  '#18a058',
  '#D32F2F',
  '#C2185B',
  '#7B1FA2',
  '#303F9F',
  '#1976D2',
  '#0288D1',
  '#0097A7',
  '#00796B',
  '#388E3C',
  '#689F38',
  '#AFB42B',
  '#FBC02D',
  '#FFA000',
  '#F57C00',
  '#E64A19',
  '#5D4037',
  '#616161',
  '#455A64'
]
const currentThemeColor = ref(getLocalKey('themeColor') || '#18a058')
// 修改颜色色值
const changeThemeColor = (color: string) => {
  currentThemeColor.value = color
  setLocalKey('themeColor', color)
  sysStore.setThemeColor(color)
}

defineExpose({
  openDrawer
})
</script>

<style scoped></style>
