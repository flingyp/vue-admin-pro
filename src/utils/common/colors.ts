import { colord } from 'colord'
import type { HsvColor } from 'colord'
import { ThemeColor } from '@/typings/common/sys'

const hueStep = 2
const saturationStep = 16
const saturationStep2 = 5
const brightnessStep1 = 5
const brightnessStep2 = 15
const lightColorCount = 5
const darkColorCount = 4

/**
 * 获取色相渐变
 * @param hsv - hsv格式颜色值
 * @param i - 与6的相对距离
 * @param isLight - 是否是亮颜色
 */
function getHue(hsv: HsvColor, i: number, isLight: boolean) {
  let hue: number
  if (hsv.h >= 60 && hsv.h <= 240) {
    // 冷色调
    // 减淡变亮 色相顺时针旋转 更暖
    // 加深变暗 色相逆时针旋转 更冷
    hue = isLight ? hsv.h - hueStep * i : hsv.h + hueStep * i
  } else {
    // 暖色调
    // 减淡变亮 色相逆时针旋转 更暖
    // 加深变暗 色相顺时针旋转 更冷
    hue = isLight ? hsv.h + hueStep * i : hsv.h - hueStep * i
  }
  if (hue < 0) {
    hue += 360
  } else if (hue >= 360) {
    hue -= 360
  }
  return hue
}

/**
 * 获取饱和度渐变
 * @param hsv - hsv格式颜色值
 * @param i - 与6的相对距离
 * @param isLight - 是否是亮颜色
 */
function getSaturation(hsv: HsvColor, i: number, isLight: boolean) {
  let saturation: number
  if (isLight) {
    saturation = hsv.s - saturationStep * i
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep
  } else {
    saturation = hsv.s + saturationStep2 * i
  }
  if (saturation > 100) {
    saturation = 100
  }
  if (isLight && i === lightColorCount && saturation > 10) {
    saturation = 10
  }
  if (saturation < 6) {
    saturation = 6
  }
  return saturation
}

/**
 * 获取明度渐变
 * @param hsv - hsv格式颜色值
 * @param i - 与6的相对距离
 * @param isLight - 是否是亮颜色
 */
function getValue(hsv: HsvColor, i: number, isLight: boolean) {
  let value: number
  if (isLight) {
    value = hsv.v + brightnessStep1 * i
  } else {
    value = hsv.v - brightnessStep2 * i
  }
  if (value > 100) {
    value = 100
  }
  return value
}

/**
 * 根据颜色获取调色板颜色(从左至右颜色从浅到深，6为主色号)
 * @param color - 颜色
 * @param index - 调色板的对应的色号(6为主色号)
 * @description 算法实现从ant-design调色板算法中借鉴 https://github.com/ant-design/ant-design/blob/master/components/style/color/colorPalette.less
 */
export const getColorPalette = (color: string, index: number) => {
  if (index === 6) return color
  // 色号小于6的为亮色
  const isLight = index < 6
  const hsv = colord(color).toHsv()
  const i = isLight ? lightColorCount + 1 - index : index - lightColorCount - 1

  const newHsv: HsvColor = {
    h: getHue(hsv, i, isLight),
    s: getSaturation(hsv, i, isLight),
    v: getValue(hsv, i, isLight)
  }

  return colord(newHsv).toHex()
}
