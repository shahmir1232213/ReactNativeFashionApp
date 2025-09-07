import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { updateCart } from '../../redux/slices/cartSlice'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const ProductDetails = ({ item }) => {
    const cart = useSelector((state) => state.cart.items)
    const colorScheme = useColorScheme() // 'dark' | 'light'
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const isDark = colorScheme === 'dark'
    const textStyle = {
        color: isDark ? 'white' : 'black',
        fontWeight: 'bold'
    }

    return (
        <View style={styles.productDetails}>
            <Text style={textStyle}>{item.name}</Text>
            <Text style={[textStyle, { fontSize: 20 }]}>$ {item.priceDisplay}</Text>
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
                        dispatch(updateCart({ index, functionality: 'decrease' }))
                        //  console.log('cart minused: ',cart)
                        console.log('minus pressed')
                    }}>
                        <AntDesign name="minus" color={isDark ? 'white' : 'black'} size={15} />
                    </Pressable>
                    <Text style={[textStyle, { textAlign: 'center', color: '#808080', fontWeight: 'light' }]}>{item.quantity}</Text>
                    <Pressable onPress={() => {
                        console.log('plus pressed')
                        const index = cart.findIndex(index => index.name === item.name)
                        dispatch(updateCart({ index, functionality: 'increase' }))
                    }}>
                        <AntDesign name="plus" color={isDark ? 'white' : 'black'} size={15} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
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
        alignItems: 'center'
    },
    quantity: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#808080',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 23,
        width: 70,
        paddingLeft: 4,
        paddingRight: 4,
        backgroundColor: 'transparent',
        //  alignSelf:'flex-end'
    },
    pehelvan: {
        // borderWidth: 2,
        //  borderColor: 'red',
    },
    addToCart: {
        backgroundColor: '#343434',
        width: '70%',
        height: 40,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 22
    },
    addToCartText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },
})