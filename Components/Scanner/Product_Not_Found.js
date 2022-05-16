import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Not_Found(props) {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{marginBottom: 30}}>
        Opps, no such product was found {`:( \n`}
        <TouchableOpacity onPress={() => navigation.navigate("Add_Product")}>
          <Text>click Here to add this product</Text>
        </TouchableOpacity>
      </Text>
      <Button title="Reset" onPress={() => props.setScanned(false)} />
    </View>
  );
}
