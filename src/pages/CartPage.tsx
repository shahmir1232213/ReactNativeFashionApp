import { StyleSheet, Text, View, Image, Pressable, FlatList, useColorScheme } from 'react-native'
import { useSelector,useDispatch } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'
import { updateCart } from '../redux/slices/cartSlice'

const CartPage = () => {
  const cart = useSelector((state) => state.cart)
  console.log('cart: ',cart)
  const colorScheme = useColorScheme() // 'dark' | 'light'
  const dispatch = useDispatch()

  const isDark = colorScheme === 'dark'

  const containerStyle = [
    styles.container,
    { backgroundColor: isDark ? 'black' : 'white' }
  ]

  const textStyle = [
    styles.detailsText,
    { color: isDark ? 'white' : 'black' }
  ]

  return (
    <View style={containerStyle}>
      <FlatList 
        data={cart}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20, alignItems: 'center' }}
        ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.productDetails}>
              <Text style={textStyle}>{item.name}</Text>
              <Text style={[textStyle, { fontSize: 20,color:'white' }]}>$ {item.priceDisplay}</Text>
              <View style={styles.childDetail}>
                <View style={styles.pehelvan}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={[textStyle, { fontSize: 12 }]}>
                    color : {item.color}
                  </Text>
                  <Text style={[textStyle, { fontSize: 12 }]}> | Size: {item.size}</Text>
                </View>
                </View>
                <View style={styles.quantity}>
                  <Pressable onPress={() => {
                    const index = cart.findIndex(index => index.name === item.name)
                    dispatch(updateCart({index,functionality:'decrease'}))
                  //  console.log('cart minused: ',cart)
                    console.log('minus pressed')
                  }}>
                    <AntDesign name="minus" color={isDark ? 'white' : 'black'} size={15} />
                  </Pressable>
                  <Text style={[textStyle,{textAlign:'center',color:'#808080',fontWeight:'light'}]}>{item.quantity}</Text>
                  <Pressable onPress={() => {
                    console.log('plus pressed')
                    const index = cart.findIndex(index => index.name === item.name)
                    dispatch(updateCart({index,functionality:'increase'}))
                  }}>
                    <AntDesign name="plus" color={isDark ? 'white' : 'black'} size={15} />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  )
}

export default CartPage

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
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
  productDetails: {
  //  borderWidth: 2,
   // borderColor: 'blue',
    width: '65%',
    height: '100%',
    gap: 7,
    marginLeft: 20
  },
  detailsText: {
    color: 'white',
    fontWeight: 'bold'
  },
  childDetail: {
    //borderWidth: 2,
  //  borderColor: 'green',
    height: '35%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
   // gap: 20,
    alignItems:'center'
  },
  quantity: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#808080',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height:23,
    width:70,
    paddingLeft:4,
    paddingRight:4,
    backgroundColor:'transparent',
  //  alignSelf:'flex-end'
  },
  pehelvan:{
   // borderWidth: 2,
  //  borderColor: 'red',
  }
})
