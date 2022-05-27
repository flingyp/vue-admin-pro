import { App } from 'vue'

import { useUserStoreModule } from '@/store/modules/UserStoreModule'

/**
 * v-button-permission="[permission]"
 * 按钮权限控制指令
 */
export default (app: App<Element>) => {
  const UserStoreModule = useUserStoreModule()

  app.directive('button-permission', (el: HTMLButtonElement, binding) => {
    const permissions = UserStoreModule.getPermissions
    const btnPermissions: string[] = binding.value

    const isHaveBtnPermission = btnPermissions.some((btn) => {
      const btnArr = btn.split(':')
      return permissions?.some((permission) => {
        const permissionArr = permission.split(':')
        if (
          (btnArr[0] === permissionArr[0] || permissionArr[0] === '*') &&
          (btnArr[1] === permissionArr[1] || permissionArr[1] === '*') &&
          (btnArr[2] === permissionArr[2] || permissionArr[2] === '*')
        ) {
          return true
        }
        return false
      })
    })

    // 无权限就移除按钮
    if (!isHaveBtnPermission) {
      el.remove()
    }
  })
}
