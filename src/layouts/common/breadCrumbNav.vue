<template>
  <n-breadcrumb>
    <n-breadcrumb-item v-for="item in breadCrumbMenu" :key="item.key">
      <n-dropdown :options="item.children" @select="clickBreadCrumbItem">
        {{ item.label }}
      </n-dropdown>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { watchEffect, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NBreadcrumb, NBreadcrumbItem, NDropdown } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'

const router = useRouter()
const route = useRoute()

const sysStore = useSysStore()

const menus = sysStore.sysMenus || []

/**
 * 判断当前菜单以及children中是否包含 routeName 的菜单
 */
const judgeMenuByRouteName: (routeName: string, menu: MenuOption) => boolean = (
  routeName: string,
  menu: MenuOption
) => {
  if (menu.children) {
    return menu.children.some((item) => {
      return judgeMenuByRouteName(routeName, item)
    })
  }
  if (menu.key === routeName) {
    return true
  }
  return false
}

/**
 * 获取面包屑导航菜单
 * @param bigMenu
 * @param routeName
 */
const getBreadCrumbMenu = (bigMenu: MenuOption, routeName: string): MenuOption[] => {
  const breadcrumbMenu: MenuOption[] = []
  breadcrumbMenu.push(bigMenu)
  const getTheseMenuByKey = (menu: MenuOption) => {
    if (menu.children) {
      menu.children.forEach((item) => {
        if (judgeMenuByRouteName(routeName, item)) {
          breadcrumbMenu.push(item)
          getTheseMenuByKey(item)
        }
      })
    }
  }
  getTheseMenuByKey(bigMenu)
  return breadcrumbMenu
}

/**
 * 创建面包屑导航数据结构
 */
const createSysBreadCrumbMenuOptions = (routeName: string) => {
  let theBigMenu: MenuOption = {}
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < menus.length; index++) {
    // @ts-ignore
    const isIncludesTheKey = judgeMenuByRouteName(routeName, menus[index])
    if (isIncludesTheKey) {
      theBigMenu = menus[index]
    }
  }
  return getBreadCrumbMenu(theBigMenu, routeName)
}

const breadCrumbMenu = ref<MenuOption[]>([])
watchEffect(() => {
  const routeName = route.name as string
  breadCrumbMenu.value = createSysBreadCrumbMenuOptions(routeName)
})

const clickBreadCrumbItem = (key: string) => {
  sysStore.addTabMenuKey(key)
  router.push({ name: key })
}
</script>

<style scoped></style>
