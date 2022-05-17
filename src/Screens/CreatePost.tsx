import { StyleSheet, StatusBar, SafeAreaView } from "react-native"
import Form from "../Components/CreatePost/Form"
import Header from "../Components/CreatePost/Header"

export default function CreatePost() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Form />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#FDE8DB"
  }
})
