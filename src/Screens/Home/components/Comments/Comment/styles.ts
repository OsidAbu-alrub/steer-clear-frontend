import { StatusBar, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    marginBottom:25,
    paddingVertical:10,
    backgroundColor:"#e1e2e3",
    borderRadius:10

  },
  pic: {
    width: 35,
    height: 35,
    borderRadius: 30,
    margin: 5
  },
  body:{
    alignSelf:"center",
    backgroundColor:"grey",
    padding:10,
    width:290,
    borderRadius:10
  }
})

export default styles
