import { createContext, Dispatch, SetStateAction } from "react"

interface AuthContextType {
  isLoggedIn: boolean
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>
}

const Auth = createContext<AuthContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {
    return
  }
})

export default Auth
