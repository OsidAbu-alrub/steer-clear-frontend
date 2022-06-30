import { useQuery } from "react-query"
import request from "../../axios"
import { Campaign } from "../../Components/Campaign/api"
import { useAuth } from "../../Context/Auth/useAuth"
import { getErrorMessage } from "../../utils/getErrorMessage"
import getValidImage from "../../utils/getValidImage"
import { randomize } from "../../utils/randomize"
import { showSnackbar } from "../../utils/showSnackbar"

export const useCampaigns = () => {
	const { user } = useAuth()
	const {
		data: campaigns,
		isLoading: isFetchingCampaigns,
		refetch: refetchCampaigns
	} = useQuery(["fetchCampaigns", user.id], async () => {
		try {
			const res = await request.post("campaign/retrieve", {
				include: {
					user: true
				}
			})
			const campaigns = res.data.data
				.filter((c: any) => c.userId !== user.id)
				.map((c: any) => {
					return {
						...c,
						user: {
							...c.user,
							image: getValidImage(c.user.image)
						}
					}
				}) as Campaign[]
			return randomize(campaigns) as Campaign[]
		} catch (e: any) {
			showSnackbar(getErrorMessage(e), "error")
			return []
		}
	})

	return { campaigns, refetchCampaigns, isFetchingCampaigns }
}
