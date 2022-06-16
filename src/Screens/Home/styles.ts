import { StatusBar, StyleSheet } from "react-native"
import theme from "../../utils/theme"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: theme.color.main
  },
  flatList: {
    padding: 5
  }
})

export default styles
