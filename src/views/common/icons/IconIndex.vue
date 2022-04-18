<template>
  <div class="m-[2rem]">
    <n-card title="Iconify图标示例">
      <IconifyIcon
        v-for="(item, index) in iconifyIconList"
        :key="index"
        :iconLabel="item"
        :fontSize="40"
        class="m-[3rem]"
      ></IconifyIcon>

      <div class="mt-[2rem]">
        Iconify图标资源网址：
        <a href="https://icon-sets.iconify.design/" target="__blank" class="text-primary"
          >https://icon-sets.iconify.design/</a
        >
      </div>
    </n-card>

    <n-card title="本地SVG图标">
      <div class="flex items-center justify-around flex-wrap">
        <SvgIcon
          class="w-[30rem] h-[30rem]"
          v-for="(item, index) in localSvgIconList"
          :key="index"
          :name="item"
        ></SvgIcon>
      </div>

      <div class="mt-[4rem]">
        下载SVG文件放置在assets/svg文件夹下，使用components文件夹下的SvgIcon文件来使用SVG图标，组件的name属性及时SVG图标的文件名
      </div>
      <div class="my-[1rem]">
        如何引入本地SVG参考文章：<a
          href="https://juejin.cn/post/6932037172178616334#heading-0"
          target="__blank"
          class="text-primary"
          >https://juejin.cn/post/6932037172178616334#heading-0</a
        >
      </div>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui'

import IconifyIcon from '@/components/iconifyIcon.vue'
import SvgIcon from '@/components/svgIcon.vue'

const iconifyIconList = [
  'ion:accessibility',
  'ion:accessibility-outline',
  'ion:accessibility-sharp',
  'ion:add',
  'ion:add-circle',
  'ion:add-circle-sharp',
  'ion:add-circle-outline',
  'ion:airplane',
  'ion:alarm',
  'ion:albums',
  'ion:alert',
  'ion:alert-circle',
  'ion:alert-circle-outline',
  'ion:american-football',
  'ion:alert-outline',
  'ion:american-football',
  'ion:american-football-outline',
  'ion:analytics',
  'ion:aperture',
  'ion:aperture-sharp',
  'ion:apps',
  'ion:archive',
  'ion:arrow-back-circle',
  'ion:arrow-back-circle-outline',
  'ion:arrow-down',
  'ion:arrow-down-circle-outline',
  'bi:activity',
  'bi:alarm-fill',
  'bi:apple',
  'bi:arrow-clockwise',
  'bi:arrow-counterclockwise',
  'bi:arrow-down-circle',
  'bi:archive-fill',
  'bi:arrow-left-right'
]

const localSvgIconList = ['common-icon-404', 'common-icon-cl', 'common-icon-500']
</script>

<style scoped>
.n-card {
  margin-bottom: 20px;
}
</style>
