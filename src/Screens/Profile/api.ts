import { useQuery } from "react-query"
import request from "../../axios"
import { PostContent } from "../../Components/Post/api"
import { useAuth } from "../../Context/Auth/useAuth"
import { getErrorMessage } from "../../utils/getErrorMessage"
import getValidImage from "../../utils/getValidImage"
import { showSnackbar } from "../../utils/showSnackbar"

export const useUserPosts = (postUserId: string) => {
	const { user } = useAuth()
	const {
		data,
		isLoading,
		error,
		refetch: refetchUserPosts
	} = useQuery(
		["fetchUserPosts", postUserId, user.id],
		async () => {
			try {
				const response = await request.get(
					`post/personal-posts?userId=${user.id}&postUserId=${
						user.id !== postUserId ? `${postUserId}` : ""
					}`
				)
				const posts = response.data.data
				return posts.map((post: any) => {
					return {
						...post,
						user: {
							...post.user,
							image: getValidImage(post.user.image)
						},
						likes: post.likes.map((like: any) => ({
							...like,
							likedAt: new Date(like.likedAt)
						}))
					}
				}) as PostContent[]
			} catch (e: any) {
				throw getErrorMessage(e)
			}
		},
		{
			enabled: !!postUserId && !!user.id
		}
	)

	if (error) showSnackbar(error + "", "error")

	return { isFetchingPosts: isLoading, userPosts: data, refetchUserPosts }
}
