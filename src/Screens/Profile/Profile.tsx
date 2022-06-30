import { FontAwesome, FontAwesome5 } from "@expo/vector-icons"
import { FC, useState } from "react"
import { Image, RefreshControl, StyleSheet, Text, View } from "react-native"
import { ActivityIndicator, Divider } from "react-native-paper"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CustomIconButton from "../../Components/CustomIconButton/CustomIconButton"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import Loader from "../../Components/Loader/Loader"
import Post from "../../Components/Post/Post"
import { useAuth } from "../../Context/Auth/useAuth"
import { useImagePicker } from "../../Hooks/useImagePicker"
import { useRefetchOnFocus } from "../../Hooks/useRefetchOnFocus"
import useRefresh from "../../Hooks/useRefresh"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import theme from "../../utils/theme"
import { useUserCampaigns, useUserPosts } from "./api"
import { AntDesign } from "@expo/vector-icons"
import { showSnackbar } from "../../utils/showSnackbar"
import CampaignCard from "../../Components/Campaign/CampaignCard"

interface Props {}

const Profile: FC<Props> = () => {
	const { user, logout, refetchUser } = useAuth()
	const [isViewingPosts, setIsViewingPosts] = useState(true)
	const { uploadImage, isUploading } = useImagePicker({
		userId: user.id,
		uploadUrl: "user/upload-image"
	})
	const { userPosts, isFetchingPosts, refetchUserPosts } = useUserPosts(user.id)
	const { campaigns, isFetchingCampaigns, refetchUserCampaings } =
		useUserCampaigns(user.id)
	const isRefetchingUserPosts = useRefetchOnFocus(refetchUserPosts)
	const isRefetchingUserCampaigns = useRefetchOnFocus(refetchUserCampaings)
	const [isRefreshing, handleRefresh] = useRefresh(async () => {
		await refetchUser()
		await refetchUserPosts()
		await refetchUserCampaings()
	})
	const doesUserHavePosts = userPosts && userPosts.length > 0
	const doesUserHaveCampaigns = campaigns && campaigns.length > 0

	if (
		isFetchingPosts ||
		isRefetchingUserPosts ||
		isFetchingCampaigns ||
		isRefetchingUserCampaigns
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

	return (
		<>
			<AppHeader />
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
							{!isUploading ? (
								<Image style={styles.profilePic} source={user.image} />
							) : (
								<ActivityIndicator style={styles.profilePic} color="black" />
							)}
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
									await uploadImage()
								}}
								icon={
									<FontAwesome
										name="camera"
										size={24}
										color={theme.color.main}
									/>
								}
							/>
						</View>
						<Text style={styles.username} numberOfLines={1}>
							{`${user.firstName} ${user.lastName}`}
						</Text>
						<Text style={styles.userBio} numberOfLines={2}>
							{user.bio}
						</Text>
						<View style={styles.actionsContainer}>
							<CustomIconButton
								icon={
									<FontAwesome5
										name="door-open"
										size={24}
										color={theme.color.main}
									/>
								}
								buttonProps={{
									style: {
										backgroundColor: "rgba(255,255,255,0.7)",
										marginRight: 15
									}
								}}
								onPress={async () => await logout()}
							/>
							<CustomIconButton
								icon={
									<FontAwesome5
										name="user-edit"
										size={24}
										color={theme.color.main}
									/>
								}
								buttonProps={{
									style: {
										backgroundColor: "rgba(255,255,255,0.7)",
										marginHorizontal: 15
									}
								}}
								onPress={async () => {
									showSnackbar("Coming soon!", "info")
								}}
							/>
							<CustomIconButton
								icon={
									<AntDesign name="swap" size={30} color={theme.color.main} />
								}
								buttonProps={{
									style: {
										backgroundColor: "rgba(255,255,255,0.7)",
										marginLeft: 15
									}
								}}
								onPress={async () => {
									setIsViewingPosts((prev) => {
										showSnackbar(
											!prev ? "Viewing posts" : "Viewing campaigns",
											"info"
										)
										return !prev
									})
								}}
							/>
						</View>
					</View>
					<Divider style={styles.divider} />
					<View style={styles.postList}>
						{isUploading ? (
							<ActivityIndicator color="black" size="large" />
						) : isViewingPosts ? (
							<>
								{doesUserHavePosts ? (
									userPosts.map((post) => (
										<Post key={post.id} postContent={post} />
									))
								) : (
									<Text style={{ textAlign: "center" }}>No posts yet!</Text>
								)}
							</>
						) : (
							<>
								{doesUserHaveCampaigns ? (
									campaigns.map((c) => <CampaignCard key={c.id} campaign={c} />)
								) : (
									<Text style={{ textAlign: "center" }}>No campaigns yet!</Text>
								)}
							</>
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
	actionsContainer: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		marginTop: 25
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

export default Profile
