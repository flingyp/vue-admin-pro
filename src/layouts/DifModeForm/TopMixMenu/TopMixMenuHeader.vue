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
import ThemeModelIcon from '@/layouts/ComComponent/ThemeModeIcon.vue'
import LogoTitle from '@/layouts/ComComponent/LogoTitle.vue'
import LeftMenuCollapsedIcon from '@/layouts/ComComponent/LeftMenuCollapsedIcon.vue'
import SysIconConfig from '@/layouts/ComComponent/SysIconConfig.vue'
import FullScreenIcon from '@/layouts/ComComponent/FullScreenIcon.vue'
import UserCenter from '@/layouts/ComComponent/UserCenter.vue'
</script>
