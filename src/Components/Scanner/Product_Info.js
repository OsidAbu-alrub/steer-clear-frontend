import React from "react";
import { View, StyleSheet } from "react-native";
import Found from "./Product_Found";
import NotFound from "./Product_Not_Found";

export default function ProductInfo(props) {
  return (
    <View style={styles.container}>
      {props.found ? (
        <Found setScanned={props.setScanned} info={props.scannedProduct} />
      ) : (
        <NotFound setScanned={props.setScanned} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 350,
    height: 360,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
