import { Ionicons } from "@expo/vector-icons"
import { FC } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../../Context/Auth/useAuth"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import theme from "../../utils/theme"
import CustomIconButton from "../CustomIconButton/CustomIconButton"
import { Campaign, useInviteFollowers } from "./api"

interface Props {
	campaign: Campaign
}

const CampaignCard: FC<Props> = ({ campaign }) => {
	const { user } = useAuth()
	const { navigate } = useAppNavigation()
	const { inviteFollowers, isInvitingFollowers } = useInviteFollowers(
		campaign.userId,
		campaign.id
	)
	const isPersonalProfile = campaign.userId === user.id

	return (
		<>
			<View style={styles.container}>
				<View style={styles.topSection}>
					<View>
						<TouchableOpacity
							style={styles.user}
							onPress={() =>
								!isPersonalProfile && navigate("PostProfile", campaign.user)
							}
							disabled={isInvitingFollowers}
						>
							<Image style={styles.topPic} source={campaign.user.image} />
							<Text
								style={{
									fontWeight: "bold",
									textDecorationLine: "underline",
									color: theme.text.secondary
								}}
							>{`${campaign.user.firstName} ${campaign.user.lastName}`}</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.middleSection}>
					<Text
						style={[styles.title, { color: theme.text.secondary }]}
						numberOfLines={1}
					>
						{campaign.title}
					</Text>
				</View>
				<View style={styles.middleSection}>
					<Text style={styles.content}>{campaign.body}</Text>
				</View>
				<View style={styles.bottomSection}>
					<View style={styles.right}>
						{isPersonalProfile ? (
							<CustomIconButton
								icon={<Ionicons name="share" size={30} color="grey" />}
								buttonProps={{
									style: { marginLeft: "auto" }
								}}
								onPress={async () => {
									await inviteFollowers()
								}}
							/>
						) : (
							<></>
						)}
					</View>
				</View>
			</View>
		</>
	)
}

export default CampaignCard

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
	user: {
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
		paddingRight: 10,
		flex: 1
	}
})
