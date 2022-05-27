<template>
  <header class="h-full flex justify-between items-center">
    <div class="flex items-center h-full pl-[2rem]">
      <LogoTitle :is-need-collapsed="false"></LogoTitle>
      <LeftMenuCollapsedIcon class="ml-[1rem]"></LeftMenuCollapsedIcon>
    </div>
    <div class="flex items-center h-full">
      <ThemeModelIcon></ThemeModelIcon>
      <FullScreenIcon></FullScreenIcon>
      <SysIconConfig></SysIconConfig>
      <UserCenter></UserCenter>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeModelIcon from '@/layouts/layoutComComponent/ThemeModeIcon.vue'
import LogoTitle from '@/layouts/layoutComComponent/LogoTitle.vue'
import LeftMenuCollapsedIcon from '@/layouts/layoutComComponent/LeftMenuCollapsedIcon.vue'
import SysIconConfig from '@/layouts/layoutComComponent/SysIconConfig.vue'
import FullScreenIcon from '@/layouts/layoutComComponent/FullScreenIcon.vue'
import UserCenter from '@/layouts/layoutComComponent/UserCenter.vue'
</script>
