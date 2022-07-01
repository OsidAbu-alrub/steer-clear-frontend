import AsyncStorage from "@react-native-async-storage/async-storage"
import request from "../../axios"
import { JWT_COOKIE_KEY } from "../../utils/constants"
import { getErrorMessage } from "../../utils/getErrorMessage"
import getValidImage from "../../utils/getValidImage"
import { showSnackbar } from "../../utils/showSnackbar"
import { Credentials, User } from "./Auth"
import { getJwtTokenFromHeaders } from "./utils"
import * as Location from "expo-location"
import { getContinentName } from "@brixtol/country-continent"

export const USER_LOGIN = `user/login`
export const FETCH_USER = `user/find`
export const USER_LOGOUT = "user/logout"

export const fetchUser = async (user: Credentials, isHashed: boolean) => {
	try {
		const res = await request.post(USER_LOGIN, { ...user, isHashed })
		const cookieHeaders = res.headers["set-cookie"]
		const jwtToken = getJwtTokenFromHeaders(cookieHeaders as string[])
		await AsyncStorage.setItem(JWT_COOKIE_KEY, jwtToken)
		const userInfo = res.data
		return {
			...userInfo.data,
			image: getValidImage(userInfo.data.image)
		} as User
	} catch (e: any) {
		showSnackbar(getErrorMessage(e), "error")
	}
}

export const fetchUserById = async (userId: string) => {
	try {
		const res = await request.post(FETCH_USER, { id: userId })
		const userInfo = res.data
		return {
			...userInfo.data,
			image: getValidImage(userInfo.data.image)
		} as User
	} catch (e: any) {
		showSnackbar(getErrorMessage(e), "error")
	}
}

export const getUserContinent = async () => {
	try {
		const { status } = await Location.requestForegroundPermissionsAsync()
		if (status !== "granted") {
			showSnackbar("Permission to access location was denied", "error")
			return
		}
		const {
			coords: { latitude, longitude }
		} = await Location.getCurrentPositionAsync({})
		const countryCodeResponse = await request.get(
			`http://api.geonames.org/countryCodeJSON?lat=${latitude}&lng=${longitude}&username=osid`
		)

		const countryCode = countryCodeResponse.data.countryCode
		const continent = getContinentName(countryCode)

		const continentResponse = await request.post("continent/retrieve-first", {
			name: continent
		})

		return continentResponse.data.data.id
	} catch (e: any) {
		showSnackbar("Error getting continent", "error")
	}
}

export const logoutAsync = async () => request.post(USER_LOGOUT)
