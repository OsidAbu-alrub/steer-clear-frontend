import {
  ImageInfo,
  launchImageLibraryAsync,
  MediaTypeOptions
} from "expo-image-picker"
import React, { useEffect, useState } from "react"
import { Button, Image, View } from "react-native"
import { useUpload } from "./api"

export default function ImagePicker() {
  const handleUpload = useUpload()
  const [image, setImage] = useState<ImageInfo>()

  const pickImage = async () => {
    const result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [2, 2],
      quality: 1
    })

    if (!result.cancelled) setImage(result)
  }

  useEffect(() => {
    if (image) {
      // eslint-disable-next-line @typescript-eslint/no-extra-semi
      ;(async () => await handleUpload(image))()
    }
  }, [image])

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100
      }}
    >
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
    </View>
  )
}
