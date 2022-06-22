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
    paddingHorizontal: 15,
    paddingTop: 40
  },
  appName: {
    color: theme.text.main,
    fontSize: 27,
    fontWeight: "bold"
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row-reverse"
  },
  postIcon: {
    width: 27,
    height: 27
  },
  searchIcon: {
    width: 27,
    height: 27,
    marginRight: 20
  }
})

export default styles
