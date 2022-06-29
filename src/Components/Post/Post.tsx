import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { FC, useState } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../../Context/Auth/useAuth"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import theme from "../../utils/theme"
import CustomIconButton from "../CustomIconButton/CustomIconButton"
import { useLike } from "./api"
import { PostContent } from "./api"
import CommentSection from "./CommentSection"

interface Props {
	postContent: PostContent
}

const Post: FC<Props> = ({ postContent }) => {
	const { user } = useAuth()
	const { navigate } = useAppNavigation()
	const { handleLike, isLoading: isDoingLikeAction } = useLike(postContent.id)
	const [post, setPost] = useState<PostContent>(postContent)
	const [isLiked, setIsLiked] = useState<boolean>(postContent.isLiked)
	const [isCommentSectionVisible, setIsCommentSectionVisible] = useState(false)
	const [numberOfLikes, setNumberOfLikes] = useState<number>(
		postContent.likes.length
	)
	const isOneLike = numberOfLikes === 1

	return (
		<>
			{isCommentSectionVisible && (
				<CommentSection
					postId={post.id}
					handleModalClose={() => setIsCommentSectionVisible(false)}
					isModalVisible={isCommentSectionVisible}
				/>
			)}
			<View style={styles.container}>
				<View style={styles.topSection}>
					<View>
						<TouchableOpacity
							style={styles.postUser}
							onPress={() =>
								post.user.id !== user.id &&
								navigate("PostProfile", postContent.user)
							}
							disabled={isDoingLikeAction}
						>
							<Image style={styles.topPic} source={postContent.user.image} />
							<Text
								style={{
									fontWeight: "bold",
									textDecorationLine: "underline",
									color: theme.text.secondary
								}}
							>{`${post.user.firstName} ${post.user.lastName}`}</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.middleSection}>
					<Text
						style={[styles.title, { color: theme.text.secondary }]}
						numberOfLines={1}
					>
						{post.title}
					</Text>
				</View>
				<View style={styles.middleSection}>
					<Text style={styles.content}>{post.body}</Text>
				</View>
				<View style={styles.bottomSection}>
					<View>
						<Text
							style={{
								fontSize: 16
							}}
						>
							{numberOfLikes || "No"} Like{!isOneLike && "s"}
						</Text>
					</View>
					<View style={styles.right}>
						<CustomIconButton
							icon={
								<AntDesign
									name="heart"
									size={30}
									color={isLiked ? "red" : "grey"}
								/>
							}
							onPress={async () => {
								setIsLiked((isLiked) => {
									setNumberOfLikes((numberOfLikes) =>
										isLiked ? numberOfLikes - 1 : numberOfLikes + 1
									)
									return !isLiked
								})
								const { data } = await handleLike()
								setPost(data as PostContent)
							}}
							buttonProps={{
								style: styles.like
							}}
						/>
						<CustomIconButton
							icon={<FontAwesome name="comment" size={30} color="grey" />}
							onPress={async () => setIsCommentSectionVisible(true)}
						/>
					</View>
				</View>
			</View>
		</>
	)
}

export default Post

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		marginTop: 25,
		backgroundColor: "white",
		borderRadius: 20,
		marginRight: 15,
		marginLeft: 15
	},
	topSection: {
		justifyContent: "space-between",
		flexDirection: "row",
		borderBottomWidth: 1,
		borderColor: "#DCD8D5",
		alignItems: "center",
		padding: 10
	},
	postUser: {
		flexDirection: "row",
		alignItems: "center"
	},
	topPic: {
		width: 35,
		height: 35,
		borderRadius: 30,
		margin: 5,
		marginRight: 10
	},
	middleSection: {
		marginVertical: 5,
		marginHorizontal: 15
	},
	title: {
		paddingHorizontal: 5,
		paddingTop: 10,
		fontSize: 18,
		fontWeight: "bold"
	},
	content: {
		lineHeight: 20,
		paddingHorizontal: 5,
		paddingVertical: 5,
		fontSize: 16
	},
	bottomSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderTopWidth: 1,
		borderColor: "#DCD8D5",
		padding: 15
	},
	right: {
		flexDirection: "row",
		alignItems: "center"
	},
	like: {
		position: "relative",
		bottom: -1
	}
})
