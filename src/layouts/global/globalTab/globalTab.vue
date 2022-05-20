<template>
  <div class="px-[0.5rem] pt-[0.2rem] bg-[#FFF] shadow flex items-center justify-between dark:bg-[#18181c]">
    <div class="flex items-center overflow-x-auto whitespace-nowrap flex-[1]">
      <TabItem v-for="(item, index) in sysStore.sysTabMenus" :key="index" :menu="item"></TabItem>
    </div>

    <div class="h-full pb-[0.6rem]">
      <n-dropdown trigger="click" :options="tabMenuSettingOptions" @select="selectTabSetting">
        <div class="cursor-pointer header-item-base-style">
          <IconifyIcon iconLabel="gg:menu-cheese" :fontSize="20"></IconifyIcon>
        </div>
      </n-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NDropdown } from 'naive-ui'
import type { DropdownOption, MenuOption } from 'naive-ui'
import { useSysStore } from '@/store/modules/sysStore'

import TabItem from '@/layouts/common/TabItem.vue'
import IconifyIcon from '@/components/IconifyIcon.vue'

const route = useRoute()
const router = useRouter()
const sysStore = useSysStore()

const isDisabled = computed(() => {
  if (sysStore.tabMenusKey.length <= 1) {
    return true
  }
  return false
})

const tabMenuSettingOptions: DropdownOption[] = reactive([
  {
    label: '重新加载页面',
    key: 'reload'
  },
  {
    label: '关闭当前页面',
    key: 'closeCurrentTab',
    disabled: isDisabled
  },
  {
    label: '关闭其他标签',
    key: 'closeOtherTabMenu',
    disabled: isDisabled
  }
])

const findCurrentMenu = (menus: MenuOption[]): string => {
  if (menus.length > 0) {
    const menuIndex = menus.findIndex((item) => {
      return item.key === route.name
    })
    return menus[menuIndex].key as string
  }
  return ''
}

const selectTabSetting = (key: string) => {
  if (key === 'reload') {
    sysStore.isNeedReload = true
    setTimeout(() => {
      sysStore.isNeedReload = false
    }, 1000)
  } else if (key === 'closeCurrentTab') {
    // 关闭当前页面
    const currentRouteName = route.name as string
    const tabMenuIndex = sysStore.tabMenusKey.indexOf(currentRouteName)
    // 需要跳转的路由名称
    const navRouteName = sysStore.tabMenusKey[tabMenuIndex === 0 ? 1 : tabMenuIndex - 1]
    router.push({ name: navRouteName as string })
    sysStore.deleteTabMenuKey(route.name as string)
  } else if (key === 'closeOtherTabMenu') {
    // 关闭其他的标签页
    sysStore.setTabMenuKeys([route.name as string])
  }
}

onMounted(() => {
  sysStore.addTabMenuKey(findCurrentMenu(sysStore.sysAllMenus))
})
</script>

<style scoped>
/*设置宽度,轨道颜色*/
::-webkit-scrollbar {
  height: 5px;
  background: transparent;
  border-radius: 5px;
}
/*设置宽度,轨道颜色*/
:hover::-webkit-scrollbar-track {
  background: #eee;
  border-radius: 5px;
}
/*滚动条*/
::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 5px;
}
/*滚动条*/
:hover::-webkit-scrollbar-thumb {
  background: var(--primaryColor);
  border-radius: 5px;
}
</style>
