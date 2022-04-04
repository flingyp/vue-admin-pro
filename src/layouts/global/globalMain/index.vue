<template>
  <n-layout-content bordered class="h-full bg-[#f6f9f8] dark:bg-[#101014]">
    <transition name="fade-slide" mode="out-in" appear>
      <keep-alive>
        <router-view v-slot="{ Component, route }">
          <component :is="Component" :key="route.path"></component>
        </router-view>
      </keep-alive>
    </transition>
  </n-layout-content>
</template>

<script setup lang="ts">
import { NLayoutContent } from 'naive-ui'
</script>
