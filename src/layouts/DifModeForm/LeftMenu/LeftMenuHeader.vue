<template>
  <header class="h-full flex justify-between items-center">
    <div class="flex items-center h-full">
      <LeftMenuCollapsedIcon class="mr-[2rem]"></LeftMenuCollapsedIcon>
      <BreadCrumbNav></BreadCrumbNav>
    </div>
    <div class="flex items-center h-full">
      <ThemeModeIcon></ThemeModeIcon>
      <FullScreenIcon></FullScreenIcon>
      <SysConfigIcon></SysConfigIcon>
      <UserCenter></UserCenter>
    </div>
  </header>
</template>

<script setup lang="ts">
import LeftMenuCollapsedIcon from '@/layouts/common/LeftMenuCollapsedIcon.vue'
import ThemeModeIcon from '@/layouts/common/ThemeModeIcon.vue'
import SysConfigIcon from '@/layouts/common/SysConfigIcon.vue'
import FullScreenIcon from '@/layouts/common/FullScreenIcon.vue'
import BreadCrumbNav from '@/layouts/common/BreadCrumbNav.vue'
import UserCenter from '@/layouts/common/UserCenter.vue'
</script>
