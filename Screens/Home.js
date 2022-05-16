import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  Button
} from "react-native";
import Header from "../Components/Home/Header";
import Post from "../Components/Home/Post";

function Home() {

  const renderItem = ({item}) => <Post content={item.content} likes={item.likes} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        data={feedPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#FDE8DB",
  },
  flatList: {
    padding: 5,
  },
});

export default Home;

const feedPosts = [
  {
    id: 1,
    content: `hey, this is my first post!!! \ni want to talk about blah blah because blah blah blah !!!\nthanks!
    `,
    likes:10
  },
  {
    id: 2,
    content: "kkk",
    likes:20
  },
  {
    id: 3,
    content: "sss",
    likes:30
  },
];
