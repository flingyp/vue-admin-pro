<template>
  <iframe :src="route.meta.url" class="w-full h-[calc(100%-6.4rem)] p-[1rem]" :name="String(route.name)"></iframe>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
