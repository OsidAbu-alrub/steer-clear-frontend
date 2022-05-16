import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Header from "../Components/CreatePost/Header";

export default function Add_Product() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#FDE8DB",
  },
});
