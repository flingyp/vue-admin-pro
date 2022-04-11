<template>
  <div class="px-[1rem] py-[1rem] bg-[#FFF] dark:bg-[#18181c] shadow-md mb-[2rem] flex items-center justify-between">
    <div class="flex items-center overflow-x-auto whitespace-nowrap flex-[1]">
      <TabItem v-for="(item, index) in sysStore.sysTabMenus" :key="index" :menu="item"></TabItem>
    </div>

    <div class="w-[10rem]">右侧</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { useSysStore } from '@/store/modules/sysStore'

import TabItem from '@/layouts/common/tabItem.vue'

const route = useRoute()
const sysStore = useSysStore()

const findCurrentMenu = (menus: MenuOption[]): string => {
  const menuIndex = menus.findIndex((item) => {
    return item.key === route.name
  })
  return menus[menuIndex].key as string
}

onMounted(() => {
  sysStore.addTabMenuKey(findCurrentMenu(sysStore.sysAllMenus))
})
</script>

<style scoped>
/*设置宽度,轨道颜色*/
::-webkit-scrollbar {
  height: 8px;
  background: transparent;
  border-radius: 10px;
}
/*设置宽度,轨道颜色*/
:hover::-webkit-scrollbar-track {
  background: #eee;
  border-radius: 10px;
}
/*滚动条*/
::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
}
/*滚动条*/
:hover::-webkit-scrollbar-thumb {
  background: var(--primaryColor);
  border-radius: 10px;
}
</style>
