<template>
  <GlobalTab></GlobalTab>
  <transition name="fade-slide" mode="out-in" appear>
    <keep-alive>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path"></component>
      </router-view>
    </keep-alive>
  </transition>
</template>

<script setup lang="ts">
import GlobalTab from '../globalTab/globalTab.vue'
</script>
