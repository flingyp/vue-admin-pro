<template>
  <BasicLeftMenuMode>
    <template #header>
      <div class="h-full flex justify-between items-center">
        <div class="flex items-center h-full">
          <LeftMenuCollapsedIcon></LeftMenuCollapsedIcon>
        </div>
        <div class="flex items-center h-full">
          <ThemeModeIcon></ThemeModeIcon>
          <SysConfigIcon></SysConfigIcon>
        </div>
      </div>
    </template>

    <template #sider>
      <LogoTitle></LogoTitle>
      <GlobalMenuIndex mode="vertical"></GlobalMenuIndex>
    </template>

    <template #main>
      <GlobalMainIndex></GlobalMainIndex>
    </template>
  </BasicLeftMenuMode>
</template>

<script setup lang="ts">
import BasicLeftMenuMode from '@/layouts/basicLayout/basicLeftMenuMode.vue'

import LogoTitle from '@/layouts/common/logoTitle.vue'
import LeftMenuCollapsedIcon from '@/layouts/common/leftMenuCollapsedIcon.vue'
import ThemeModeIcon from '@/layouts/common/themeModeIcon.vue'
import GlobalMenuIndex from '@/layouts/global/globalMenu/globalMenuIndex.vue'
import GlobalMainIndex from '@/layouts/global/globalMain/globalMainIndex.vue'
import SysConfigIcon from '@/layouts/common/sysConfigIcon.vue'
</script>
