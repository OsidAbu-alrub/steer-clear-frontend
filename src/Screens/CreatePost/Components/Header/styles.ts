import { StyleSheet } from "react-native"
import theme from "../../../../utils/theme"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.color.main,
    paddingVertical: 16,
    paddingHorizontal: 10
  },
  appName: {
    color: theme.text.main,
    fontSize: 27,
    fontWeight: "bold"
  },
  postIcon: {
    width: 27,
    height: 27
  }
})

export default styles
