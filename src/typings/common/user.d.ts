declare namespace UserTyping {
  interface ILoginRes {
    token: string
  }

  interface IUserInfo {
    id?: string
    username?: string
    nickname?: string
    birthday?: string
    roles?: string[]
    permissions?: string[]
    phone?: string
  }
}
