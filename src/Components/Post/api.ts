import { ImageSourcePropType } from "react-native"
import { useMutation, useQuery } from "react-query"
import request from "../../axios"
import { useAuth } from "../../Context/Auth/useAuth"
import getValidImage from "../../utils/getValidImage"

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

interface Like {
	id: string
	userId: string
	postId: string
	likedAt: Date
}

export interface PostContent {
	isLiked: boolean
	userId: string
	id: string
	createdBy: string
	createdOn: Date
	title: string
	body: string
	user: User
	likes: Like[]
}

export interface CommentContent {
	id: string
	userId: string
	postId: string
	body: string
	createdOn: Date
	user: User
}

export const useLike = (postId: string) => {
	const { user } = useAuth()
	const { mutateAsync: likePost, isLoading } = useMutation(async () => {
		const res = await request.post(`post/like`, { postId, userId: user.id })
		return res.data.data as boolean
	})

	const { refetch: refetchPost } = useQuery(
		["refetchPost", user.id, postId],
		async () => {
			const res = await request.get(
				`post/find?userId=${user.id}&postId=${postId}`
			)
			return res.data.data as PostContent
		},
		{
			enabled: false
		}
	)

	const handleLike = async () => {
		await likePost()
		return await refetchPost()
	}

	return { handleLike, isLoading }
}

export const useFetchPostComments = (postId: string) => {
	const {
		data: comments,
		isLoading,
		refetch: refetchComments
	} = useQuery(["fetchPostComments", postId], async () => {
		const res = await request.post(`comment/retrieve`, {
			postId
		})
		return res.data.data.map((comment: any) => ({
			...comment,
			user: {
				...comment.user,
				image: getValidImage(comment.user.image)
			}
		})) as CommentContent[]
	})

	const handleAddComment = async (
		userId: string,
		postId: string,
		comment: string
	) => {
		await request.post(`comment/create`, {
			userId,
			postId,
			body: comment
		})

		await refetchComments()
	}
	return { comments, isLoading, handleAddComment }
}
