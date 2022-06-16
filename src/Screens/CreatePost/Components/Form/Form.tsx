import { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import SawsanImage from "./../../../../Assets/General/tempPic.jpg"
import styles from "./styles"
export default function Form() {
  const [input, setInput] = useState<string>("")

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.postUser}>
          <Image style={styles.topPic} source={SawsanImage} />
          <Text>Sawsan Hawwash</Text>
        </View>
        <TouchableOpacity onPress={handleAddPost}>
          <Text style={{ marginRight: 20 }}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middleSection}>
        <TextInput
          style={styles.content}
          placeholder="Whats on your mind?"
          value={input}
          onChangeText={(input) => setInput(input)}
        ></TextInput>
      </View>
    </View>
  )

  //Add the post to the database here
  function handleAddPost() {
    return
  }
}
