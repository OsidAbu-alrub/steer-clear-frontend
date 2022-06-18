import { View, FlatList, SafeAreaView } from "react-native"
import { PostContent, useFeed } from "./api"
import Header from "./components/Header/Header"
import Post from "./components/Post/Post"
import Holder from "./components/Comments/Holder/Holder"
import styles from "./styles"
import { useState } from "react"

function Home() {
  const { posts } = useFeed()
  const [showComment, setShowComment] = useState(false)
  return posts ? (
    <View style={styles.container}>
      <Header />
      <FlatList<PostContent>
        data={posts}
        renderItem={({ item: post }) => <Post postContent={post}/>}
        keyExtractor={(post) => post.id}
        style={styles.flatList}
      />
      {showComment && <Holder/>}
    </View>
  ) : (
    <></>
  )
}

export default Home
