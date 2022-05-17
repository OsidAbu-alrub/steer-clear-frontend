import { AntDesign, FontAwesome } from "@expo/vector-icons"
import { FC } from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { PostContent } from "../../Screens/Home/api"
import PlaceholderImage from "./../../Assets/General/person-placeholder-image.jpeg"

interface Props {
  postContent: PostContent
}

const Post: FC<Props> = ({ postContent }) => {
  // const [isLiked, setIsLiked] = useState(postContent.isLiked)
  // const [numberOfLikes, setNumberOfLikes] = useState<number>(postContent.likes)

  // useEffect(() => {
  //   setNumberOfLikes((numberOfLikes) =>
  //     isLiked ? numberOfLikes + 1 : numberOfLikes - 1
  //   )
  // }, [isLiked])

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.postUser}>
          <Image style={styles.topPic} source={PlaceholderImage} />
          <Text>{`${postContent.user.firstName} ${postContent.user.lastName}`}</Text>
        </View>
        <Text style={{ marginRight: 20 }}>...</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.content}>{postContent.body}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View>
          <Text>{13} Likes</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity
          // onPress={() => {
          //   setIsLiked((isLiked) => !isLiked)
          // }}
          >
            <AntDesign
              name="heart"
              style={styles.like}
              size={24}
              // color={isLiked ? "red" : "grey"}
            />
          </TouchableOpacity>
          <FontAwesome name="comment" size={24} color="grey" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginTop: 25,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 15,
    marginLeft: 15
  },
  topSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#DCD8D5",
    alignItems: "center",
    padding: 10
  },
  postUser: {
    flexDirection: "row",
    alignItems: "center"
  },
  topPic: {
    width: 35,
    height: 35,
    borderRadius: 30,
    margin: 5
  },
  middleSection: {
    marginVertical: 10,
    marginHorizontal: 15
  },
  content: {
    lineHeight: 20,
    paddingHorizontal: 5
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#DCD8D5",
    padding: 15
  },
  right: {
    flexDirection: "row"
  },
  like: {
    marginRight: 15,
    position: "relative",
    bottom: -1
  }
})

export default Post
