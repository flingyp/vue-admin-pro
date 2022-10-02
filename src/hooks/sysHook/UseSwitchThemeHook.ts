import { getLocalKey, setLocalKey } from '@/utils/common/HandleLocalStorageUtil'

import { ThemeModeType } from '@/types/SysType'

import { useSysStoreModule } from '@/store/modules/SysStoreModule'

const themeModeTitle = 'themeMode'

export const UseSwitchThemeHook = () => {
  const SysStoreModule = useSysStoreModule()

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
  const currentThemeMode = (): ThemeModeType => {
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

    return localMode as ThemeModeType
  }
  // 2. 切换主题模式
  const switchTheme = (mode: ThemeModeType) => {
    setLocalKey(themeModeTitle, mode)
    if (currentThemeMode() === 'light') {
      removeDarkClass()
    } else {
      addDarkClass()
    }
    SysStoreModule.setThemeMode(mode)
  }

  return {
    currentThemeMode,
    switchTheme
  }
}
