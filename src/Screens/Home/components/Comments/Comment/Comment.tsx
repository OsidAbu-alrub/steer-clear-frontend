import { FC } from "react"
import {View,Text,Image} from "react-native"
import styles from "./styles"
import { CommentContent } from "./../../../api"
import {useState} from "react";
import PlaceholderImage from "./../../../../../Assets/General/person-placeholder-image.jpeg"


interface Props {
  commentContent: CommentContent
}

const Comment: FC<Props> = ({commentContent}) => {

  const [comment, setComment] = useState<CommentContent>(commentContent)
 
  return (
    <View style={styles.container}>
          <Image style={styles.pic} source={PlaceholderImage} />
          <Text style={styles.body}>{`${comment.body}`}</Text>
    </View>
  )
}

export default Comment
