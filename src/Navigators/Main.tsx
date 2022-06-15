import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddProduct from "../Screens/AddProduct/AddProduct"
import CreatePost from "../Screens/CreatePost/CreatePost"
import BottomTab from "./BottomTab"

export type MainRootStack = {
  BottomTab: undefined
  CreatePost: undefined
  AddProduct: undefined
}

const Stack = createNativeStackNavigator<MainRootStack>()

export default function Main() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
