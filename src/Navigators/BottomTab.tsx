import { Entypo, Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image, StyleSheet, View } from "react-native"
import HomeImage from "../Assets/home.png"
import Scanner from "../Screens/BarcodeScanner/Scanner"
import Search from "../Screens/Filter/Filter"
import Home from "../Screens/Home/Home"
import Profile from "../Screens/Profile/Profile"
import { IS_ANDROID } from "../utils/constants"
import theme from "../utils/theme"
const Tabs = createBottomTabNavigator()

export default function BottomTab() {
	return (
		<Tabs.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarStyle: {
					backgroundColor: theme.color.main,
					height: 60,
					padding: 20,
					paddingBottom: IS_ANDROID ? 25 : 20,
					justifyContent: "space-between"
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
				name="Campaigns"
				component={Home}
				options={{
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<View style={focused ? styles.focused : undefined}>
							<FontAwesome5
								name="hands-helping"
								style={styles.icon}
								color="white"
								size={25}
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
					tabBarIcon: ({ focused }) => (
						<View style={focused ? styles.focused : undefined}>
							<Entypo
								name="camera"
								style={styles.icon}
								color="white"
								size={25}
							/>
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
							<FontAwesome
								name="bell"
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
							<Ionicons
								name="person"
								style={styles.icon}
								size={25}
								color="white"
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
	icon: { width: 25, height: 25 },
	campaignsIcon: {
		width: 30,
		height: 30
	}
})
