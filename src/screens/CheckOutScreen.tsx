import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import CheckOutNavigation from '../components/checkOutComponents/CheckOutNavigation'

const CheckOutScreen = () => {
  return (
    <View  style={{backgroundColor:'black',height:'100%'}}>
      <Header head='Checkout'/>
      <CheckOutNavigation/>
    </View>
  )
}

export default CheckOutScreen

const styles = StyleSheet.create({})