import { StatusBar, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#ffdecc"
  },
  flatList: {
    padding: 5,
  },

})

export default styles
