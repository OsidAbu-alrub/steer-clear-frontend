import { useQuery } from "react-query"
import request from "../../axios"
import { Campaign, User } from "../../Components/Campaign/api"
import { useAuth } from "../../Context/Auth/useAuth"
import { getErrorMessage } from "../../utils/getErrorMessage"
import getValidImage from "../../utils/getValidImage"
import { showSnackbar } from "../../utils/showSnackbar"

export interface Invitation {
	id: string
	inviteeId: string
	campaignId: string
	inviter: User
	campaign: Campaign
}

export const useInvitations = () => {
	const { user } = useAuth()

	const {
		data,
		isLoading,
		refetch: refetchNotifications
	} = useQuery("fetchUserInvitations", async () => {
		try {
			const res = await request.get(`campaign/${user.id}`)
			const notifications = res.data.data ? res.data.data : []
			return notifications.map((n: any) => ({
				...n,
				inviter: {
					...n.inviter,
					image: getValidImage(n.inviter.image)
				}
			})) as Invitation[]
		} catch (e: any) {
			showSnackbar(getErrorMessage(e), "error")
			return []
		}
	})

	return {
		notifications: data,
		isFetchingNotifications: isLoading,
		refetchNotifications
	}
}
