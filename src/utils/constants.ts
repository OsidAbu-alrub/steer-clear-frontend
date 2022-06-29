import { Dimensions, StatusBar, Platform } from "react-native"

export const PLATFORM = Platform.OS
export const IS_ANDROID = PLATFORM === "android"
export const IS_IOS = PLATFORM === "ios"
export const SCREEN_HEIGHT = Dimensions.get("screen").height
export const SCREEN_WIDTH = Dimensions.get("screen").width
export const STATUS_BAR_HEIGHT = IS_ANDROID
	? StatusBar.currentHeight ?? 0 + 10
	: 0
export const USER_LOCAL_STORAGE_KEY = "USER_INFO"
export const JWT_COOKIE_KEY = "jwt"
