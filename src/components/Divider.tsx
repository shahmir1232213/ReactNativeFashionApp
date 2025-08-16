import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Prop {
    text:string
}
const Divider:React.Fc<Prop>  = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.text2}>Show all</Text>
    </View>
  )
}

export default Divider

const styles = StyleSheet.create({
    container:{
        height:50,
        width:"100%",
        //backgroundColor:'blue',
        //borderColor:'white',
        botderWidth:12,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:22,
        paddingRight:22,

    },
    text:{
        color:'black',
        fontSize:22,
        fontWeight:'bold'
    },
    text2:{
        color:'#9b9b9b',
        fontSize:14
    }
})