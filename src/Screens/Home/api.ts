import { useQuery } from "react-query"
import axiosInstance from "../../axios"
import { useAuth } from "../../Context/Auth/useAuth"

const POSTS_FEED = `post/feed`
const POSTS_ALL = `post/all`

export interface PostContent {
  id: string
  createdBy: string
  createdOn: Date
  title: string
  body: string
  user: {
    id: string
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
    bio: string
  }
  // comments?: Comment[]
  // likes?: Like[]
}

export const useFeed = () => {
  const { user } = useAuth()
  const { data: posts, isLoading } = useQuery("fetchPosts", async () => {
    const res = await axiosInstance.get(`${POSTS_FEED}?userId=${user.id}`)
    const posts = res.data.data as PostContent[]
    return posts
  })
  return { posts, isLoading }
}
