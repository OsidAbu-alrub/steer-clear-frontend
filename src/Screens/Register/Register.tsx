import { NavigationProp, useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { LoginRootStack } from "../../Navigators/Login"
import Sticker from "../Assets/Register/sticker.png"
import styles from "./styles"

function Register() {
  const [, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errorHandling, setErrorHandling] = useState(false)
  const [errorContent, setErrorContent] = useState("")
  const navigation = useNavigation<NavigationProp<LoginRootStack>>()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Here's your first step with us!</Text>
        <Image style={styles.sticker} source={Sticker} />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Username"
          style={styles.username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          placeholder="Email"
          style={styles.email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.passwordConfirm}
          onChangeText={(text) => setConfirmPassword(text)}
        />
        {errorHandling && <Text style={styles.error}>{errorContent}</Text>}

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={{ color: "white" }}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  function handleRegister() {
    if (email.indexOf("@") == -1) {
      setErrorContent("Invalid Email")
      setErrorHandling(true)
    } else if (password != confirmPassword) {
      setErrorContent("Confirmed password does not match")
      setErrorHandling(true)
    } else {
      navigation.navigate("Login")
    }
  }
}

export default Register
