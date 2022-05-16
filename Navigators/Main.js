import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottom_Tab from "./Bottom_Tab";
import Create_Post from "../Screens/Create_Post";
import Add_Product from "../Screens/Add_Product";

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <Stack.Navigator initialRouteName="Bottom_Tab">
      <Stack.Screen
        name="Bottom_Tab"
        component={Bottom_Tab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create_Post"
        component={Create_Post}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add_Product"
        component={Add_Product}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
