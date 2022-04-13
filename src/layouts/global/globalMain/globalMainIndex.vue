<template>
  <GlobalTab></GlobalTab>
  <router-view v-slot="{ Component, route }" v-if="!sysStore.isNeedReload">
    <transition name="fade-slide" mode="out-in" appear>
      <keep-alive>
        <component :is="Component" :key="route.path"></component>
      </keep-alive>
    </transition>
  </router-view>
  <div class="w-full h-[calc(100%-6rem)] flex-center" v-else>
    <n-spin :show="sysStore.isNeedReload" size="medium">
      <template #description> 重新加载中... </template>
    </n-spin>
  </div>
</template>

<script setup lang="ts">
import { NSpin } from 'naive-ui'
import { useSysStore } from '@/store/modules/sysStore'

import GlobalTab from '../globalTab/globalTab.vue'

const sysStore = useSysStore()
</script>
