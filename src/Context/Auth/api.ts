import axiosInstance from "../../axios"
import { Credentials, User } from "./Auth"
import PlaceholderImage from "./../../Assets/General/person-placeholder-image.jpeg"

export const USER_LOGIN = `user/login`
export const fetchUser = async (user: Credentials) => {
  const res = await axiosInstance.post(USER_LOGIN, JSON.stringify(user))
  const userInfo = res.data

  return {
    ...userInfo.data,
    image: userInfo.data.image
      ? `data:image/jpeg;base64,${userInfo.data.image}`
      : PlaceholderImage
  } as User
}
