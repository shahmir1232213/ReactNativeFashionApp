import { StyleSheet, Text, View, Image, Pressable, FlatList, useColorScheme } from 'react-native'
import { useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'

const CartPage = () => {
  const cart = useSelector((state) => state.cart)
  const colorScheme = useColorScheme() // 'dark' | 'light'

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
              <Text style={[textStyle, { fontSize: 20 }]}>$ 80</Text>
              <View style={styles.childDetail}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={[textStyle, { fontSize: 12 }]}>
                    color : {item.color}
                  </Text>
                  <Text style={[textStyle, { fontSize: 12 }]}> | Size: {item.size}</Text>
                </View>
                <View style={styles.quantity}>
                  <Pressable onPress={() => {
                    const index = cart.findIndex(index => index.name === item.name)
                    //console.log('minus pressed')
                    //console.log('product found: ',cart[index])
                    //cart[index].quantity

                  }}>
                    <AntDesign name="minus" color={isDark ? 'white' : 'black'} size={15} />
                  </Pressable>
                  <Text style={textStyle}>1</Text>
                  <Pressable onPress={() => console.log('plus pressed')}>
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
    flexDirection: 'row'
  },
  image: {
    width: '35%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
    backgroundColor: '#e4e1e8'
  },
  productDetails: {
    borderWidth: 2,
    borderColor: 'blue',
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
    borderWidth: 2,
    borderColor: 'green',
    height: '35%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
    alignItems:'center'
  },
  quantity: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height:23
  }
})
