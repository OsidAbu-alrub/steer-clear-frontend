import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 25,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 15,
    marginLeft: 15
  },
  topSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#DCD8D5",
    alignItems: "center",
    padding: 10
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
    marginVertical: 10,
    marginHorizontal: 15
  },
  content: {
    lineHeight: 20,
    paddingHorizontal: 5
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#DCD8D5",
    padding: 15
  },
  right: {
    flexDirection: "row"
  },
  like: {
    marginRight: 15,
    position: "relative",
    bottom: -1
  }
})

export default styles
