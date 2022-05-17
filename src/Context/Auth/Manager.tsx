/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ReactNode, useState } from "react"
import { fetchUser } from "./api"
import Auth, { AuthContextType, Credentials } from "./Auth"

interface Props {
  children: ReactNode
}

const AuthManager = ({ children }: Props) => {
  const [user, setUser] = useState<AuthContextType["user"]>(undefined!)
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
