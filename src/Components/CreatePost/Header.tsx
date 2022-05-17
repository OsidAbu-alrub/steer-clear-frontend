import { NavigationProp, useNavigation } from "@react-navigation/native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { MainRootStack } from "../../Navigators/Main"

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
        <Image
          style={styles.postIcon}
          source={require("./../../Assets/CreatePost/back.png")}
        />
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
    paddingHorizontal: 10
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
