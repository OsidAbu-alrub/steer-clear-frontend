import { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export default function Form() {

  const [input,setInput]=useState();

  //Add the post to the database here
  const addPost=()=>{

  }

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.postUser}>
          <Image
            style={styles.topPic}
            source={require("../../assets/tempPic.jpg")}
          />
          <Text style={styles.postUsername}>Sawsan Hawwash</Text>
        </View>
       <TouchableOpacity onPress={addPost}><Text style={{ marginRight: 20 }}>Post</Text></TouchableOpacity>
      </View>
      <View style={styles.middleSection}>
        <TextInput
          style={styles.content}
          placeholder="Whats on your mind?"
          onChangeText={(text) => setInput(text)}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "white",
    
  },
  topSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#DCD8D5",
    alignItems: "center",
  },
  postUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  topPic: {
    width: 35,
    height: 35,
    borderRadius: 30,
    margin: 5,
  },
  middleSection: {
    marginVertical: 15,
  },
  content: {
    marginTop: 10,
    lineHeight: 20,
    paddingHorizontal: 5,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#DCD8D5",
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  right: {
    flexDirection: "row",
  },
});
