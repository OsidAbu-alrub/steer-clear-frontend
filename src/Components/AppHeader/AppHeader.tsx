import { FC, ReactNode } from "react"
import {
	Image,
	SafeAreaView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import { IS_ANDROID, STATUS_BAR_HEIGHT } from "../../utils/constants"
import theme from "../../utils/theme"
import PostImage from "./../../Assets/post.png"
import SearchImage from "./../../Assets/search.png"

interface Action {
	id: string
	action: ReactNode
}

interface Props {
	actions?: (defaultActions: Action[]) => Action[]
	reverseTitleAndActions?: boolean
}
const AppHeader: FC<Props> = (props) => {
	const defaultActions = [
		{
			id: "Search",
			action: (
				<TouchableOpacity onPress={() => navigate("Search")}>
					<Image style={styles.searchIcon} source={SearchImage} />
				</TouchableOpacity>
			)
		},
		{
			id: "Create post",
			action: (
				<TouchableOpacity onPress={() => navigate("CreatePost")}>
					<Image style={styles.postIcon} source={PostImage} />
				</TouchableOpacity>
			)
		}
	]

	const actions = (props?.actions?.(defaultActions) ?? defaultActions).map(
		({ action, id }) => (
			<View style={{ marginHorizontal: 10 }} key={id}>
				{action}
			</View>
		)
	)
	const { navigate } = useAppNavigation()
	return (
		<>
			<View
				style={{
					backgroundColor: theme.color.main,
					marginTop: STATUS_BAR_HEIGHT
				}}
			>
				<SafeAreaView>
					<StatusBar translucent backgroundColor={theme.color.main} />
				</SafeAreaView>
			</View>
			<View
				style={[
					styles.container,
					props.reverseTitleAndActions && styles.reverseTitleAndActions
				]}
			>
				<Text
					style={[
						styles.appName,
						props.reverseTitleAndActions
							? { marginRight: 10 }
							: { marginLeft: 10 }
					]}
				>
					SteerClear
				</Text>
				<View style={styles.iconContainer}>{actions}</View>
			</View>
		</>
	)
}

export default AppHeader

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: theme.color.main,
		paddingHorizontal: 15,
		paddingTop: IS_ANDROID ? 10 : 0,
		paddingBottom: 15
	},
	reverseTitleAndActions: {
		flexDirection: "row-reverse"
	},
	appName: {
		color: theme.text.main,
		fontSize: 27,
		fontWeight: "bold"
	},
	iconContainer: {
		flexDirection: "row",
		alignItems: "center"
	},
	postIcon: {
		width: 27,
		height: 27
	},
	searchIcon: {
		width: 27,
		height: 27
	}
})
