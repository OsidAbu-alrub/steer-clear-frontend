import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Dimensions,
  Text
} from "react-native"
import Header from "../Components/Home/Header"

function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <Image
          style={styles.profilePic}
          source={require("../Assets/tempPic.jpg")}
        />
        <Text style={styles.username}>Username</Text>
        <Text style={styles.username}>bio</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  mainContent: {
    flex: 1,
    alignItems: "center"
  },
  profilePic: {
    width: Dimensions.get("window").width,
    height: 200,
    resizeMode: "contain",
    backgroundColor: "#BFBDBB",
    alignSelf: "center",
    marginTop: 10
  },
  username: {
    fontSize: 20,
    marginTop: 10
  },
  postList: {
    borderWidth: 1,
    marginTop: 30,
    height: 0
  }
})

export default Profile
