<template>
  <header class="h-full flex items-center justify-between">
    <div class="flex items-center h-full pl-[2rem]">
      <LogoTitle :is-need-collapsed="false"></LogoTitle>
      <GlobalMenu mode="horizontal"></GlobalMenu>
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
import LogoTitle from '@/layouts/comComponent/LogoTitle.vue'
import ThemeModeIcon from '@/layouts/comComponent/ThemeModeIcon.vue'
import GlobalMenu from '@/layouts/global/globalMenu/GlobalMenu.vue'
import SysIconConfig from '@/layouts/comComponent/SysIconConfig.vue'
import FullScreenIcon from '@/layouts/comComponent/FullScreenIcon.vue'
import UserCenter from '@/layouts/comComponent/UserCenter.vue'
</script>
