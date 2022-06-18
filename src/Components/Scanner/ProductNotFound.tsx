import React, { Dispatch, SetStateAction } from "react"
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { MainRootStack } from "../../Navigators/Main"
import { ProductInfo } from "./ProductInfo"

interface Props {
  productInfo: ProductInfo
  setIsScanned: Dispatch<SetStateAction<boolean>>
}


export default function ProductNotFound(props: Props) {
  const navigation = useNavigation<NavigationProp<MainRootStack>>()

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 30 }}>
        Opps, no such product was found, would you like to add this product?
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddProduct")}
        // onPress={() => navigation.navigate("AddProduct", value={props.productInfo})}
        style={styles.add}
      >
        <Text style={{ color: "white" }}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setIsScanned(false)}
        style={styles.goBack}
      >
        <Text style={{ color: "white" }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems:"center"

  },
  add: {
    backgroundColor: "#5c8fe0",
    width: 100,
    padding: 10,
    color: "white",
    borderRadius: 10,
    alignItems:"center",
    marginBottom:10
  },
  goBack: {
    backgroundColor: "#5c8fe0",
    width: 100,
    padding: 10,
    color: "white",
    borderRadius: 10,
    alignItems:"center",
  }
})
