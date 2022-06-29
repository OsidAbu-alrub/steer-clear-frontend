import { AntDesign, Ionicons } from "@expo/vector-icons"
import { useRoute } from "@react-navigation/native"
import { FC } from "react"
import {
	Image,
	RefreshControl,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native"
import { Divider } from "react-native-paper"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CustomIconButton from "../../Components/CustomIconButton/CustomIconButton"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import Loader from "../../Components/Loader/Loader"
import Post from "../../Components/Post/Post"
import { User } from "../../Context/Auth/Auth"
import { useAuth } from "../../Context/Auth/useAuth"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import { useRefetchOnFocus } from "../../Hooks/useRefetchOnFocus"
import useRefresh from "../../Hooks/useRefresh"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import theme from "../../utils/theme"
import { useFollow, useIsFollowing, useUserPosts } from "./api"

interface Props {}

const PostProfile: FC<Props> = () => {
	const { user } = useAuth()
	const { goBack } = useAppNavigation()
	const { params } = useRoute()
	const currentUser = params as User
	const { userPosts, isFetchingPosts, refetchUserPosts } = useUserPosts(
		currentUser.id
	)
	const { isFetchingFollowStatus, followStatus, refetchFollowStatus } =
		useIsFollowing(currentUser.id)
	const isRefetchingUserPosts = useRefetchOnFocus(refetchUserPosts)
	const isRefetchingFollowingStatus = useRefetchOnFocus(refetchFollowStatus)
	const { follow, unfollow } = useFollow(currentUser.id)
	const [isRefreshing, handleRefresh] = useRefresh(async () => {
		await refetchUserPosts()
		await refetchFollowStatus()
	})
	const doesUserHavePosts = userPosts && userPosts.length > 0

	if (
		isFetchingPosts ||
		isRefetchingUserPosts ||
		isFetchingFollowStatus ||
		isRefetchingFollowingStatus
	)
		return (
			<>
				<AppHeader />
				<View
					style={{
						backgroundColor: theme.color.light,
						minHeight: SCREEN_HEIGHT,
						minWidth: SCREEN_WIDTH
					}}
				>
					<Loader />
				</View>
			</>
		)

	const followIcon = followStatus ? (
		<Ionicons
			name="md-person-remove-sharp"
			size={30}
			color={theme.color.main}
		/>
	) : (
		<Ionicons name="md-person-add-sharp" size={30} color={theme.color.main} />
	)

	return (
		<>
			<AppHeader
				actions={() => [
					{
						action: (
							<TouchableOpacity onPress={goBack}>
								<AntDesign name="back" color="white" size={30} />
							</TouchableOpacity>
						),
						id: "Back"
					}
				]}
				reverseTitleAndActions
			/>
			<CustomScrollView
				refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
				}
			>
				<View style={styles.container}>
					<View style={styles.topSection}>
						<View
							style={{
								position: "relative"
							}}
						>
							<Image style={styles.profilePic} source={currentUser.image} />
							<CustomIconButton
								buttonProps={{
									style: {
										position: "absolute",
										bottom: -10,
										right: 25,
										backgroundColor: "rgba(255,255,255,0.9)",
										height: 50,
										width: 50,
										alignItems: "center",
										justifyContent: "center",
										borderRadius: 25
									}
								}}
								onPress={async () => {
									!followStatus ? await follow() : await unfollow()
									await refetchFollowStatus()
								}}
								icon={followIcon}
							/>
						</View>
						<Text style={styles.username} numberOfLines={1}>
							{`${currentUser.firstName} ${currentUser.lastName}`}
						</Text>
						<Text style={styles.userBio} numberOfLines={2}>
							{user.bio}
						</Text>
					</View>
					<Divider style={styles.divider} />
					<View style={styles.postList}>
						{doesUserHavePosts ? (
							userPosts.map((post) => <Post key={post.id} postContent={post} />)
						) : (
							<Text>No posts yet!</Text>
						)}
					</View>
				</View>
			</CustomScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: theme.color.light,
		minWidth: SCREEN_WIDTH,
		alignItems: "center"
	},
	topSection: {
		padding: 25,
		paddingVertical: 30,
		alignItems: "center",
		justifyContent: "center",
		minWidth: "80%"
	},
	profilePic: {
		width: 200,
		height: 200,
		borderRadius: 400 / 2,
		borderWidth: 2
	},
	username: {
		marginTop: 25,
		fontSize: 25,
		fontWeight: "bold",
		color: theme.text.secondary
	},
	userBio: {
		marginTop: 10,
		fontSize: 18,
		color: theme.text.secondary
	},
	divider: {
		width: "90%",
		height: 0.5,
		backgroundColor: "#000"
	},
	postList: {
		backgroundColor: theme.color.light,
		minHeight: "100%",
		width: SCREEN_WIDTH,
		paddingVertical: 25
	}
})

export default PostProfile
