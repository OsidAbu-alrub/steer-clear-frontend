import { createContext } from "react"
import { ImageSourcePropType } from "react-native"

export interface User {
	id: string
	firstName: string
	lastName: string
	phoneNumber: string
	email: string
	password: string
	bio: string
	continentId: string
	image: ImageSourcePropType
}

export type Credentials = Pick<User, "email" | "password">

export interface AuthContextType {
	user: User
	login: (user: Credentials) => Promise<void>
	logout: () => Promise<void>
	validateAccessToken: () => Promise<boolean>
	refetchUser: () => Promise<void>
}

export default createContext<AuthContextType>({
	user: {
		bio: "",
		email: "",
		firstName: "",
		id: "",
		lastName: "",
		password: "",
		phoneNumber: "",
		continentId: "",
		image: {}
	},
	login: () => Promise.resolve(),
	logout: () => Promise.resolve(),
	validateAccessToken: () => Promise.resolve(false),
	refetchUser: () => Promise.resolve()
})
