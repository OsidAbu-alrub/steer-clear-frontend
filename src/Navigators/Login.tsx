import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginComponent from "../Screens/Login/Login"
import Register from "../Screens/Register/Register"

export type LoginRootStack = {
  Login: undefined
  Register: undefined
}

const Stack = createNativeStackNavigator<LoginRootStack>()

export default function Login() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <>
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
      </>
    </Stack.Navigator>
  )
}
