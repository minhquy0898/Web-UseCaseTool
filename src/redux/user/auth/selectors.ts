import { RootState } from "../../store"

export const selectorAuth = (state:RootState)=> state.user.rootAuth.auth

export const selectorLogin = (state:RootState)=> state.user.rootAuth.isLogin
