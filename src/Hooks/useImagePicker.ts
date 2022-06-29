import axios from "axios"
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker"
import { useState } from "react"
import { GLOBAL_URL_PREFIX } from "../axios"
import { useAuth } from "../Context/Auth/useAuth"
import { IS_IOS } from "../utils/constants"
import { getErrorMessage } from "../utils/getErrorMessage"
import { showSnackbar } from "../utils/showSnackbar"

type ImagePickerType<T> = {
	userId: string
	uploadUrl: string
	extraData?: T
}

export const useImagePicker = <T>({
	userId,
	uploadUrl
}: Omit<ImagePickerType<T>, "extraData">) => {
	const { user, refetchUser } = useAuth()
	const [isUploading, setIsUploading] = useState(false)

	async function uploadImage(
		extraData?: ImagePickerType<T>["extraData"]
	): Promise<boolean> {
		try {
			setIsUploading(true)
			const result = await launchImageLibraryAsync({
				mediaTypes: MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [2, 2],
				quality: 1
			})
			if (result.cancelled) {
				setIsUploading(false)
				showSnackbar("Upload cancelled", "info")
				return false
			}
			const formData = new FormData()
			const imageURL = IS_IOS ? result.uri.replace("file://", "") : result.uri
			const photo = {
				uri: imageURL,
				type: "image/jpeg",
				name: "image.jpg"
			}
			formData.append("image", photo as unknown as string)
			formData.append("userId", userId)
			extraData && formData.append("extraData", JSON.stringify(extraData))
			await axios.post(`${GLOBAL_URL_PREFIX}${uploadUrl}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					Accept: "application/json"
				}
			})
			userId === user.id && (await refetchUser())
			setIsUploading(false)
			return true
		} catch (e) {
			setIsUploading(false)
			showSnackbar(getErrorMessage(e), "error")
			return false
		}
	}
	return { uploadImage, isUploading }
}
