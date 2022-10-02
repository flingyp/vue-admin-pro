<template>
  <header class="h-full flex justify-between items-center">
    <div class="flex items-center h-full">
      <LeftMenuCollapsedIcon class="mr-[2rem]"></LeftMenuCollapsedIcon>
      <BreadCrumbNav></BreadCrumbNav>
    </div>
    <div class="flex items-center h-full">
      <FullScreenIcon></FullScreenIcon>
      <SysIconConfig></SysIconConfig>
      <UserCenter></UserCenter>
    </div>
  </header>
</template>

<script setup lang="ts">
import LeftMenuCollapsedIcon from '@/layouts/layoutComComponent/LeftMenuCollapsedIcon.vue'
import SysIconConfig from '@/layouts/layoutComComponent/SysIconConfig.vue'
import FullScreenIcon from '@/layouts/layoutComComponent/FullScreenIcon.vue'
import BreadCrumbNav from '@/layouts/layoutComComponent/BreadCrumbNav.vue'
import UserCenter from '@/layouts/layoutComComponent/UserCenter.vue'
</script>
