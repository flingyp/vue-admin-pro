<template>
  <Icon :icon="iconLabel" :inline="true" :color="color" :style="{ fontSize }" class="inline-block" />
</template>

<script setup lang="ts">
// eslint-disable-next-line import/no-extraneous-dependencies
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

<style></style>
