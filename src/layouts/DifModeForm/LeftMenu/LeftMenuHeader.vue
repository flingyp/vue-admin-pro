<template>
  <header class="h-full flex justify-between items-center">
    <div class="flex items-center h-full">
      <LeftMenuCollapsedIcon class="mr-[2rem]"></LeftMenuCollapsedIcon>
      <BreadCrumbNav></BreadCrumbNav>
    </div>
    <div class="flex items-center h-full">
      <ThemeModeIcon></ThemeModeIcon>
      <FullScreenIcon></FullScreenIcon>
      <SysIconConfig></SysIconConfig>
      <UserCenter></UserCenter>
    </div>
  </header>
</template>

<script setup lang="ts">
import LeftMenuCollapsedIcon from '@/layouts/ComComponent/LeftMenuCollapsedIcon.vue'
import ThemeModeIcon from '@/layouts/ComComponent/ThemeModeIcon.vue'
import SysIconConfig from '@/layouts/ComComponent/SysIconConfig.vue'
import FullScreenIcon from '@/layouts/ComComponent/FullScreenIcon.vue'
import BreadCrumbNav from '@/layouts/ComComponent/BreadCrumbNav.vue'
import UserCenter from '@/layouts/ComComponent/UserCenter.vue'
</script>
