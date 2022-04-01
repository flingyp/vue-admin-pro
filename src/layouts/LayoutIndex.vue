<template>
  <n-layout has-sider>
    <LayoutSiderCom />
    <n-layout class="pl-[264px]">
      <LayoutHeaderCom />
      <LayoutContentCom />
      <LayoutFooterCom />
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { NLayout } from 'naive-ui'

import LayoutSiderCom from './components/layoutSider/layoutSiderCom.vue'
import LayoutHeaderCom from './components/layoutHeader/layoutHeaderCom.vue'
import LayoutContentCom from './components/layoutContent/layoutContentCom.vue'
import LayoutFooterCom from './components/layoutFooter/layoutFooterCom.vue'
</script>

<style></style>
