import { StyleSheet, Text, View,TouchableOpacity,useColorScheme } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

interface Props{
  onPress?:()=>void,
  text:string
}

const CartButton:React.FC<Props> = ({onPress,text}) => {
   const colorScheme = useColorScheme();
  return (
     <TouchableOpacity onPress={onPress} style={[styles.addToCart, colorScheme === 'dark' && { backgroundColor: '#43484b' }]}>
        <Ionicons name='bag-handle' size={25} color='white'/>
        <Text style={styles.addToCartText}>{text}</Text>
     </TouchableOpacity>
  )
}

export default CartButton

const styles = StyleSheet.create({
   addToCart:{
        backgroundColor:'#343434',
        width:'100%',
        height:60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:22
    },
    addToCartText:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },
})