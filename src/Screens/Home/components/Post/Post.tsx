import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { FC, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { PostContent, useLike } from "../../api"
import PlaceholderImage from "./../../../../Assets/General/person-placeholder-image.jpeg"
import styles from "./styles"

interface Props {
  postContent: PostContent
}

const Post: FC<Props> = ({ postContent }) => {
  const { handleLike } = useLike(postContent.id)
  const [post, setPost] = useState<PostContent>(postContent)
  const [isLiked, setIsLiked] = useState<boolean>(postContent.isLiked)
  const [numberOfLikes, setNumberOfLikes] = useState<number>(
    postContent.likes.length
  )
  const isOneLike = numberOfLikes === 1

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.postUser}>
          <Image style={styles.topPic} source={PlaceholderImage} />
          <Text>{`${post.user.firstName} ${post.user.lastName}`}</Text>
        </View>
        <Text style={{ marginRight: 20 }}>...</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.content}>{post.body}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <Text>
            {numberOfLikes || "No"} Like{!isOneLike && "s"}
          </Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            onPress={async () => {
              setIsLiked((isLiked) => {
                setNumberOfLikes((numberOfLikes) =>
                  isLiked ? numberOfLikes - 1 : numberOfLikes + 1
                )
                return !isLiked
              })
              const { data } = await handleLike()
              setPost(data as PostContent)
            }}
          >
            <AntDesign
              name="heart"
              style={styles.like}
              size={24}
              color={isLiked ? "red" : "grey"}
            />
          </TouchableOpacity>
          <FontAwesome name="comment" size={24} color="grey" />
        </View>
      </View>
    </View>
  )
}

export default Post
