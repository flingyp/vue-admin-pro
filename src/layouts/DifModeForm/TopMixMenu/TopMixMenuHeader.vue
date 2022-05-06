<template>
  <header class="h-full flex justify-between items-center">
    <div class="flex items-center h-full pl-[2rem]">
      <LogoTitle :is-need-collapsed="false"></LogoTitle>
      <LeftMenuCollapsedIcon class="ml-[1rem]"></LeftMenuCollapsedIcon>
    </div>
    <div class="flex items-center h-full">
      <ThemeModelIcon></ThemeModelIcon>
      <FullScreenIcon></FullScreenIcon>
      <SysConfigIcon></SysConfigIcon>
      <UserCenter></UserCenter>
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoTitle from '@/layouts/common/logoTitle.vue'
import LeftMenuCollapsedIcon from '@/layouts/common/leftMenuCollapsedIcon.vue'
import SysConfigIcon from '@/layouts/common/sysConfigIcon.vue'
import FullScreenIcon from '@/layouts/common/fullScreenIcon.vue'
import UserCenter from '@/layouts/common/userCenter.vue'
</script>
