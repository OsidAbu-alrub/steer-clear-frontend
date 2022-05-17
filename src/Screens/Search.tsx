import { StyleSheet, SafeAreaView, StatusBar } from "react-native"
import Header from "../Components/Search/Header"

function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <FlatList /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  }
})

export default Search
