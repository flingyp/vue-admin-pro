<template>
  <Icon :icon="iconLabel" :color="color" :style="{ fontSize: fontSize }" class="inline-block" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface IconifyIconProps {
  iconLabel: string
  color?: string
  fontSize?: number
}

withDefaults(defineProps<IconifyIconProps>(), {
  fontSize: 16
})
</script>

<style scoped>
svg {
  vertical-align: text-top;
}
</style>
