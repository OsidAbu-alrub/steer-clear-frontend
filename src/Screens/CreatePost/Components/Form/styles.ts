import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: "white"
  },
  topSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#DCD8D5",
    alignItems: "center"
  },
  postUser: {
    flexDirection: "row",
    alignItems: "center"
  },
  topPic: {
    width: 35,
    height: 35,
    borderRadius: 30,
    margin: 5
  },
  middleSection: {
    marginVertical: 15
  },
  content: {
    marginTop: 10,
    lineHeight: 20,
    paddingHorizontal: 5
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#DCD8D5",
    paddingVertical: 10,
    paddingHorizontal: 13
  },
  right: {
    flexDirection: "row"
  }
})

export default styles
