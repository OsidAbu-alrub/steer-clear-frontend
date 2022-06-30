import {
	RefreshControl,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	View
} from "react-native"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CampaignCard from "../../Components/Campaign/CampaignCard"
import Loader from "../../Components/Loader/Loader"
import { useRefetchOnFocus } from "../../Hooks/useRefetchOnFocus"
import useRefresh from "../../Hooks/useRefresh"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import theme from "../../utils/theme"
import { useCampaigns } from "./api"

function CampaignPage() {
	const { campaigns, isFetchingCampaigns, refetchCampaigns } = useCampaigns()
	const [isRefreshing, handleRefresh] = useRefresh(refetchCampaigns)
	const isRefetching = useRefetchOnFocus(refetchCampaigns)
	const isThereCampaigns = campaigns && campaigns.length > 0

	if (isFetchingCampaigns || isRefetching || isRefreshing)
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
					{isThereCampaigns
						? campaigns.map((campaign) => (
								<CampaignCard campaign={campaign} key={campaign.id} />
								// eslint-disable-next-line no-mixed-spaces-and-tabs
						  ))
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

export default CampaignPage
