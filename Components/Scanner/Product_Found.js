import React from "react";
import { Text,View,Button } from "react-native";

export default function Found(props) {
  return (

      <View>
        <Text style={{ marginBottom: 10 }}>
          Name:{props.info.Name}
        </Text>
        <Text style={{ marginBottom: 10 }}>
          Barcode:{props.info.Code}
        </Text>
        <Text style={{ marginBottom: 10 }}>
        Israeli: {props.info.Israeli+""}
      </Text>
      <Button title="Reset" onPress={() => props.setScanned(false)} />
      </View>
     
  );
}

