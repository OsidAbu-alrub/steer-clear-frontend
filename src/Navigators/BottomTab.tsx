import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ComponentProps } from "react"
import { Image, StyleSheet, View } from "react-native"
import HomeImage from "../Assets/Home/home.png"
import SearchImage from "../Assets/Home/search.png"
import ScannerImage from "../Assets/Scanner/outlier.png"
import Home from "../Screens/Home/Home"
import Profile from "../Screens/Profile"
import Scanner from "../Screens/Scanner"
import Search from "../Screens/Search"
import PlaceholderImage from "./../Assets/General/person-placeholder-image.jpeg"

const Tabs = createBottomTabNavigator()

export default function BottomTab() {
  // must have to fix type error
  const TabsNavigator = Tabs.Navigator as (
    props: ComponentProps<typeof Tabs.Navigator>
  ) => JSX.Element
  return (
    <TabsNavigator
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
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focused : undefined}>
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
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focused : undefined}>
              <Image source={SearchImage} style={{ width: 25, height: 25 }} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focused : undefined}>
              <Image source={ScannerImage} style={{ width: 25, height: 25 }} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focused : undefined}>
              <Image
                source={PlaceholderImage}
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
    </TabsNavigator>
  )
}

const styles = StyleSheet.create({
  focused: {
    borderColor: "white",
    borderBottomWidth: 2,
    padding: 4
  }
})
