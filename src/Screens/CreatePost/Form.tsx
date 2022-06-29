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
import { useCreatePost } from "./api"

export default function Form() {
	const { handleCreatePost } = useCreatePost()
	const { navigate, goBack } = useAppNavigation()
	const { user } = useAuth()
	const [postTitle, setPostTitle] = useState("")
	const [postBody, setPostBody] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	return (
		<View style={styles.container}>
			<View style={styles.topSection}>
				<View style={styles.postUser}>
					<TouchableOpacity onPress={() => navigate("Profile", user)}>
						<Image style={styles.topPic} source={user.image} />
					</TouchableOpacity>
					<Text
						style={{ fontWeight: "bold", fontSize: 13 }}
					>{`${user.firstName} ${user.lastName}`}</Text>
				</View>
			</View>
			<View style={styles.middleSection}>
				<CustomInput
					fullwidth
					style={styles.content}
					placeholder="Post title"
					value={postTitle}
					onChangeText={(input) => setPostTitle(input)}
				/>
				<CustomInput
					fullwidth
					style={styles.content}
					multiline
					textAlignVertical="top"
					numberOfLines={10}
					placeholder="Post content"
					value={postBody}
					onChangeText={(input) => setPostBody(input)}
					onContentSizeChange={() => {}}
				/>
			</View>
			<CustomButton
				onPress={async () => {
					if (!postTitle.length || !postBody.length) return
					Keyboard.dismiss()
					setIsLoading(true)
					await handleCreatePost(user.id, postTitle, postBody)
					showSnackbar("Post created successfully")
					setIsLoading(false)
					setPostBody("")
					setPostTitle("")
					goBack()
				}}
				style={styles.button}
				title={!isLoading ? "Post" : "Creating post..."}
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
