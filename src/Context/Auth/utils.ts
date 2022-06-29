import { JWT_COOKIE_KEY } from "../../utils/constants"

export const getJwtTokenFromHeaders = (cookies: string[]) => {
	return (cookies as string[])
		.find((cookie) => cookie.startsWith(JWT_COOKIE_KEY))!
		.split(";")[0]!
		.split("=")[1]
		.trim()
}
