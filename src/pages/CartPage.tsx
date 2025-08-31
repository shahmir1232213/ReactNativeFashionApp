import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import { useSelector } from 'react-redux'
import React from 'react'

const CartPage = () => {
  const cart = useSelector((state)=>state.cart)
  console.log('cart: ',cart)
  return (
    <View style={styles.container}>
      {
        cart.map((product)=>(
          <View style={styles.product}>
            <Image source={product.image} style={styles.image}/>
            <View style={styles.productDetails}>
              <Text style={styles.detailsText}>{product.name}</Text>
              <Text style={[styles.detailsText,{fontSize:23}]}>80$</Text>
             <View style={styles.childDetail}>
                <Text style={[styles.detailsText,{fontSize:12}]}>
                  color :{product.color}
                </Text> 
                <Text style={[styles.detailsText,{fontSize:12}] }> | Size:{product.size}</Text>
                <Pressable>
                  <Text style={styles.detailsText} >-</Text>
                </Pressable>
                <Text style={styles.detailsText}>1</Text>
                <Pressable>
                  <Text style={styles.detailsText} >+</Text>
                </Pressable>
             </View>
            </View>
          </View>  
        ))
      }
    </View>
  )
}

export default CartPage

const styles = StyleSheet.create({
  container:{
    paddingTop:23,
    width:'100%',
    height:'100%',
    backgroundColor:'black',
    //padding:2,
    flexDirection:'row',
    flexWrap:'wrap',
    gap:18,
    justifyContent:'center'
  },
  product:{
   // borderColor:'red',
  //  borderWidth:2,
    width:'87%',
    height:'14%',
    borderRadius:20,
    flexDirection:"row"
  },
  image:{
  //  borderWidth:2,
 //   borderColor:'yellow',
    width:'35%',
    height:'100%',
    resizeMode: "contain", // fills container while keeping aspect ratio
    borderRadius: 20,
    backgroundColor:'#e4e1e8'
    
  },
  productDetails:{
    borderWidth:2,
    borderColor:'blue',
    width:'65%',
    height:'100%',
    gap:7,
      marginLeft:20,
  },
  detailsText:{
  //  borderWidth:2,
  //  borderColor:'pink',
    color:'white'
  },
  childDetail:{
   // borderWidth:2,
   // borderColor:'green',

    height:'25%',
    width:'100%',
    flexDirection:'row'
  }
})