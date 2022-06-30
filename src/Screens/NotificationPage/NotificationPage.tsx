import {
	RefreshControl,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	View
} from "react-native"
import AppHeader from "../../Components/AppHeader/AppHeader"
import Loader from "../../Components/Loader/Loader"
import { useRefetchOnFocus } from "../../Hooks/useRefetchOnFocus"
import useRefresh from "../../Hooks/useRefresh"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import theme from "../../utils/theme"
import { useInvitations } from "./api"
import Notification from "./Notification"

function NotificationPage() {
	const { isFetchingNotifications, notifications, refetchNotifications } =
		useInvitations()
	const [isRefreshing, handleRefresh] = useRefresh(refetchNotifications)
	const isRefetching = useRefetchOnFocus(refetchNotifications)
	const isThereNotifications = notifications && notifications.length > 0

	if (isFetchingNotifications || isRefetching)
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
			<SafeAreaView style={styles.container}>
				<ScrollView
					refreshControl={
						<RefreshControl
							refreshing={isRefreshing}
							onRefresh={handleRefresh}
						/>
					}
					style={styles.flatList}
				>
					{isThereNotifications ? (
						<View>
							{notifications.map((notification) => (
								<Notification
									notification={notification}
									key={notification.id}
								/>
							))}
						</View>
					) : (
						<Text style={{ textAlign: "center" }}>No notifications!</Text>
					)}
				</ScrollView>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.color.light
	},
	flatList: {
		padding: 5
	}
})

export default NotificationPage
