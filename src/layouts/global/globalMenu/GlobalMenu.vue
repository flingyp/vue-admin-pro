<template>
  <n-menu :inverted="isInverted" :value="routeKey" :mode="mode" :options="menuOptions" @update:value="clickMenu" />
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { NMenu } from 'naive-ui'

import { useSysStoreModule } from '@/store/modules/SysStoreModule'

interface IGlobalMenuProps {
  mode: 'vertical' | 'horizontal'
}

withDefaults(defineProps<IGlobalMenuProps>(), {
  mode: 'vertical'
})

const route = useRoute()
const router = useRouter()

const SysStoreModule = useSysStoreModule()

// 监听路由的变化，更改菜单当前选中值
const routeKey = ref(route.name as string)
watchEffect(() => {
  //  当发现路由跳转了，及时修改页面标题的Title
  const pageTitle = `${route.meta.title} | Vue Admin Pro` || 'Vue Admin Pro'
  document.getElementsByTagName('title')[0].innerHTML = `${pageTitle}`

  routeKey.value = route.name as string
})

// 菜单数据
// @ts-ignore
const menuOptions: MenuOption[] = SysStoreModule.sysMenus || []

// 点击菜单
const clickMenu = (key: string, menu: MenuOption) => {
  if (menu.link === 'External_Link') {
    // 外链
    window.open(menu.url as string)
  } else if (menu.link === 'Internal_Link') {
    // 内链
    router.push({ name: key })
    SysStoreModule.addTabMenuKey(key)
  } else {
    router.push({ name: key })
    SysStoreModule.addTabMenuKey(key)
  }
}

const isInverted = computed(() => {
  const currentLayoutMode = SysStoreModule.layoutMode
  if (currentLayoutMode === 'TOP_MENU_MODE') {
    return SysStoreModule.topIsInverted
  }
  return SysStoreModule.leftIsInverted
})
</script>
