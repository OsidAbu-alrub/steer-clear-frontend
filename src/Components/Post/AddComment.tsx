import { AntDesign } from "@expo/vector-icons"
import { FC, useState } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { ActivityIndicator } from "react-native-paper"
import CustomInput from "../CustomInput/CustomInput"
import { useAuth } from "../../Context/Auth/useAuth"
import theme from "../../utils/theme"

interface Props {
	onAddComment: (userId: string, postId: string, body: string) => Promise<void>
	postId: string
}

const AddComment: FC<Props> = ({ onAddComment: handleAddComment, postId }) => {
	const { user } = useAuth()
	const [comment, setComment] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	return (
		<View style={styles.container}>
			<CustomInput
				style={styles.input}
				value={comment}
				onChange={(e) => setComment(e.nativeEvent.text)}
				placeholder="add comment..."
			/>
			<TouchableOpacity
				onPress={async () => {
					if (!comment) return
					setIsLoading(true)
					await handleAddComment(user.id, postId, comment)
					setIsLoading(false)
					setComment("")
				}}
				style={{
					marginLeft: 10
				}}
				disabled={isLoading}
			>
				{!isLoading ? (
					<AntDesign name="caretright" size={30} color={theme.color.main} />
				) : (
					<ActivityIndicator color={theme.color.main} />
				)}
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 20,
		paddingBottom: 20,
		paddingHorizontal: 20,
		borderBottomColor: "#e6e6e6",
		borderBottomWidth: 1,
		width: "100%"
	},
	input: {
		width: "90%"
	}
})

export default AddComment
