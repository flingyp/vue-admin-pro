<template>
  <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]" v-if="!sysStore.siderMenuCollapsed">
    <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="w-[3rem] h-[3rem] text-[3rem] mr-2" />
    <span style="color: rgba(59, 130, 246, 1)" class="text-[2rem] font-bold font-serif">Vue Admin Pro</span>
  </div>

  <div class="flex items-center justify-center mb-[1rem] mt-[1rem] h-[5rem]" v-else>
    <SvgIcon name="logo-rocket" color="rgba(59, 130, 246, 1)" class="w-[3rem] h-[3rem] text-[3rem] mr-2" />
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svgIcon.vue'

import { useSysStore } from '@/store/modules/sysStore'

const sysStore = useSysStore()
</script>

<style scoped></style>
