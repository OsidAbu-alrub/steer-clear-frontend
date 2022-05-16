import { useState } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableOpacity,
	Text,
	Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Sticker from "../assets/Register/sticker.png";

function Register() {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState();
	const [confirmPassword, setConfirmPassword] = useState();
	const [errorHandling, setErrorHandling] = useState(false);
	const [errorContent, setErrorContent] = useState();
	const navigation = useNavigation();

	const handleRegister = () => {
		if (email.indexOf("@") == -1) {
			setErrorContent("Invalid Email");
			setErrorHandling(true);
		} else if (password != confirmPassword) {
			setErrorContent("Confirmed password does not match");
			setErrorHandling(true);
		} else {
			navigation.navigate("Login");
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}>
					Here's your first step with us!
				</Text>
				<Image style={styles.sticker} source={Sticker} />
			</View>

			<View style={styles.formContainer}>
				<TextInput
					placeholder="Username"
					style={styles.username}
					onChangeText={(text) => setUsername(text)}
				/>
				<TextInput
					placeholder="Email"
					style={styles.email}
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					placeholder="Password"
					style={styles.password}
					onChangeText={(text) => setPassword(text)}
				/>
				<TextInput
					placeholder="Confirm Password"
					style={styles.passwordConfirm}
					onChangeText={(text) => setConfirmPassword(text)}
				/>
				{errorHandling && (
					<Text style={styles.error}>{errorContent}</Text>
				)}

				<TouchableOpacity
					style={styles.registerButton}
					onPress={handleRegister}
				>
					<Text style={{ color: "white" }}>Register</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F29765",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
	},
	header: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 50,
	},
	headerText: {
		fontSize: 30,
		color: "white",
		width: 130,
	},
	sticker: {
		width: 150,
		height: 150,
		marginLeft: 20,
	},
	formContainer: {
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 30,
		paddingHorizontal: 25,
		borderRadius: 10,
	},
	username: {
		borderBottomWidth: 1,
		borderColor: "rgb(0,0,0)",
		width: 250,
		marginBottom: 10,
		padding: 8,
		borderRadius: 6,
	},
	email: {
		borderBottomWidth: 1,
		borderColor: "rgb(0,0,0)",
		width: 250,
		padding: 8,
		borderRadius: 6,
	},
	password: {
		borderBottomWidth: 1,
		borderColor: "rgb(0,0,0)",
		width: 250,
		marginBottom: 10,
		padding: 8,
		borderRadius: 6,
	},
	passwordConfirm: {
		borderBottomWidth: 1,
		borderColor: "rgb(0,0,0)",
		width: 250,
		padding: 8,
		borderRadius: 6,
	},
	registerButton: {
		width: 200,
		borderColor: "rgb(0,0,0)",
		alignItems: "center",
		padding: 11,
		borderRadius: 20,
		marginBottom: 10,
		marginTop: 40,
		alignSelf: "center",
		backgroundColor: "#F29765",
	},
	error: {
		marginTop: 10,
		fontSize: 12,
		color: "red",
	},
});

export default Register;
