<template>
  <n-layout-content bordered class="h-full bg-[#f6f9f8]">
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

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
