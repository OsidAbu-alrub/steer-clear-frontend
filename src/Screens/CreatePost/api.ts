import request from "../../axios"
import { PostContent } from "../../Components/Post/api"

export const useCreatePost = () => {
	const handleCreatePost = async (
		userId: string,
		postTitle: string,
		postBody: string
	) => {
		const res = await request.post(`post/create`, {
			userId,
			title: postTitle,
			body: postBody
		})
		return res.data.data as PostContent
	}

	return { handleCreatePost }
}
