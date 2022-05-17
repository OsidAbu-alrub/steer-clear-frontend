import React, { Dispatch, SetStateAction } from "react"
import { View, StyleSheet } from "react-native"
import Found from "./ProductFound"
import NotFound from "./ProductNotFound"

export interface ProductInfo {
  name: string
  barcode: string
  isIsraeli: boolean
}

interface Props {
  isProductFound: boolean
  setIsScanned: Dispatch<SetStateAction<boolean>>
  productInfo: ProductInfo
}

export default function ProductInfo({
  isProductFound,
  setIsScanned,
  productInfo
}: Props) {
  return (
    <View style={styles.container}>
      {isProductFound ? (
        <Found setIsScanned={setIsScanned} productInfo={productInfo} />
      ) : (
        <NotFound setIsScanned={setIsScanned} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 350,
    height: 360,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})
