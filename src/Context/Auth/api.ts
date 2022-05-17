import axiosInstance from "../../axios"
import { Credentials, User } from "./Auth"

export const USER_LOGIN = `user/login`
export const fetchUser = async (user: Credentials) => {
  const res = await axiosInstance.post(USER_LOGIN, JSON.stringify(user))
  const userInfo = res.data
  return userInfo.data as User
}
