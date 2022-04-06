<template>
  <!-- <n-space vertical size="large">
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content content-style="padding: 24px;"> 平山道 </n-layout-content>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;"> 海淀桥 </n-layout-sider>
        <n-layout-content content-style="padding: 24px;"> 平山道 </n-layout-content>
      </n-layout>
      <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;"> 海淀桥 </n-layout-sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;"> 平山道 </n-layout-content>
        <n-layout-footer>成府路</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-space> -->
  <BasicTopMixMenuLayout></BasicTopMixMenuLayout>
</template>

<script setup lang="ts">
import { NLayout, NSpace, NLayoutContent, NLayoutFooter, NLayoutHeader, NLayoutSider } from 'naive-ui'
import BasicLeftMenuLayout from '@/layouts/basicLayout/basicLeftMenuMode.vue'
import BasicTopMenuLayout from '@/layouts/basicLayout/basicTopMenuMode.vue'
import BasicTopMixMenuLayout from '@/layouts/basicLayout/basicTopMixMenuMode.vue'
</script>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
