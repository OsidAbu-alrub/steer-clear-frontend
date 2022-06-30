import { useRoute } from "@react-navigation/native"
import { useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ActivityIndicator } from "react-native-paper"
import Sticker from "../../Assets/sticker.png"
import CustomButton from "../../Components/CustomButton/CustomButton"
import CustomInput from "../../Components/CustomInput/CustomInput"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import { Credentials } from "../../Context/Auth/Auth"
import { SCREEN_HEIGHT } from "../../utils/constants"
import theme from "../../utils/theme"
import { useLoginNavigation } from "../Login/useLoginNavigation"
import { useRegister } from "./api"

function Register() {
	const { params } = useRoute()
	const { email: loginEmail = "", password: loginPassword = "" } =
		(params as Credentials) ?? {}
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [email, setEmail] = useState(loginEmail)
	const [password, setPassword] = useState(loginPassword)
	const [bio, setBio] = useState("")
	const { handleRegister, isLoading } = useRegister()
	const { navigate } = useLoginNavigation()

	return (
		<CustomScrollView>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Here's your first step with us!</Text>
					<Image style={styles.sticker} source={Sticker} />
				</View>

				<View style={styles.formContainer}>
					<CustomInput
						fullwidth
						placeholder="First name*"
						style={styles.textInput}
						value={firstName}
						onChangeText={(text) => setFirstName(text)}
					/>
					<CustomInput
						fullwidth
						placeholder="Last name*"
						style={styles.textInput}
						value={lastName}
						onChangeText={(text) => setLastName(text)}
					/>
					<CustomInput
						fullwidth
						placeholder="Email*"
						style={styles.textInput}
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
					<CustomInput
						fullwidth
						placeholder="Password*"
						style={styles.textInput}
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
					<CustomInput
						fullwidth
						placeholder="Phone number*"
						style={styles.textInput}
						value={phoneNumber}
						onChangeText={(text) => setPhoneNumber(text)}
					/>
					<CustomInput
						multiline
						numberOfLines={4}
						textAlignVertical="top"
						placeholder="Bio*"
						fullwidth
						value={bio}
						onChangeText={(text) => setBio(text)}
					/>
					<CustomButton
						style={styles.registerButton}
						onPress={async () => {
							await handleRegister({
								bio,
								email,
								firstName,
								lastName,
								password,
								phoneNumber
							})
						}}
						disabled={isLoading}
					>
						{isLoading ? (
							<ActivityIndicator color={theme.color.secondary} size="small" />
						) : (
							<Text style={{ color: "white" }}>Register</Text>
						)}
					</CustomButton>
					<View style={{ flexDirection: "row", marginTop: 10 }}>
						<Text>Have an account? {""}</Text>
						<TouchableOpacity>
							<Text
								style={styles.loginLink}
								onPress={() => navigate("Login", { email, password })}
							>
								Login here!
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
		height: SCREEN_HEIGHT
	},
	header: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 50
	},
	headerText: {
		fontSize: 30,
		color: "white",
		width: 130
	},
	sticker: {
		width: 150,
		height: 150,
		marginLeft: 20
	},
	formContainer: {
		backgroundColor: "white",
		alignItems: "center",
		paddingVertical: 30,
		paddingHorizontal: 25,
		borderRadius: 10,
		maxWidth: "80%"
	},
	textInput: {
		marginBottom: 20
	},
	registerButton: {
		marginBottom: 10,
		marginTop: 20
	},
	loginLink: {
		fontWeight: "bold",
		color: theme.color.main,
		textDecorationLine: "underline"
	}
})

export default Register
