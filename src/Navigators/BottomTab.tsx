import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../Screens/Home"
import Search from "../Screens/Search"
import Scanner from "../Screens/Scanner"
import Profile from "../Screens/Profile"
import { View, Image } from "react-native"
import HomeImage from "../Assets/Home/home.png"
import SearchImage from "../Assets/Home/search.png"
import SawsanImage from "../Assets/tempPic.jpg"
const Tabs = createBottomTabNavigator()

export default function BottomTab() {
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: "#F29765", height: 55 },
        tabBarShowLabel: false
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
                  padding: 4
                }}
              >
                <Image source={HomeImage} style={{ width: 25, height: 25 }} />
              </View>
            ) : (
              <View>
                <Image source={HomeImage} style={{ width: 25, height: 25 }} />
              </View>
            )
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
                  padding: 4
                }}
              >
                <Image
                  source={require("../Assets/Home/search.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={require("../Assets/Home/search.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            )
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
                  padding: 4
                }}
              >
                <Image source={SearchImage} style={{ width: 25, height: 25 }} />
              </View>
            ) : (
              <View>
                <Image source={SearchImage} style={{ width: 25, height: 25 }} />
              </View>
            )
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
                  padding: 4
                }}
              >
                <Image
                  source={SawsanImage}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 30,
                    margin: 5
                  }}
                />
              </View>
            ) : (
              <View>
                <Image
                  source={SawsanImage}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 30,
                    margin: 5
                  }}
                />
              </View>
            )
        }}
      />
    </Tabs.Navigator>
  )
}
