<template>
  <n-layout-sider
    bordered
    embedded
    class="fixed z-99 h-screen max-h-screen"
    collapse-mode="width"
    :collapsed-width="64"
    :width="264"
  >
    <!-- Logo -->
    <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]">
      <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="text-[4rem] mr-2" />
      <span style="color: rgba(59, 130, 246, 1)" class="text-[2rem] font-bold font-serif">Vue Admin Pro</span>
    </div>

    <!-- 菜单栏 -->
    <n-menu v-model="activeKey" mode="vertical" :options="menuOptions" />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NLayoutSider, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

import SvgIcon from '@/components/svgIcon.vue'

const activeKey = ref<string | null>(null)

const menuOptions: MenuOption[] = [
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '羊男',
            key: 'sheep-man'
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
</script>

<style scoped></style>
