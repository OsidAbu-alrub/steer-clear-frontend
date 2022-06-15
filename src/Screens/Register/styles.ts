import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F29765",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  headerText: {
    fontSize: 30,
    color: "white",
    width: 130
  },
  sticker: {
    width: 150,
    height: 150,
    marginLeft: 20
  },
  formContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 10
  },
  username: {
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
    width: 250,
    marginBottom: 10,
    padding: 8,
    borderRadius: 6
  },
  email: {
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
    width: 250,
    padding: 8,
    borderRadius: 6
  },
  password: {
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
    width: 250,
    marginBottom: 10,
    padding: 8,
    borderRadius: 6
  },
  passwordConfirm: {
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
    width: 250,
    padding: 8,
    borderRadius: 6
  },
  registerButton: {
    width: 200,
    borderColor: "rgb(0,0,0)",
    alignItems: "center",
    padding: 11,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "#F29765"
  },
  error: {
    marginTop: 10,
    fontSize: 12,
    color: "red"
  }
})

export default styles
