<template>
  <GlobalTab></GlobalTab>
  <router-view v-slot="{ Component, route }">
    <transition name="fade-slide" mode="out-in" appear>
      <keep-alive>
        <component :is="Component" :key="route.path"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import GlobalTab from '../globalTab/globalTab.vue'
</script>
