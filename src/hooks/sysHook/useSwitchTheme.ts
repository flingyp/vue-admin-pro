import { getLocalKey, setLocalKey } from '@/utils/common/handleLocalStorage'

import { themeModeType } from '@/types/SysTypes'

import { useSysStore } from '@/store/modules/sysStore'

const themeModeTitle = 'themeMode'

export const useSwitchTheme = () => {
  const sysStore = useSysStore()

  /** windicss 暗黑模式 */
  function handleWindicssDarkMode() {
    const DARK_CLASS = 'dark'
    function addDarkClass() {
      document.documentElement.classList.add(DARK_CLASS)
    }
    function removeDarkClass() {
      document.documentElement.classList.remove(DARK_CLASS)
    }
    return {
      addDarkClass,
      removeDarkClass
    }
  }

  const { addDarkClass, removeDarkClass } = handleWindicssDarkMode()

  // 1. 获取当前主题
  const currentThemeMode = (): themeModeType => {
    let localMode = getLocalKey(themeModeTitle)
    if (!localMode || localMode === '') {
      setLocalKey(themeModeTitle, 'light')
      localMode = 'light'
    }

    if (localMode === 'light') {
      removeDarkClass()
    } else {
      addDarkClass()
    }

    return localMode as themeModeType
  }
  // 2. 切换主题模式
  const switchTheme = (mode: themeModeType) => {
    setLocalKey(themeModeTitle, mode)
    if (currentThemeMode() === 'light') {
      removeDarkClass()
    } else {
      addDarkClass()
    }
    sysStore.setThemeMode(mode)
  }

  return {
    currentThemeMode,
    switchTheme
  }
}
