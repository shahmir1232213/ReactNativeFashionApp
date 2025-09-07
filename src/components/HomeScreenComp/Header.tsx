import { StyleSheet, Text, View, ScrollView, useColorScheme } from 'react-native'
import Notification from 'react-native-vector-icons/FontAwesome'
import React from 'react'

const Header: React.FC= ({head}) => {
    const colorScheme = useColorScheme()
    const isDark = colorScheme === 'dark'
    return (
       <View style={[styles.heading, isDark && { backgroundColor: '#141416' }]}>
            <Text style={[styles.header, colorScheme === 'dark' && { color: 'white'}]}>{head ? head : 'Gem Store'}</Text>
            {!head &&
            <Notification name='bell' color={colorScheme === 'dark' ? 'white' : '#141416'} size={23}  />
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    heading: {
        //borderColor:'red',
        //borderWidth:2,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '40%',
        paddingRight: 24
    },
    header: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold'
    }
})