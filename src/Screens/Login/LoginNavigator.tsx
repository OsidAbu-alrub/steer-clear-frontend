import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./Login"
import Register from "../Register/Register"
import { Credentials } from "../../Context/Auth/Auth"

export type LoginRootStack = {
	Login: Credentials
	Register: Credentials
}

const Stack = createNativeStackNavigator<LoginRootStack>()

export default function LoginNavigator() {
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
