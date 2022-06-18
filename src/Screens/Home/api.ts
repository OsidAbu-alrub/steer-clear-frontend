import { useMutation, useQuery } from "react-query"
import request from "../../axios"
import { useAuth } from "../../Context/Auth/useAuth"

const POSTS_FEED = `post/feed`

export interface User {
  id: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
  bio: string
}
export interface Comment {
  user: User
  postId: string
  body: string
  createdOn: Date
}
export interface Like {
  user: User
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
  comments: Comment[]
  likes: Like[]
}

export interface CommentContent {
  id: string
  body: string
}

export const useFeed = () => {
  const { user } = useAuth()
  const { data: posts } = useQuery("fetchPosts", async () => {
    const res = await request.get(`${POSTS_FEED}?userId=${user.id}`)
    const posts = res.data.data as PostContent[]
    return posts
  })

  return { posts }
}

export const useLike = (postId: string) => {
  const { user } = useAuth()
  const { mutateAsync: likePost } = useMutation(async () => {
    const res = await request.post(`post/like`, { postId, userId: user.id })
    return res.data.data as boolean
  })

  const { refetch: refetchPost } = useQuery(
    "refetchPost",
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

  return { handleLike }
}
