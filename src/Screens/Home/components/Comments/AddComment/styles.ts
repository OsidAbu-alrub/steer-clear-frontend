import {StyleSheet } from "react-native"
import { grey100 } from "react-native-paper/lib/typescript/styles/colors"

const styles = StyleSheet.create({

    container:{
       display:"flex",
       flexDirection:"row",
       marginBottom:5,
       borderTopWidth:1,
       borderColor:"grey",
       paddingTop:10
    },
    pic:{
        width: 35,
        height: 35,
        borderRadius: 30,
        margin: 5
    },
    input:{
        borderWidth:1,
        borderColor:"#cfcdcc",
        width:245,
        borderRadius:15,
        paddingLeft:10,
        backgroundColor:"white"
    }
})

export default styles
