<template>
  <BasicTopMixMenuMode>
    <template #header>
      <div class="h-full flex justify-between items-center">
        <div class="flex items-center h-full pl-[2rem]">
          <LogoTitle :is-need-collapsed="false"></LogoTitle>
          <LeftMenuCollapsedIcon class="ml-[1rem]"></LeftMenuCollapsedIcon>
        </div>
        <div class="flex items-center h-full">
          <ThemeModelIcon></ThemeModelIcon>
          <FullScreenIcon></FullScreenIcon>
          <SysConfigIcon></SysConfigIcon>
        </div>
      </div>
    </template>

    <template #sider>
      <GlobalMenuIndex mode="vertical"></GlobalMenuIndex>
    </template>

    <template #main>
      <globalMainIndex></globalMainIndex>
    </template>
  </BasicTopMixMenuMode>
</template>

<script setup lang="ts">
import BasicTopMixMenuMode from '@/layouts/basicLayout/basicTopMixMenuMode.vue'

import GlobalMenuIndex from '@/layouts/global/globalMenu/globalMenuIndex.vue'
import globalMainIndex from '@/layouts/global/globalMain/globalMainIndex.vue'
import LogoTitle from '@/layouts/common/logoTitle.vue'
import LeftMenuCollapsedIcon from '@/layouts/common/leftMenuCollapsedIcon.vue'
import ThemeModelIcon from '@/layouts/common/themeModeIcon.vue'
import SysConfigIcon from '@/layouts/common/sysConfigIcon.vue'
import FullScreenIcon from '@/layouts/common/fullScreenIcon.vue'
</script>
