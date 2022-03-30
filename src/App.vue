<template>
  <!-- <suspense> 处理在setup语法糖直接使用await导致页面空白问题 -->
  <!-- https://cloud.tencent.com/developer/article/1898235 -->
  <suspense>
    <div>Hello World</div>
  </suspense>
</template>

<script setup lang="ts"></script>

<style></style>
