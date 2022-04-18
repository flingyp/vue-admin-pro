<template>
  <iframe :src="route.meta.url" class="w-full h-[calc(100vh-10.4rem)]" :name="String(route.name)"></iframe>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
