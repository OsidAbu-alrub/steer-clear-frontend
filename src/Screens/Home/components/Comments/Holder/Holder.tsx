import { FC } from "react"
import { FlatList, View } from "react-native"
import Comment from "../Comment/Comment"
import AddComment from "./../AddComment/AddComment"
import styles from "./styles"

interface Props {}

const Holder: FC<Props> = ({}) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={DUMMYDATA}
				renderItem={({ item: comment }) => <Comment commentContent={comment} />}
				keyExtractor={(comment) => comment.id}
				style={styles.flatlist}
				ListFooterComponent={<View style={{ height: 20 }} />}
			/>
			<AddComment />
		</View>
	)
}

export default Holder

const DUMMYDATA = [
	{
		id: "1",
		body: "First Comment"
	},
	{
		id: "2",
		body: "Second Comment"
	},
	{
		id: "3",
		body: "Third Comment"
	},
	{
		id: "4",
		body: "some Comment"
	}
]
