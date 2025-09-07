import { StyleSheet, Text, View, Image, Pressable, FlatList, useColorScheme, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialDesignIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import CheckOutButton from '../components/Buttons/CheckOutButton'
import ProductDetails from '../components/CartPage/ProductDetails'
import CartList from '../components/CartPage/CartList'

const CartPage = () => {
  const cart = useSelector((state) => state.cart.items)
  const colorScheme = useColorScheme() // 'dark' | 'light'
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const isDark = colorScheme === 'dark'

  const containerStyle = [
    styles.container,
    { backgroundColor: isDark ? '#141416' : 'white' }
  ]

  const textStyle = [
    styles.detailsText,
    { color: isDark ? 'white' : 'black' }
  ]

  return (
    <View style={containerStyle}>
      {/* Fixed bottom button */
        cart.length > 0 ?
          <>
           <CartList cart={cart} />
            <View style={{ position: 'absolute', bottom: 20, left: 0, right: 0, alignItems: 'center' }}>
              <CheckOutButton handleFunc={() => navigation.navigate('Checkout')} text="Proceed to Checkout" />
            </View>
          </>
          :
          <>
            <MaterialDesignIcons name='cart-off' size={120} color={isDark ? 'white' : 'black'} style={{ alignSelf: 'center', marginTop: 100 }} />
            <Text style={{ color: isDark ? 'white' : 'black', fontSize: 23 }}>Empty Cart</Text>
          </>
      }
    </View>
  )
}

export default CartPage

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    paddingBottom: 23,
    flex: 1,
    backgroundColor: 'black', // default dark
    alignItems: 'center'
  },
  product: {
    width: '87%',
    height: 100,
    borderRadius: 20,
    flexDirection: 'row',
    //  borderWidth: 2,
    //  borderColor: '#808080',
  },
  image: {
    width: '35%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
    backgroundColor: '#e7e8e9'
  },
 
})
