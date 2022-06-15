import { Dimensions, StatusBar, StyleSheet } from "react-native"

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

export default styles
