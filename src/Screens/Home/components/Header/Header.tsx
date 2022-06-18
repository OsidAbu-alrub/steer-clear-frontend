import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { MainRootStack } from "../../../../Navigators/Main"
import PostImage from "./../../../../Assets/Home/post.png"
import SearchImage from "./../../../../Assets/Search/search.png"
import styles from "./styles"

function Header() {
  const navigation = useNavigation<NavigationProp<MainRootStack>>()
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>SteerClear</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("CreatePost")
          }}
        >
          <Image style={styles.postIcon} source={PostImage}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Search")
          }}
        >
          <Image style={styles.searchIcon} source={SearchImage}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
