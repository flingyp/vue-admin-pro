<template>
  <n-drawer v-model:show="active" :width="400" :placement="placement" display-directive="show">
    <n-drawer-content title="系统设置">
      <BasicConfigItemBox title="主题模式">
        <div class="w-full text-center">
          <n-switch v-model:value="ThemeModeActive" size="medium" @update:value="changeThemeMode">
            <template #checked>
              <IconifyIconVue icon-label="bi:moon-stars" :fontSize="12" />
            </template>
            <template #unchecked>
              <IconifyIconVue icon-label="bi:cloud-sun" :fontSize="12" />
            </template>
          </n-switch>
        </div>
      </BasicConfigItemBox>
      <BasicConfigItemBox title="布局模式">
        <div class="grid grid-cols-3 gap-5">
          <n-button
            class="overflow-hidden"
            v-for="(item, index) in layoutItemsArray"
            :key="item.key"
            :type="activeIndexLayoutBtn === index ? 'primary' : 'tertiary'"
            @click="changeLayoutMode(item.key)"
            >{{ item.value }}</n-button
          >
        </div>
      </BasicConfigItemBox>
      <BasicConfigItemBox title="系统主题">
        <div class="grid grid-cols-10 gap-2">
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

      <BasicConfigItemBox title="界面功能">
        <div class="w-full flex justify-between items-center my-[1rem]">
          <span>侧边栏反转色</span>
          <n-switch v-model:value="leftIsInverted" @update:value="changeLeftIsInverted"></n-switch>
        </div>
        <div class="w-full flex justify-between items-center my-[1rem]">
          <span>顶部栏反转色</span>
          <n-switch v-model:value="topIsInverted" @update:value="changeTopIsInverted"></n-switch>
        </div>
        <div class="w-full flex justify-between items-center my-[1rem]">
          <span>侧边栏宽度</span>
          <n-input-number v-model:value="LeftExtendWidth" @update:value="changeLeftExtendWidth" class="w-[10rem]" />
        </div>
        <div class="w-full flex justify-between items-center my-[1rem]">
          <span>侧边栏收缩宽度</span>
          <n-input-number v-model:value="LeftShrinkWidth" @update:value="changeLeftShrinkWidth" class="w-[10rem]" />
        </div>
        <div class="w-full flex justify-between items-center my-[1rem]">
          <span>顶部栏高度</span>
          <n-input-number v-model:value="TopHeaderHeight" @update:value="changeTopHeaderHeight" class="w-[10rem]" />
        </div>
      </BasicConfigItemBox>
    </n-drawer-content>
  </n-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NDrawer, NDrawerContent, NButton, NSwitch, NInputNumber } from 'naive-ui'
import type { DrawerPlacement } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'
import { getLocalKey, setLocalKey } from '@/utils/common/handleLocalStorage'

import SvgIcon from '@/components/SvgIcon.vue'
import IconifyIconVue from '@/components/IconifyIcon.vue'
import BasicConfigItemBox from './components/BasicConfigItemBox.vue'

import type { layoutModeType } from '@/types/sysTypes'

import { useSwitchTheme } from '@/hooks/sysHook/useSwitchTheme'

const sysStore = useSysStore()

const switchTheme = useSwitchTheme()

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

// 主题模式的开关
const ThemeModeActive = ref(switchTheme.currentThemeMode() === 'dark')
const changeThemeMode = (value: boolean) => {
  if (value) {
    switchTheme.switchTheme('dark')
  } else {
    switchTheme.switchTheme('light')
  }
}

// 侧边栏反转色
const leftIsInverted = ref(sysStore.leftIsInverted)
const changeLeftIsInverted = (value: boolean) => {
  sysStore.setLeftIsInverted(value)
}

// 顶部反转色
const topIsInverted = ref(sysStore.topIsInverted)
const changeTopIsInverted = (value: boolean) => {
  sysStore.setTopIsInverted(value)
}

// 侧边栏宽度
const LeftExtendWidth = ref(sysStore.leftExtendWidth)
const changeLeftExtendWidth = () => {
  sysStore.setLeftExtendWidth(LeftExtendWidth.value)
}

// 侧边栏收缩宽度
const LeftShrinkWidth = ref(sysStore.leftShrinkWidth)
const changeLeftShrinkWidth = () => {
  sysStore.setLeftShrinkWidth(LeftShrinkWidth.value)
}

// 顶部栏高度
const TopHeaderHeight = ref(sysStore.headerHeight)
const changeTopHeaderHeight = () => {
  sysStore.setHeaderHeight(TopHeaderHeight.value)
}

defineExpose({
  openDrawer
})
</script>

<style scoped></style>
