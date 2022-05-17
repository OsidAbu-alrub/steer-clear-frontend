import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import Logo from "../Assets/Login/logo.jpeg"
import { Credentials } from "../Context/Auth//Auth"
import { useAuth } from "../Context/Auth/useAuth"
import { LoginRootStack } from "../Navigators/Login"

export default function Login() {
  const navigation = useNavigation<NavigationProp<LoginRootStack>>()
  const { login } = useAuth()
  const [email, setEmail] = useState<Credentials["email"]>("")
  const [password, setPassword] = useState<Credentials["password"]>("")

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.formContainer}>
        <View>
          <TextInput
            style={styles.username}
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
          <TextInput
            style={styles.password}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={async () => await login({ email, password })}
          >
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
