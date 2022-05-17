import { createContext } from "react"

export interface User {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
  bio: string
}

export type Credentials = Pick<User, "email" | "password">

export interface AuthContextType {
  user: User
  login: (user: Credentials) => Promise<void>
  logout: () => Promise<void>
}

export default createContext<AuthContextType>({
  user: {
    bio: "",
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    password: "",
    phoneNumber: ""
  },
  login: () => Promise.resolve(),
  logout: () => Promise.resolve()
})
