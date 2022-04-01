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

import LayoutSiderCom from './components/layoutSider/LayoutSiderCom.vue'
import LayoutHeaderCom from './components/layoutHeader/LayoutHeaderCom.vue'
import LayoutContentCom from './components/layoutContent/LayoutContentCom.vue'
import LayoutFooterCom from './components/layoutFooter/LayoutFooterCom.vue'
</script>

<style></style>
