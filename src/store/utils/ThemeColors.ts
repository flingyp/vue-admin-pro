import { ThemeColor, ThemeColorName, ThemeColorScene, ThemeColorTypes } from '@/types/SysType'

import { getColorPalette } from '@/utils/common/ColorsUtil'

interface ColorAction {
  scene: ThemeColorScene
  handler: (color: string) => string
}

/**
 * 添加css vars至body中
 * @param themeVars
 */
export const addThemeCssVarsToHtml = (themeVars: ThemeColor) => {
  const keys = Object.keys(themeVars)
  const style: string[] = []
  keys.forEach((key) => {
    // @ts-ignore
    style.push(`--${key}:${themeVars[key]}`)
  })
  const styleStr = style.join(';')
  document.body.style.cssText += styleStr
}

/**
 * 获取主题颜色的各种场景颜色值
 * @param colors
 * @returns
 */
export const getSysThemeColors = (colors: [ThemeColorTypes, string][]) => {
  const colorActions: ColorAction[] = [
    { scene: '', handler: (color) => color },
    { scene: 'Suppl', handler: (color) => color },
    { scene: 'Hover', handler: (color) => getColorPalette(color, 5) },
    { scene: 'Pressed', handler: (color) => getColorPalette(color, 7) }
  ]
  const themeColor: ThemeColor = {}
  colors.forEach((color) => {
    colorActions.forEach((action) => {
      const [colorType, colorValue] = color
      const colorKey: ThemeColorName = `${colorType}Color${action.scene}`
      themeColor[colorKey] = action.handler(colorValue)
    })
  })
  return themeColor
}
