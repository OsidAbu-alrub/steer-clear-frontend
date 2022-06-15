import { SafeAreaView } from "react-native"
import Form from "../../Components/CreatePost/Form"
import Header from "../../Components/CreatePost/Header"
import styles from "./styles"

export default function CreatePost() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form />
    </SafeAreaView>
  )
}
