/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactNode, useState } from "react"
import { fetchUser } from "./api"
import Auth, { AuthContextType, Credentials } from "./Auth"

interface Props {
  children: ReactNode
}

const AuthManager = ({ children }: Props) => {
  const [user, setUser] = useState<AuthContextType["user"]>(undefined!)
  // {
  //   id: "2604974b-4dbe-460b-af3b-65091372cf8e",
  //   firstName: "Osid",
  //   lastName: "Mazen",
  //   phoneNumber: "0592668994",
  //   email: "o.abualrub20@gmai.com",
  //   password: "123Abc",
  //   bio: "Very cool bio"
  // }
  return (
    <Auth.Provider value={{ user, login, logout }}>{children}</Auth.Provider>
  )

  async function login(user: Credentials) {
    const userCreds = await fetchUser(user)
    setUser(userCreds)
  }

  async function logout() {
    setUser(undefined!)
  }
}

export default AuthManager
