import React, { ReactNode } from "react"
import Login from "../../Screens/Login/Login"
import { useAuth } from "./useAuth"

const Validator = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()
  if (!user) {
    return <Login />
  }
  return <>{children}</>
}

export default Validator
