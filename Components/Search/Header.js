import { View, StyleSheet, Image, TextInput } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/Search/search.png")}
        />
        <TextInput placeholder="Search..." style={{ marginLeft: 9, flex: 1 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
    backgroundColor: "#F29765",
    padding: 16,
    },
  searchContainer: {
    backgroundColor: "white",
    padding: 5,
    width: 320,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft:5
  },
});

export default Header;
