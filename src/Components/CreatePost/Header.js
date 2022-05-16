import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>SteerClear</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Bottom_Tab");
        }}
      >
        <Image
          style={styles.postIcon}
          source={require("../../assets/Create_Post/back.png")}
        />
      </TouchableOpacity>
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
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  appName: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
  },
  postIcon: {
    width: 27,
    height: 27,
  },
});

export default Header;
