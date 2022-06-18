import { ImageBackground, SafeAreaView, Text, View } from "react-native"
import { useAuth } from "../../Context/Auth/useAuth"
import Header from "../Home/components/Header/Header"
import styles from "./styles"
import { useRoute } from "@react-navigation/native"


const Profile =({}) => {
  const { user } = useAuth()
  const  test  =useRoute<any>().params;
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
        >{`${test.id} ${user?.lastName}`}</Text>
        <Text style={styles.username}>{user?.bio}</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile