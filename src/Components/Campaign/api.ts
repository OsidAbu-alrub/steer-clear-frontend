import { ImageSourcePropType } from "react-native"
import { useQuery } from "react-query"
import request from "../../axios"
import { getErrorMessage } from "../../utils/getErrorMessage"
import { showSnackbar } from "../../utils/showSnackbar"

export interface User {
	id: string
	firstName: string
	lastName: string
	phoneNumber: string
	email: string
	password: string
	bio: string
	image: ImageSourcePropType
}

// export interface Invitation {
// 	id: string
// 	inviteeId: string
// 	campaignId: string
// 	invitee?: User
// 	campaign?: Campaign
// }

export interface Campaign {
	id: string
	userId: string
	title: string
	body: string
	createdOn: Date
	user: User
}

export const useInviteFollowers = (inviterId: string, campaignId: string) => {
	const { isLoading: isInvitingFollowers, refetch: inviteFollowers } = useQuery(
		"inviteFollowers",
		async () => {
			try {
				const res = await request.post("campaign/invite-followers", {
					inviterId,
					campaignId
				})
				showSnackbar(`${res.data.data} followers invited`, "success")
				return res.data.data as number
			} catch (e: any) {
				showSnackbar(getErrorMessage(e))
				return -1
			}
		},
		{ enabled: false }
	)

	return { inviteFollowers, isInvitingFollowers }
}
