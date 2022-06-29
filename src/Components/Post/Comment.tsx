import { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import theme from "../../utils/theme"
import { CommentContent } from "./api"

interface Props {
	comment: CommentContent
}

const Comment: FC<Props> = ({ comment }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.pic} source={comment.user.image} />
			<View style={styles.content}>
				<Text style={[styles.name, { color: theme.text.secondary }]}>
					{comment.user.firstName} {comment.user.lastName}
				</Text>
				<Text style={styles.body}>{comment.body}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 10,
		backgroundColor: "#f5f5f5",
		borderRadius: 5,
		minWidth: "90%",
		maxWidth: "90%",
		padding: 10
	},
	pic: {
		width: 35,
		height: 35,
		borderRadius: 30
	},
	name: {
		marginLeft: 10,
		paddingRight: 10,
		fontWeight: "bold"
	},
	body: {
		marginLeft: 10,
		flexShrink: 1,
		flexWrap: "wrap",
		maxWidth: "95%"
	},
	content: {
		paddingRight: 20
	}
})

export default Comment
