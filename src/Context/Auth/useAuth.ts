import { useContext } from "react"
import Auth from "./Auth"

export const useAuth = () => useContext(Auth)
