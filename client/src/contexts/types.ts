type UserInfo = {
  contact_email: string
}

export type UserContextTS = {
  userInfo: UserInfo | null
  setUserInfo(info:UserInfo): void
}