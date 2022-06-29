import { useState } from "react"
import request from "../../axios"
import { useAuth } from "../../Context/Auth/useAuth"
import { getErrorMessage } from "../../utils/getErrorMessage"
import { showSnackbar } from "../../utils/showSnackbar"

interface RegisterBody {
	email: string
	password: string
	firstName: string
	lastName: string
	phoneNumber: string
	bio: string
}

export const useRegister = () => {
	const { login } = useAuth()
	const [isLoading, setIsLoading] = useState(false)
	const handleRegister = async (registerBody: RegisterBody) => {
		if (!validateFields(registerBody)) {
			showSnackbar("Please fill all fields", "error")
			setIsLoading(false)
			return
		}

		try {
			setIsLoading(true)
			await request.post("user/register", registerBody)
			const { email, password } = registerBody as RegisterBody
			await login({
				email,
				password
			})
		} catch (e: any) {
			showSnackbar(getErrorMessage(e), "error")
			setIsLoading(false)
		}
	}

	return { handleRegister, isLoading }
}

const validateFields = (fields: RegisterBody) => {
	const { email, password, firstName, lastName, phoneNumber, bio } = fields
	if (!email || !password || !firstName || !lastName || !phoneNumber || !bio) {
		showSnackbar("Please fill all fields", "error")
		return false
	}
	return true
}
