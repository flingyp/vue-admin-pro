<template>
  <header class="h-full flex items-center justify-between">
    <div class="flex items-center h-full pl-[2rem]">
      <LogoTitle :is-need-collapsed="false"></LogoTitle>
      <GlobalMenuIndex mode="horizontal"></GlobalMenuIndex>
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
import LogoTitle from '@/layouts/common/logoTitle.vue'
import ThemeModeIcon from '@/layouts/common/themeModeIcon.vue'
import GlobalMenuIndex from '@/layouts/global/globalMenu/globalMenuIndex.vue'
import SysConfigIcon from '@/layouts/common/sysConfigIcon.vue'
import FullScreenIcon from '@/layouts/common/fullScreenIcon.vue'
import UserCenter from '@/layouts/common/userCenter.vue'
</script>
