import { Image, SafeAreaView, Text, View } from "react-native"
import Header from "../../Components/Home/Header"
import { useAuth } from "../../Context/Auth/useAuth"
import PlaceholderImage from "../Assets/General/person-placeholder-image.jpeg"
import styles from "./styles"

function Profile() {
  const { user } = useAuth()
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.mainContent}>
        <Image style={styles.profilePic} source={PlaceholderImage} />
        <Text
          style={styles.username}
        >{`${user?.firstName} ${user?.lastName}`}</Text>
        <Text style={styles.username}>{user?.bio}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile
