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
import LeftMenuCollapsedIcon from '@/layouts/common/leftMenuCollapsedIcon.vue'
import ThemeModeIcon from '@/layouts/common/themeModeIcon.vue'
import SysConfigIcon from '@/layouts/common/sysConfigIcon.vue'
import FullScreenIcon from '@/layouts/common/fullScreenIcon.vue'
import BreadCrumbNav from '@/layouts/common/breadCrumbNav.vue'
import UserCenter from '@/layouts/common/userCenter.vue'
</script>
