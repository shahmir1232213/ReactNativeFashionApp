import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'


const CheckOutButton = ({ text, handleFunc }) => {
    const scheme = useColorScheme() // 'dark' | 'light'
    const isDark = scheme === 'dark'

    return (
        <View style={{ position: 'absolute', bottom: 20, left: 0, right: 0, alignItems: 'center' }}>
            <TouchableOpacity
                onPress={() => handleFunc()}
                style={[
                    styles.addToCart,
                    scheme === 'dark' && { backgroundColor: 'white' }
                ]}
            >
                <Entypo name='wallet' size={15} color={isDark ? 'black' : 'white'} />
                <Text style={[styles.addToCartText, scheme === 'dark' && { color: 'black' }]}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CheckOutButton

const styles = StyleSheet.create({
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