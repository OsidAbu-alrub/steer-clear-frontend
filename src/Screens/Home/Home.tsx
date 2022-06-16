import { FlatList, SafeAreaView } from "react-native"
import { PostContent, useFeed } from "./api"
import Header from "./components/Header/Header"
import Post from "./components/Post/Post"
import styles from "./styles"

function Home() {
  const { posts } = useFeed()
  return posts ? (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList<PostContent>
        data={posts}
        renderItem={({ item: post }) => <Post postContent={post} />}
        keyExtractor={(post) => post.id}
        style={styles.flatList}
      />
    </SafeAreaView>
  ) : (
    <></>
  )
}

export default Home
