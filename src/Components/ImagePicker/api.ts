import axios from "axios"
import { ImageInfo } from "expo-image-picker"
import { Platform } from "react-native"
import { GLOBAL_URL_PREFIX } from "../../axios"
import { useAuth } from "../../Context/Auth/useAuth"

export const useUpload = () => {
  const { user } = useAuth()
  async function handleUpload(image: ImageInfo): Promise<string> {
    if (image.cancelled || !image.uri) return ""
    const formData = new FormData()

    const imageURL =
      Platform.OS === "ios" ? image.uri.replace("file://", "") : image.uri

    const photo = {
      uri: imageURL,
      type: "image/jpeg",
      name: "image.jpg"
    }

    formData.append("image", photo as unknown as string)
    formData.append("userId", user.id)

    // TODO: make URL dynamic
    const res = await axios.post(
      `${GLOBAL_URL_PREFIX}user/upload-image`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json"
        }
      }
    )

    return res.data.data
  }

  return handleUpload
}
