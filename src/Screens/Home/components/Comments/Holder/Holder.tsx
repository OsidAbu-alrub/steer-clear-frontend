import { FC } from "react"
import { SafeAreaView, FlatList,View } from "react-native"
import styles from "./styles"
import AddComment from "./../AddComment/AddComment"
import Comment from "../Comment/Comment"

interface Props {}

const Holder: FC<Props> = ({}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMYDATA}
        renderItem={({ item: comment }) => <Comment commentContent={comment} />}
        keyExtractor={(comment) => comment.id}
        style={styles.flatlist}
        ListFooterComponent={<View style={{height: 20}}/>}
      />
      <AddComment />
    </View>
  )
}

export default Holder

const DUMMYDATA = [
  {
    id: "1",
    body: "First Comment",
  },
  {
    id: "2",
    body: "Second Comment",
  },
  {
    id: "3",
    body: "Third Comment",
  },
  {
    id: "4",
    body: "some Comment",
  }
]
