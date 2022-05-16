import { View, StyleSheet, Image, Text } from "react-native";

function Post(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.postUser}>
          <Image
            style={styles.topPic}
            source={require("../../assets/tempPic.jpg")}
          />
          <Text style={styles.postUsername}>Sawsan Hawwash</Text>
        </View>
        <Text style={{ marginRight: 20 }}>...</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.content}>{props.content}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.left}>
          <Text>{props.likes}likes</Text>
        </View>
        <View style={styles.right}>
          <Image
            style={styles.like}
            source={require("../../assets/Post/like.png")}
          />
          <Image
            style={styles.comment}
            source={require("../../assets/Post/comment.png")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
    backgroundColor: "white",
    borderRadius: 20,
  },
  topSection: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#DCD8D5",
    alignItems: "center",
  },
  postUser: {
    flexDirection: "row",
    alignItems: "center",
  },
  topPic: {
    width: 35,
    height: 35,
    borderRadius: 30,
    margin: 5,
  },
  middleSection: {
    marginVertical: 15,
  },
  content: {
    marginTop: 10,
    lineHeight: 20,
    paddingHorizontal: 5,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderColor: "#DCD8D5",
    paddingVertical: 10,
    paddingHorizontal: 13,
  },
  right: {
    flexDirection: "row",
  },
  like: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  comment: {
    width: 20,
    height: 20,
  },
});

export default Post;
