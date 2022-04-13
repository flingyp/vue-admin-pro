<template>
  <div
    class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]"
    v-if="!isNeedCollapsed || !sysStore.siderMenuCollapsed"
  >
    <SvgIcon :name="logoName" class="w-[3rem] h-[3rem] text-[3rem] mr-2 text-primary" />
    <span class="text-[2rem] font-bold font-serif text-primary">{{ name }}</span>
  </div>

  <div
    class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]"
    v-if="isNeedCollapsed && sysStore.siderMenuCollapsed"
  >
    <SvgIcon :name="logoName" class="w-[3rem] h-[3rem] text-[3rem] mr-2 text-primary" />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svgIcon.vue'

import { useSysStore } from '@/store/modules/sysStore'

interface ILogoTitleProps {
  logoName?: string
  name?: string
  isNeedCollapsed?: boolean
}

const sysStore = useSysStore()

withDefaults(defineProps<ILogoTitleProps>(), {
  logoName: 'logo-rocket',
  name: 'Vue Admin Pro',
  isNeedCollapsed: true
})
</script>

<style scoped></style>
