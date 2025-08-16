import { StyleSheet, Text, View,ScrollView } from 'react-native'
import Notification from 'react-native-vector-icons/FontAwesome'
import React from 'react'

interface Prop {
    text:string
}

const Header:React.Fc<Prop> = ({text}) => {
  return (
       <View style={styles.heading}>
          <Text style={styles.header}>{text}</Text>
          <Notification name='bell' color='black' size={23}/>
        </View>   
  )
}

export default Header

const styles = StyleSheet.create({
    heading:{
        //borderColor:'red',
        //borderWidth:2,
        width:'100%',
        height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:'40%',
        paddingRight:24
    },
    header:{
        color:'black',
        fontSize:23,
        fontWeight:'bold'
    }
})