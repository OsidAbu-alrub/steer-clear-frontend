import { SafeAreaView, Text, View, StyleSheet, TextInput, Touchable, TouchableOpacity } from "react-native"
import Header from "../CreatePost/Components/Header/Header"
import { Dropdown } from "react-native-element-dropdown"
import { useState } from "react"
import { ProductInfo } from "../../Components/Scanner/ProductInfo"
import React, { Dispatch, FC, SetStateAction } from "react"



interface Props {
  productInfo: ProductInfo
}

const AddProduct: FC<Props> =(productInfo) => {
  const [value, setValue] = useState(null)

  return (
    <SafeAreaView>
      <Header />
      <View style={styles.formContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Product Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Product Barcode:{productInfo}</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Product Category</Text>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle	={styles.placeholderStyle}
            data={categories}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            value={value}
            onChange={(item) => {
              setValue(item.value)
            }}
          />
        </View>
        <TouchableOpacity style={styles.add}><Text>Add</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
export default AddProduct;

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 10
  },
  text: {},
  input: { borderWidth: 1, marginLeft: 10, width: 150 },
  row: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
    alignItems:"center",
  },
  dropdown: {
    width: 100,
    marginLeft: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  placeholderStyle: { fontSize: 13 },
  add:{
    backgroundColor: "#5c8fe0",
    width: 100,
    padding: 10,
    color: "white",
    borderRadius: 10,
    alignItems:"center",
    marginBottom:10
  }
})

const categories = [
  { label: "Category 1", value: "1" },
  { label: "Category 2", value: "2" },
  { label: "Category 3", value: "3" },
  { label: "Category 4", value: "4" },
  { label: "Category 5", value: "5" },
  { label: "Category 6", value: "6" },
  { label: "Category 7", value: "7" },
  { label: "Category 8", value: "8" }
]
