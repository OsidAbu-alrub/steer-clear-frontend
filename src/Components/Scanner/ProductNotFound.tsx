import React, { Dispatch, SetStateAction } from "react"
import { View, Text, TouchableOpacity, Button } from "react-native"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { MainRootStack } from "../../Navigators/Main"

interface Props {
  setIsScanned: Dispatch<SetStateAction<boolean>>
}

export default function ProductNotFound(props: Props) {
  const navigation = useNavigation<NavigationProp<MainRootStack>>()

  return (
    <View>
      <Text style={{ marginBottom: 30 }}>
        Opps, no such product was found {":("}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("AddProduct")}>
            <Text>clicks Here to add this product</Text>
          </TouchableOpacity>
        </View>
      </Text>
      <Button title="Reset" onPress={() => props.setIsScanned(false)} />
    </View>
  )
}
