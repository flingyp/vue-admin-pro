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
import LeftMenuCollapsedIcon from '@/layouts/comComponent/LeftMenuCollapsedIcon.vue'
import ThemeModeIcon from '@/layouts/comComponent/ThemeModeIcon.vue'
import SysIconConfig from '@/layouts/comComponent/SysIconConfig.vue'
import FullScreenIcon from '@/layouts/comComponent/FullScreenIcon.vue'
import BreadCrumbNav from '@/layouts/comComponent/BreadCrumbNav.vue'
import UserCenter from '@/layouts/comComponent/UserCenter.vue'
</script>
