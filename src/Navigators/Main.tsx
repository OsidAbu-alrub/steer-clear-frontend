import { createNativeStackNavigator } from "@react-navigation/native-stack"
import BottomTab from "./BottomTab"
import CreatePost from "../Screens/CreatePost"
import AddProduct from "../Screens/AddProduct"
import { ComponentProps } from "react"

export type MainRootStack = {
  BottomTab: undefined
  CreatePost: undefined
  AddProduct: undefined
}

const Stack = createNativeStackNavigator<MainRootStack>()

export default function Main() {
  const StackNavigator = Stack.Navigator as (
    props: ComponentProps<typeof Stack.Navigator>
  ) => JSX.Element
  return (
    <StackNavigator initialRouteName="BottomTab">
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
    </StackNavigator>
  )
}
