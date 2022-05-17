import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ComponentProps } from "react"
import LoginComponent from "../Screens/Login"
import Register from "../Screens/Register"

export type LoginRootStack = {
  Login: undefined
  Register: undefined
}

const Stack = createNativeStackNavigator<LoginRootStack>()

export default function Login() {
  const StackNavigator = Stack.Navigator as (
    props: ComponentProps<typeof Stack.Navigator>
  ) => JSX.Element
  return (
    <StackNavigator initialRouteName="Login">
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
    </StackNavigator>
  )
}
