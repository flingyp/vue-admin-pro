<template>
  <BasicTopMenuMode>
    <template #header>
      <div class="h-full flex items-center justify-between">
        <div class="flex items-center h-full pl-[2rem]">
          <LogoTitle :is-need-collapsed="false"></LogoTitle>
          <GlobalMenuIndex mode="horizontal"></GlobalMenuIndex>
        </div>

        <div class="flex items-center h-full">
          <ThemeModeIcon></ThemeModeIcon>
          <FullScreenIcon></FullScreenIcon>
          <SysConfigIcon></SysConfigIcon>
        </div>
      </div>
    </template>

    <template #main>
      <GlobalMain></GlobalMain>
    </template>
  </BasicTopMenuMode>
</template>

<script setup lang="ts">
import BasicTopMenuMode from '@/layouts/basicLayout/basicTopMenuMode.vue'

import GlobalMenuIndex from '@/layouts/global/globalMenu/globalMenuIndex.vue'
import GlobalMain from '@/layouts/global/globalMain/globalMainIndex.vue'
import ThemeModeIcon from '@/layouts/common/themeModeIcon.vue'
import LogoTitle from '@/layouts/common/logoTitle.vue'
import SysConfigIcon from '@/layouts/common/sysConfigIcon.vue'
import FullScreenIcon from '@/layouts/common/fullScreenIcon.vue'
</script>
