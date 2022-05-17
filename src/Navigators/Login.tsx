import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Screens/Login"
import Register from "../Screens/Register"

export type LoginRootStack = {
  Login: undefined
  Register: undefined
}

const Stack = createNativeStackNavigator<LoginRootStack>()

export default function Login() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
