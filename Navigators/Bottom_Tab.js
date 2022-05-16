import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Search from "../Screens/Search";
import Scanner from "../Screens/Scanner";
import Profile from "../Screens/Profile";
import { View, Image } from "react-native";
const Tabs = createBottomTabNavigator();

export default function Bottom_Tab() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F29765", height: 55 },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <View
                style={{
                  borderColor: "white",
                  borderBottomWidth: 2,
                  padding: 4,
                }}
              >
                <Image
                  source={require("../assets/Home/home.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require("../assets/Home/home.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ),
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <View
                style={{
                  borderColor: "white",
                  borderBottomWidth: 2,
                  padding: 4,
                }}
              >
                <Image
                  source={require("../assets/Home/search.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require("../assets/Home/search.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ),
        }}
      />
      <Tabs.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <View
                style={{
                  borderColor: "white",
                  borderBottomWidth: 2,
                  padding: 4,
                }}
              >
                <Image
                  source={require("../assets/Home/scanner.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require("../assets/Home/scanner.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused == true ? (
              <View
                style={{
                  borderColor: "white",
                  borderBottomWidth: 2,
                  padding: 4,
                }}
              >
                <Image
                  source={require("../assets/tempPic.jpg")}
                  style={{ width: 25, height: 25, borderRadius: 30, margin: 5 }}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require("../assets/tempPic.jpg")}
                  style={{ width: 25, height: 25, borderRadius: 30, margin: 5 }}
                />
              </View>
            ),
        }}
      />
    </Tabs.Navigator>
  );
}
