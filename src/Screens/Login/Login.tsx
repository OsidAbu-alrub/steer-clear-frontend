import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { Credentials } from "../../Context/Auth/Auth"
import { useAuth } from "../../Context/Auth/useAuth"
import { LoginRootStack } from "../../Navigators/Login"
import Logo from "../Assets/Login/logo.jpeg"
import styles from "./styles"

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
