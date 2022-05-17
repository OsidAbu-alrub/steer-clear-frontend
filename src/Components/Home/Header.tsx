import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MainRootStack } from "../../Navigators/Main"
import PostImage from "./../../Assets/Home/post.png"

function Header() {
  const navigation = useNavigation<NavigationProp<MainRootStack>>()
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>SteerClear</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("CreatePost")
        }}
      >
        <Image style={styles.postIcon} source={PostImage} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F29765",
    paddingVertical: 16,
    paddingHorizontal: 15
  },
  appName: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold"
  },
  postIcon: {
    width: 27,
    height: 27
  }
})

export default Header
