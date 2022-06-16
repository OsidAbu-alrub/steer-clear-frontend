import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { MainRootStack } from "../../../../Navigators/Main"
import BankImage from "./../../../../Assets/CreatePost/back.png"
import styles from "./styles"

function Header() {
  const navigation = useNavigation<NavigationProp<MainRootStack>>()

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>SteerClear</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("BottomTab")
        }}
      >
        <Image style={styles.postIcon} source={BankImage} />
      </TouchableOpacity>
    </View>
  )
}

export default Header
