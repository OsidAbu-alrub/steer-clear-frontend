import { useQuery } from "react-query"
import request from "../../axios"
import { PostContent } from "../../Components/Post/api"
import { useAuth } from "../../Context/Auth/useAuth"
import { getErrorMessage } from "../../utils/getErrorMessage"
import getValidImage from "../../utils/getValidImage"
import { showSnackbar } from "../../utils/showSnackbar"

const POSTS_FEED = `post/feed`

export const useFeed = () => {
	const { user } = useAuth()
	const {
		data: posts,
		isLoading,
		refetch: fetchPosts,
		error
	} = useQuery(
		["fetchPosts", user.id],
		async () => {
			try {
				const res = await request.get(`${POSTS_FEED}?userId=${user.id}`)
				const posts = res.data.data
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
			refetchOnWindowFocus: false,
			refetchOnMount: "always",
			enabled: !!user.id
		}
	)
	if (error) showSnackbar(error + "", "error")
	return { posts, isLoading, fetchPosts }
}
