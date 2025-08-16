import { StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const ProductScreen = ({route}) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={product.image} style={styles.image} />
        </View>
        <ScrollView style={styles.bottomContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.productInfoText}>{product.productText}</Text>
                <Text style={styles.productInfoText}>$ {product.productPrice}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productInfoText}>Color</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productInfoText}>Description</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productInfoText}>Reviews</Text>
            </View>
        </ScrollView>
         <TouchableOpacity style={styles.addToCart}>
                Add To Cart
        </TouchableOpacity>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    //borderColor:'red',
    //borderWidth: 2,
   },
   image: {
    width: '100%',
    height: 380,
    resizeMode: 'contain',
    borderRadius: 20,
    marginTop: 20,
   },
   imageContainer: {
    width: '100%',
    height: '50%',
    borderColor:'red',
    borderWidth: 2,
    backgroundColor:'#e3e0e7'
   },
    bottomContainer: {
     flex: 1,
     backgroundColor: 'black',
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     padding: 20,

    },
    textContainer: {   
        width: '100%',
        height: 100, 
        borderColor:'white',
        borderWidth: 2,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20

    },
    productInfoText:{
        color:'white',
        fontSize:15,
        fontWeight:'900',
    },
    addToCart:{
        backgroundColor:'gray'
    }
})