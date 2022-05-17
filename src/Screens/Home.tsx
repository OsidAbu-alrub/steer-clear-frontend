import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import Header from "../Components/Home/Header"
import Post from "../Components/Home/Post"

export interface PostContent {
  userPic: string
  isLiked: boolean
  content: string
  likes: number
  id: string
}

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList<PostContent>
        data={feedPosts}
        renderItem={({ item: post }) => <Post postContent={post} />}
        keyExtractor={(post) => post.id}
        style={styles.flatList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#FDE8DB"
  },
  flatList: {
    padding: 5
  }
})

export default Home

const feedPosts: PostContent[] = [
  {
    id: "1",
    content: `hey, this is my first post!!! \ni want to talk about blah blah because blah blah blah !!!\nthanks!
    `,
    likes: 10,
    isLiked: true,
    userPic: ""
  },
  {
    id: "2",
    content: "kkk",
    likes: 20,
    isLiked: false,
    userPic: ""
  },
  {
    id: "3",
    content: "sss",
    likes: 30,
    isLiked: false,
    userPic: ""
  }
]
