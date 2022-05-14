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
import LogoTitle from '@/layouts/common/LogoTitle.vue'
import LeftMenuCollapsedIcon from '@/layouts/common/LeftMenuCollapsedIcon.vue'
import SysConfigIcon from '@/layouts/common/SysConfigIcon.vue'
import FullScreenIcon from '@/layouts/common/FullScreenIcon.vue'
import UserCenter from '@/layouts/common/UserCenter.vue'
</script>
