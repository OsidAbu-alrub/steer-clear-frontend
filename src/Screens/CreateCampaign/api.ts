import request from "../../axios"
import { Campaign } from "../../Components/Campaign/api"
import { getErrorMessage } from "../../utils/getErrorMessage"
import { showSnackbar } from "../../utils/showSnackbar"

export const useCreateCampaign = () => {
	const handleCreateCampaign = async (
		userId: string,
		campaignTitle: string,
		campaignBody: string
	) => {
		try {
			const res = await request.post(`campaign/create`, {
				userId,
				title: campaignTitle,
				body: campaignBody
			})
			return res.data.data as Campaign
		} catch (e: any) {
			showSnackbar(getErrorMessage(e))
		}
	}

	return { handleCreateCampaign }
}
