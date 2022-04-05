<template>
  <BasicTopMenuMode>
    <template #header>
      <div class="h-full flex items-center justify-between px-[1rem]">
        <div class="flex items-center">
          <div class="flex items-center mr-[2rem]">
            <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="w-[3rem] h-[3rem] text-[3rem] mr-2" />
            <span style="color: rgba(59, 130, 246, 1)" class="text-[2rem] font-bold font-serif">Vue Admin Pro</span>
          </div>
          <GlobalMenuIndex mode="horizontal"></GlobalMenuIndex>
        </div>

        <div class="flex items-center">
          <ThemeModeIcon></ThemeModeIcon>
        </div>
      </div>
    </template>

    <template #main>
      <GlobalMain></GlobalMain>
    </template>
  </BasicTopMenuMode>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svgIcon.vue'

import BasicTopMenuMode from '@/layouts/basicLayout/basicTopMenuMode.vue'

import GlobalMenuIndex from '@/layouts/global/globalMenu/globalMenuIndex.vue'
import GlobalMain from '@/layouts/global/globalMain/globalMainIndex.vue'
import ThemeModeIcon from '@/layouts/common/themeModeIcon.vue'
</script>
