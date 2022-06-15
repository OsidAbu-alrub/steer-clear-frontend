import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F29765",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  formContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 120
  },
  username: {
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
    width: 250,
    marginBottom: 10,
    padding: 8,
    borderRadius: 6
  },
  password: {
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
    width: 250,
    padding: 8,
    borderRadius: 6
  },
  loginButton: {
    width: 150,
    borderColor: "rgb(0,0,0)",
    alignItems: "center",
    padding: 8,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: "#F29765"
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 50
  },
  registerLink: {
    fontWeight: "bold",
    color: "#F29765"
  },
  error: {
    marginTop: 10,
    fontSize: 12,
    color: "red"
  }
})

export default styles
