import { FC } from "react"
import {View,Image,TextInput} from "react-native"
import styles from "./styles"
import PlaceholderImage from "./../../../../../Assets/General/person-placeholder-image.jpeg"


interface Props {
}

const AddComment: FC<Props> = ({  }) => {
 
  return (
    <View style={styles.container} >
          <Image style={styles.pic} source={PlaceholderImage} />
          <TextInput style={styles.input} placeholder="add comment..."></TextInput>
    </View>
  )
}

export default AddComment
