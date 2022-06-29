import { AntDesign } from "@expo/vector-icons"
import { FC } from "react"
import {
	FlatList,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native"
import { SCREEN_WIDTH } from "../../utils/constants"
import CustomScrollView from "../CustomScrollView/CustomScrollView"
import Loader from "../Loader/Loader"
import AddComment from "./AddComment"
import { useFetchPostComments } from "./api"
import Comment from "./Comment"

interface Props {
	postId: string
	handleModalClose: () => void
	isModalVisible: boolean
}

const CommentSection: FC<Props> = ({
	postId,
	isModalVisible,
	handleModalClose
}) => {
	const { comments, handleAddComment, isLoading } = useFetchPostComments(postId)
	const hasComments = comments && comments.length > 0

	return (
		<CustomScrollView
			contentContainerStyle={styles.centeredView}
			style={{ position: "absolute" }}
		>
			<Modal animationType="slide" transparent={true} visible={isModalVisible}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<TouchableOpacity style={styles.closeButtonContainer}>
							<AntDesign
								name="close"
								size={30}
								color="black"
								style={styles.closeIcon}
								onPress={handleModalClose}
							/>
						</TouchableOpacity>
						<View
							style={{
								flexDirection: "row"
							}}
						>
							<AddComment onAddComment={handleAddComment} postId={postId} />
						</View>
						{isLoading ? (
							<View
								style={{
									padding: 20
								}}
							>
								<Loader />
							</View>
						) : hasComments ? (
							<FlatList
								directionalLockEnabled={true}
								data={comments}
								renderItem={({ item: comment }) => (
									<View
										style={{
											justifyContent: "center",
											marginTop: 25
										}}
									>
										<Comment comment={comment} />
									</View>
								)}
								keyExtractor={(comment) => comment.id}
							/>
						) : (
							<Text
								style={{
									marginTop: 25,
									textAlign: "center"
								}}
							>
								No comments!
							</Text>
						)}
					</View>
				</View>
			</Modal>
		</CustomScrollView>
	)
}

export default CommentSection

const styles = StyleSheet.create({
	centeredView: {
		position: "absolute",
		bottom: 0,
		flex: 1,
		flexDirection: "row",
		maxWidth: SCREEN_WIDTH,
		justifyContent: "center",
		minHeight: "90%",
		maxHeight: "90%",
		marginTop: "auto"
	},
	modalView: {
		margin: 20,
		padding: 20,
		backgroundColor: "white",
		borderRadius: 20,
		alignItems: "center",
		minHeight: "100%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: -6
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		width: "100%",
		paddingBottom: 80
	},
	closeButtonContainer: {
		marginLeft: "auto"
	},
	closeIcon: {
		marginLeft: "auto",
		paddingBottom: 20
	}
})
