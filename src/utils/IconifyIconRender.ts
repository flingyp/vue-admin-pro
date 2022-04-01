import { h } from 'vue'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/vue'

/**
 * Vue3的h()函数动态渲染iconify
 * @param iconLabel - 图标名称
 * @param color - 图标颜色
 * @param size - 图标大小
 */
export default function iconifyRender(iconLabel: string, color?: string, fontSize?: number) {
  const style: { color?: string; fontSize?: string } = {}
  if (color) {
    style.color = color
  }
  if (fontSize) {
    style.fontSize = `${fontSize}px`
  }
  return () => h(Icon, { icon: iconLabel, style })
}
