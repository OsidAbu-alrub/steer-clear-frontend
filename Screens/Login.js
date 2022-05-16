import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import Auth from "../Context/Auth";
import { useContext, useState } from "react";


export default function Login(props) {
  const { setIsLogged } = useContext(Auth);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorHandling, setErrorHandling] = useState(false);

  const loginHandler = () => {
    users.forEach(function (user) {
      if (username == null) {
        setErrorHandling(true);      } 
        else if (
        user.Name.toLowerCase == username.toLowerCase &&
        user.Password == password
      ) {
        setIsLogged(true);
      }
      else{
        setErrorHandling(true);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/Login/logo.jpeg")}
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
          {errorHandling && (
            <Text style={styles.error}>
              Wrong username/password, please try again.
            </Text>
          )}

          <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
            <Text style={{ color: "white" }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text>Don't have an account? {""}</Text>
          <TouchableOpacity>
            <Text
              style={styles.registerLink}
              onPress={() => props.navigation.navigate("Register")}
            >
              Sign up now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F29765",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  formContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 120,
  },
  username: {
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
    width: 250,
    marginBottom: 10,
    padding: 8,
    borderRadius: 6,
  },
  password: {
    borderBottomWidth: 1,
    borderColor: "rgb(0,0,0)",
    width: 250,
    padding: 8,
    borderRadius: 6,
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
    backgroundColor: "#F29765",
  },
  logo: {
    width: 300,
    height: 200,
    marginBottom: 50,
  },
  registerLink: {
    fontWeight: "bold",
    color: "#F29765",
  },
  error: {
    marginTop: 10,
    fontSize: 12,
    color: "red",
  },
});

const users = [
  {
    Name: "Hamzeh",
    Password: "111",
  },
  {
    Name: "Ahmad",
    Password: "222",
  },
  {
    Name: "Sara",
    Password: "333",
  },
];
