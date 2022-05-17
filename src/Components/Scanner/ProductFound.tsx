import React, { Dispatch, FC, SetStateAction } from "react"
import { Button, Text, View } from "react-native"
import { ProductInfo } from "./ProductInfo"

interface Props {
  productInfo: ProductInfo
  setIsScanned: Dispatch<SetStateAction<boolean>>
}

const ProductFound: FC<Props> = ({ setIsScanned, productInfo }) => {
  return (
    <View>
      <Text style={{ marginBottom: 10 }}>Name:{productInfo.name}</Text>
      <Text style={{ marginBottom: 10 }}>Barcode:{productInfo.barcode}</Text>
      <Text style={{ marginBottom: 10 }}>
        Israeli: {productInfo.isIsraeli ? "Yes" : "No"}
      </Text>
      <Button title="Reset" onPress={() => setIsScanned(false)} />
    </View>
  )
}

export default ProductFound
