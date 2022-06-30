import { FC } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import theme from "../../utils/theme"
import { Invitation } from "./api"

interface Props {
	notification: Invitation
}

const Notification: FC<Props> = ({ notification }) => {
	const { navigate } = useAppNavigation()

	return (
		<>
			<View style={styles.container}>
				<View style={styles.topSection}>
					<View>
						<TouchableOpacity
							style={styles.user}
							onPress={() => navigate("PostProfile", notification.inviter)}
						>
							<Image
								style={styles.topPic}
								source={notification.inviter.image}
							/>
							<Text
								style={{
									fontWeight: "bold",
									textDecorationLine: "underline",
									color: theme.text.secondary
								}}
								numberOfLines={1}
							>
								{`${notification.inviter.firstName} ${notification.inviter.lastName}`}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.middleSection}>
					<Text style={[styles.title, { color: theme.text.secondary }]}>
						You have been invited to{" "}
						<Text style={{ fontWeight: "bold" }}>
							{notification.campaign.title}
						</Text>{" "}
						by{" "}
						<Text style={{ fontWeight: "bold" }}>
							{`${notification.inviter.firstName} ${notification.inviter.lastName}`}
						</Text>
					</Text>
				</View>
			</View>
		</>
	)
}

export default Notification

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
		marginHorizontal: 15,
		paddingVertical: 15
	},
	title: {
		paddingHorizontal: 5,
		fontSize: 18
	}
})
