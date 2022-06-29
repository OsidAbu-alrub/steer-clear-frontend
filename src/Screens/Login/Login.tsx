import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native"
import { ActivityIndicator } from "react-native-paper"
import Logo from "../../Assets/logo.jpeg"
import CustomButton from "../../Components/CustomButton/CustomButton"
import CustomInput from "../../Components/CustomInput/CustomInput"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import Loader from "../../Components/Loader/Loader"
import { Credentials } from "../../Context/Auth/Auth"
import { useAuth } from "../../Context/Auth/useAuth"
import BottomTabNavigator from "../../Navigators/BottomTab"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import theme from "../../utils/theme"
import { useLoginNavigation } from "./useLoginNavigation"

export default function Login() {
	const { params } = useRoute()
	const { email: registerEmail = "", password: registerPassword = "" } =
		(params as Credentials) ?? {}
	const { navigate } = useLoginNavigation()
	const { login, user, validateAccessToken } = useAuth()
	const [email, setEmail] = useState(registerEmail)
	const [password, setPassword] = useState(registerPassword)
	const [isValidatingAccessToken, setIsValidatingAccessToken] = useState(true)
	const [isLogginIn, setIsLogginIn] = useState(false)

	useEffect(() => {
		;(async () => {
			if (!(await validateAccessToken())) setIsValidatingAccessToken(false)
		})()
		return () => {
			setIsValidatingAccessToken(false)
		}
	}, [])

	if (isValidatingAccessToken)
		return (
			<View
				style={{
					backgroundColor: theme.color.light,
					minHeight: SCREEN_HEIGHT,
					minWidth: SCREEN_WIDTH
				}}
			>
				<Loader />
			</View>
		)
	if (user) return <BottomTabNavigator />

	return (
		<CustomScrollView>
			<View style={styles.container}>
				<Image style={styles.logo} source={Logo} />
				<View style={styles.formContainer}>
					<CustomInput
						fullwidth
						style={styles.textInput}
						onChangeText={(text) => setEmail(text)}
						placeholder="Email"
					/>
					<CustomInput
						fullwidth
						secureTextEntry={true}
						placeholder="Password"
						onChangeText={(text) => setPassword(text)}
					/>
					<CustomButton
						style={styles.loginButton}
						onPress={async () => {
							setIsLogginIn(true)
							await login({ email, password })
							setIsLogginIn(false)
						}}
						disabled={isLogginIn}
					>
						{isLogginIn ? (
							<ActivityIndicator color={theme.color.secondary} size="small" />
						) : (
							<Text style={{ color: "white" }}>Login</Text>
						)}
					</CustomButton>
					<View style={{ flexDirection: "row", marginTop: 10 }}>
						<Text>Don't have an account? {""}</Text>
						<TouchableOpacity>
							<Text
								style={styles.registerLink}
								onPress={() => navigate("Register", { email, password })}
							>
								Register now!
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</CustomScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.color.main,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		height: Dimensions.get("screen").height
	},
	formContainer: {
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 30,
		paddingHorizontal: 25,
		borderRadius: 10,
		marginBottom: 120,
		maxWidth: "80%"
	},
	textInput: {
		marginBottom: 30
	},
	loginButton: {
		marginBottom: 10,
		marginTop: 30
	},
	logo: {
		width: 300,
		height: 200,
		marginBottom: 50
	},
	registerLink: {
		fontWeight: "bold",
		color: theme.color.main,
		textDecorationLine: "underline"
	}
})
