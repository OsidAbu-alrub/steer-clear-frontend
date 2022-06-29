/* eslint-disable @typescript-eslint/no-non-null-assertion */
import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { ReactNode, useState } from "react"
import { JWT_COOKIE_KEY, USER_LOCAL_STORAGE_KEY } from "../../utils/constants"
import { fetchUser, fetchUserById, getUserContinent, logoutAsync } from "./api"
import Auth, { AuthContextType, Credentials, User } from "./Auth"

interface Props {
	children: ReactNode
}

const AuthManager = ({ children }: Props) => {
	const [user, setUser] = useState<AuthContextType["user"]>(undefined!)
	return (
		<Auth.Provider
			value={{ user, login, logout, validateAccessToken, refetchUser }}
		>
			{children}
		</Auth.Provider>
	)

	async function login(user: Credentials, isHashed = false) {
		const userCreds = await fetchUser(user, isHashed)
		if (userCreds) {
			const userWithContinent: User = {
				...userCreds,
				continentId: await getUserContinent()
			}

			const stringifiedUserCreds = JSON.stringify(userWithContinent)
			await AsyncStorage.setItem(USER_LOCAL_STORAGE_KEY, stringifiedUserCreds)
			setUser(userWithContinent)
		}
	}

	async function validateAccessToken() {
		try {
			const jwtToken = await AsyncStorage.getItem(JWT_COOKIE_KEY)
			const stringifiedUserCreds = await AsyncStorage.getItem(
				USER_LOCAL_STORAGE_KEY
			)
			if (!jwtToken || !stringifiedUserCreds) return false
			const userCreds = JSON.parse(stringifiedUserCreds)
			await login(
				{ email: userCreds.email, password: userCreds.password },
				true
			)
			return true
		} catch (e) {
			return false
		}
	}

	async function refetchUser() {
		if (!user) throw new Error("User not logged in")
		const userInfo = await fetchUserById(user.id)
		const stringifiedUserCreds = JSON.stringify(userInfo)
		await AsyncStorage.setItem(USER_LOCAL_STORAGE_KEY, stringifiedUserCreds)
		if (userInfo) setUser(userInfo)
	}

	async function logout() {
		await logoutAsync()
		await AsyncStorage.removeItem(USER_LOCAL_STORAGE_KEY)
		await AsyncStorage.removeItem(JWT_COOKIE_KEY)
		setUser(undefined!)
	}
}

export default AuthManager
