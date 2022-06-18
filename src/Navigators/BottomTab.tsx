import { AntDesign } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image, StyleSheet, View } from "react-native"
import HomeImage from "../Assets/Home/home.png"
import ScannerImage from "../Assets/Scanner/outlier.png"
import { useAuth } from "../Context/Auth/useAuth"
import Scanner from "../Screens/BarcodeScanner/Scanner"
import Search from "../Screens/Filter/Filter"
import Home from "../Screens/Home/Home"
import Profile from "../Screens/Profile/Profile"
import theme from "../utils/theme"

const Tabs = createBottomTabNavigator()

export default function BottomTab() {
  const { user } = useAuth()
  return (
    <Tabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.color.main,
          height: 60,
          padding: 20
        },
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
              <Image source={HomeImage} style={styles.icon} />
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
              <Image source={ScannerImage} style={styles.icon} />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="Notifications"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.focused : undefined}>
              <AntDesign
                name="bells"
                style={styles.icon}
                color="white"
                size={25}
              />
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
                source={{
                  uri: user.image
                }}
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

const styles = StyleSheet.create({
  focused: {
    borderColor: theme.color.secondary,
    borderBottomWidth: 2,
    padding: 4
  },
  icon: { width: 25, height: 25 }
})
