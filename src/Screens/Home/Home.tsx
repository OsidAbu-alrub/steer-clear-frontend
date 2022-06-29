import {
	RefreshControl,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View
} from "react-native"
import AppHeader from "../../Components/AppHeader/AppHeader"
import Loader from "../../Components/Loader/Loader"
import Post from "../../Components/Post/Post"
import { useRefetchOnFocus } from "../../Hooks/useRefetchOnFocus"
import useRefresh from "../../Hooks/useRefresh"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import theme from "../../utils/theme"
import { useFeed } from "./api"

function Home() {
	const { posts, isLoading, fetchPosts } = useFeed()
	const [isRefreshing, handleRefresh] = useRefresh(fetchPosts)
	const isRefetching = useRefetchOnFocus(fetchPosts)
	const isThereFeed = posts && posts.length > 0

	if (isLoading || isRefetching)
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
					{isThereFeed
						? posts!.map((post) => <Post postContent={post} key={post.id} />)
						: null}
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

export default Home
