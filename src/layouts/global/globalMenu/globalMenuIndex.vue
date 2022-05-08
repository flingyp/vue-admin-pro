<template>
  <n-menu :value="routeKey" :mode="mode" :options="menuOptions" @update:value="clickMenu" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import { NMenu } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'

interface IGlobalMenuProps {
  mode: 'vertical' | 'horizontal'
}

withDefaults(defineProps<IGlobalMenuProps>(), {
  mode: 'vertical'
})

const route = useRoute()
const router = useRouter()

const sysStore = useSysStore()

// 监听路由的变化，更改菜单当前选中值
const routeKey = ref(route.name as string)
watch(
  () => route.name,
  (name) => {
    // TODO: 当发现路由跳转了，及时修改页面标题的Title
    routeKey.value = name as string
  }
)

// 菜单数据
// @ts-ignore
const menuOptions: MenuOption[] = sysStore.sysMenus || []

// 点击菜单
const clickMenu = (key: string, menu: MenuOption) => {
  if (menu.link === 'External_Link') {
    // 外链
    window.open(menu.url as string)
  } else if (menu.link === 'Internal_Link') {
    // 内链
    router.push({ name: key })
    sysStore.addTabMenuKey(key)
  } else {
    router.push({ name: key })
    sysStore.addTabMenuKey(key)
  }
}
</script>
