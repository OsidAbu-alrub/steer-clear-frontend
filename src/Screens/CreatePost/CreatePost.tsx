import { SafeAreaView } from "react-native"
import Form from "./Components/Form/Form"
import Header from "./Components/Header/Header"
import styles from "./styles"

export default function CreatePost() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form />
    </SafeAreaView>
  )
}
