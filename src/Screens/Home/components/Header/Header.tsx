import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { MainRootStack } from "../../../../Navigators/Main"
import PostImage from "./../../../../Assets/Home/post.png"
import styles from "./styles"

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

export default Header
