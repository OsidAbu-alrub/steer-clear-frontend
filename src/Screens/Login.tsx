import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image
} from "react-native"
import Auth from "../Context/Auth"
import { useContext, useState } from "react"
import { LoginRootStack } from "../Navigators/Login"
import { NavigationProp, useNavigation } from "@react-navigation/native"

export default function Login() {
  const navigation = useNavigation<NavigationProp<LoginRootStack>>()
  const { setIsLoggedIn } = useContext(Auth)
  const [, setUsername] = useState("")
  const [, setPassword] = useState("")

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../Assets/Login/logo.jpeg")}
      />
      <View style={styles.formContainer}>
        <View>
          <TextInput
            style={styles.username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Username"
          />
          <TextInput
            style={styles.password}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Don't have an account? {""}</Text>
          <TouchableOpacity>
            <Text
              style={styles.registerLink}
              onPress={() => navigation.navigate("Register")}
            >
              Sign up now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  function loginHandler() {
    setIsLoggedIn(true)
  }
}

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
