<template>
  <div class="text-sm px-[1rem] py-[0.8rem] rounded-md mx-[0.5rem] flex items-center" :class="tabClass">
    <span class="mr-[0.5rem] cursor-pointer" @click="clickNavRoute(menu.key as string)">{{ menu.label }}</span>
    <IconifyIcon
      iconLabel="carbon:close"
      @click="deleteTabRoute(menu.key as string)"
      class="cursor-pointer"
    ></IconifyIcon>
  </div>
</template>

<script setup lang="ts">
import { MenuOption } from 'naive-ui'
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useSysStore } from '@/store/modules/sysStore'

import IconifyIcon from '@/components/IconifyIcon.vue'

const props = defineProps<{
  menu: MenuOption
}>()

const sysStore = useSysStore()
const route = useRoute()
const router = useRouter()

const tabClass = computed(() => {
  if (props.menu.key === route.name) {
    return 'bg-primary text-[#eee] dark:(border-transparent)'
  }
  return 'border border-solid border-[#eee] dark:border-transparent'
})

const clickNavRoute = (name: string) => {
  router.push({ name })
}
const deleteTabRoute = (name: string) => {
  // 判断下tabMenusKey是不是就一个
  if (sysStore.tabMenusKey.length === 1) {
    return
  }

  // 判断删除的是不是当前所在路由，如果是则需要去另外跳转其它的页面
  if (route.name === name) {
    const tabMenuIndex = sysStore.tabMenusKey.indexOf(name)
    // 需要跳转的路由名称
    const navRouteName = sysStore.tabMenusKey[tabMenuIndex === 0 ? 1 : tabMenuIndex - 1]
    router.push({ name: navRouteName as string })
  }
  sysStore.deleteTabMenuKey(name)
}
</script>

<style scoped></style>
