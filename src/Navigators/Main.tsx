import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AddProduct from "../Screens/AddProduct/AddProduct"
import Search from "../Screens/Filter/Filter"
import Profile from "../Screens/Profile/Profile"
import CreatePost from "../Screens/CreatePost/CreatePost"
import BottomTab from "./BottomTab"

export type MainRootStack = {
  BottomTab: undefined
  CreatePost: undefined
  AddProduct: undefined
  Search: undefined
  Profile: DummyUser
}

type DummyUser={
  id:string,
  firstName:string,
  lastName:string,
  phoneNumber:string,
  email:string,
  password:string,
  bio:string
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
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
