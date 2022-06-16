import { ImageBackground, SafeAreaView, Text, View } from "react-native"
import { useAuth } from "../../Context/Auth/useAuth"
import Header from "../Home/components/Header/Header"
import styles from "./styles"

function Profile() {
  const { user } = useAuth()
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <ImageBackground
          style={styles.profilePic}
          source={{
            uri: user.image
          }}
        />
        <Text
          style={styles.username}
        >{`${user?.firstName} ${user?.lastName}`}</Text>
        <Text style={styles.username}>{user?.bio}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile
