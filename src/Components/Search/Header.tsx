import { View, StyleSheet, Image, TextInput } from "react-native"
import Search from "./../../Assets/Search/searchBlack.png"

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image style={styles.icon} source={Search} />
        <TextInput placeholder="Search..." style={{ marginLeft: 9, flex: 1 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F29765",
    padding: 16
  },
  searchContainer: {
    backgroundColor: "white",
    padding: 5,
    width: 320,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 5
  }
})

export default Header
