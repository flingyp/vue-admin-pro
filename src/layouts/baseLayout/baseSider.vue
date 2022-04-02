<template>
  <n-layout-sider
    bordered
    embedded
    class="fixed z-99 h-screen max-h-screen"
    collapse-mode="width"
    :collapsed-width="64"
    :width="264"
    :collapsed="sysStore.isCollapsed"
  >
    <!-- Logo -->
    <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]" v-if="!sysStore.isCollapsed">
      <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="text-[4rem] mr-2" />
      <span style="color: rgba(59, 130, 246, 1)" class="text-[2rem] font-bold font-serif">Vue Admin Pro</span>
    </div>

    <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]" v-else>
      <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="text-[4rem] mr-2" />
    </div>

    <!-- 菜单栏 -->
    <n-menu v-model="activeKey" mode="vertical" :options="menuOptions" :value="routeKey" @update:value="clickTheMenu" />
  </n-layout-sider>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { NLayoutSider, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { useRoute, useRouter } from 'vue-router'

import SvgIcon from '@/components/svgIcon.vue'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()

const route = useRoute()
const router = useRouter()

const activeKey = ref<string | null>(null)

const menuOptions: MenuOption[] = sysStore.sysMenus || []

const clickTheMenu = (key: string) => {
  router.push({ name: key })
}

const routeKey = ref(route.name as string)

watch(
  () => route.name,
  (name) => {
    routeKey.value = name as string
  }
)
</script>

<style scoped></style>
