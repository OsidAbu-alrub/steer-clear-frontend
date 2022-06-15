import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import Header from "../../Components/Home/Header"
import Post from "../../Components/Home/Post"
import { useFeed, PostContent } from "./api"

function Home() {
  const { posts, isLoading } = useFeed()
  return !isLoading && posts ? (
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
