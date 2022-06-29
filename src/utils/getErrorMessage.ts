export const getErrorMessage = (error: any) => {
	if (error?.response?.data?.validation?.message)
		return error.response.data.validation.message
	if (error?.response?.data?.message) return error.response.data.message
	return "Unknown error happened!"
}
