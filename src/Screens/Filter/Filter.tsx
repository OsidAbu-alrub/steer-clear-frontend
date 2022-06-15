import { SafeAreaView } from "react-native"
import Header from "../../Components/Search/Header"
import styles from "./styles"

function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {/* <FlatList /> */}
    </SafeAreaView>
  )
}

export default Search
