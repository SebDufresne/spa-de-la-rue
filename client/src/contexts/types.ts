import { Dispatch, SetStateAction } from "react";

type UserInfo = {
  contact_email: string
}

export type UserContextTS = {
  userInfo: UserInfo | null
  setUserInfo: Dispatch<SetStateAction<null>>
}