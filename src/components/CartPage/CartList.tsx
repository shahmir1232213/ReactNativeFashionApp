import { StyleSheet, Text, View ,FlatList,Image} from 'react-native'
import React from 'react'
import ProductDetails from './ProductDetails'

const CartList = ({cart}) => {
    return (
        <FlatList
            data={cart}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20, alignItems: 'center' }}
            ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
            renderItem={({ item }) => (
                <View style={styles.product}>
                    <Image source={item.image} style={styles.image} />
                    <ProductDetails item={item} />
                </View>
            )}
        />
    )
}

export default CartList

const styles = StyleSheet.create({
     image: {
        width: '35%',
        height: '100%',
        resizeMode: 'contain',
        borderRadius: 20,
        backgroundColor: '#e7e8e9'
    },
    product: {
    width: '87%',
    height: 100,
    borderRadius: 20,
    flexDirection: 'row',
    //  borderWidth: 2,
    //  borderColor: '#808080',
  },
})