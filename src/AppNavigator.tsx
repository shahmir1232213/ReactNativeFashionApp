import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './navigation/StackNavigation'
import React from 'react'

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})