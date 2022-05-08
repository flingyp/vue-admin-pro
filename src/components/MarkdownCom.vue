<template>
  <div :id="id"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Vditor from 'vditor'

// 'markdown-vditor'
interface MarkdownProps {
  id?: string // 指定编辑器唯一ID
  mode?: 'wysiwyg' | 'sv' | 'ir' // MarkDown 模式（分屏预览、所见即所得、即使渲染）
  icon?: 'ant' | 'material' // 图标风格
  theme?: 'classic' | 'dark' // 主题模式
  content: string // MarkDown 内容
}

interface MarkdownEmits {
  (e: 'update:content', content: string): void
}

const props = withDefaults(defineProps<MarkdownProps>(), {
  id: 'vditor:markdown',
  mode: 'ir',
  icon: 'ant',
  theme: 'classic',
  content: ''
})

const emits = defineEmits<MarkdownEmits>()

const vditor = ref<Vditor | null>(null)

onMounted(() => {
  vditor.value = new Vditor(props.id, {
    width: 'auto',
    height: 'auto',
    typewriterMode: true,
    // MarkDown 模式（分屏预览、所见即所得、即使渲染）
    mode: props.mode,
    // 主题模式
    theme: props.theme,
    // 图标风格
    icon: props.icon,
    // 是否支持拖拽
    resize: {
      enable: true
    },
    // 是否支持初始化时否展现大纲
    outline: {
      enable: true,
      position: 'left'
    },
    // 编辑器异步渲染完成后的回调方法
    after: () => {
      vditor.value!.setValue(props.content)
    },
    // 输入内容时触发
    input: (value: string) => {
      emits('update:content', value)
    }
  })
})
</script>

<style src="vditor/dist/index.css"></style>
