import { useState } from "react"
import {
	Image,
	Keyboard,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native"
import CustomButton from "../../Components/CustomButton/CustomButton"
import CustomInput from "../../Components/CustomInput/CustomInput"
import { useAuth } from "../../Context/Auth/useAuth"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import { showSnackbar } from "../../utils/showSnackbar"
import theme from "../../utils/theme"
import { useCreateCampaign } from "./api"

export default function Form() {
	const { handleCreateCampaign } = useCreateCampaign()
	const { navigate, goBack } = useAppNavigation()
	const { user } = useAuth()
	const [campaignTitle, setCampaignTitle] = useState("")
	const [campaignBody, setCampaignBody] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	return (
		<View style={styles.container}>
			<View style={styles.topSection}>
				<View style={styles.postUser}>
					<TouchableOpacity onPress={() => navigate("Profile", user)}>
						<Image style={styles.topPic} source={user.image} />
					</TouchableOpacity>
					<Text
						style={{
							fontWeight: "bold",
							fontSize: 14,
							textDecorationLine: "underline",
							color: theme.text.secondary
						}}
					>{`${user.firstName} ${user.lastName}`}</Text>
				</View>
			</View>
			<View style={styles.middleSection}>
				<CustomInput
					fullwidth
					style={styles.content}
					placeholder="Campaign title"
					value={campaignTitle}
					onChangeText={(input) => setCampaignTitle(input)}
				/>
				<CustomInput
					fullwidth
					style={styles.content}
					multiline
					textAlignVertical="top"
					numberOfLines={10}
					placeholder="Campaign content"
					value={campaignBody}
					onChangeText={(input) => setCampaignBody(input)}
					onContentSizeChange={() => {}}
				/>
			</View>
			<CustomButton
				onPress={async () => {
					if (!campaignTitle.length || !campaignBody.length) {
						showSnackbar("Must fill out all fields")
						return
					}
					Keyboard.dismiss()
					setIsLoading(true)
					await handleCreateCampaign(user.id, campaignTitle, campaignBody)
					showSnackbar("Campaign created successfully")
					setIsLoading(false)
					setCampaignBody("")
					setCampaignTitle("")
					goBack()
				}}
				style={styles.button}
				title={!isLoading ? "Campaign" : "Creating Campaign..."}
				disabled={isLoading}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 30,
		backgroundColor: "white",
		borderRadius: 20,
		paddingBottom: 10,
		paddingHorizontal: 20,
		maxWidth: "80%"
	},
	topSection: {
		justifyContent: "space-between",
		flexDirection: "row",
		borderBottomWidth: 1,
		borderColor: "#DCD8D5",
		alignItems: "center",
		paddingVertical: 10
	},
	postUser: {
		flexDirection: "row",
		alignItems: "center"
	},
	topPic: {
		width: 45,
		height: 45,
		borderRadius: 30,
		margin: 5
	},
	middleSection: {
		marginVertical: 15
	},
	content: {
		marginTop: 20
	},
	button: {
		marginBottom: 10,
		marginTop: 20,
		alignSelf: "center"
	},
	right: {
		flexDirection: "row"
	}
})
