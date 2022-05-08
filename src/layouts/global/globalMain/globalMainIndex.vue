<template>
  <GlobalTabVue></GlobalTabVue>
  <router-view v-slot="{ Component, route }" v-if="!sysStore.isNeedReload">
    <transition name="fade-slide" mode="out-in" appear>
      <keep-alive v-if="route.meta.cache == null || route.meta.cache">
        <component :is="Component" :key="route.path"></component>
      </keep-alive>
      <component :is="Component" :key="route.path" v-else></component>
    </transition>
  </router-view>
  <div class="h-[calc(100vh-10.4rem)] flex-center" v-else>
    <n-spin :show="sysStore.isNeedReload" size="medium">
      <template #description> 重新加载中... </template>
    </n-spin>
  </div>
</template>

<script setup lang="ts">
import { NSpin } from 'naive-ui'

import { useSysStore } from '@/store/modules/sysStore'

import GlobalTabVue from '../globalTab/globalTab.vue'

const sysStore = useSysStore()
</script>
