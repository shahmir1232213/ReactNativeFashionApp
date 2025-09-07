import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import ProfileHeader from '../components/ProfileComponents/ProfileHeader'
import MyProfileMenu from '../components/ProfileComponents/MyProfileMenu'
import React from 'react'

const MyProfile = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={[{flex:1,backgroundColor:isDark ? '#141416' : 'white'}]}>
        <ProfileHeader />
        <MyProfileMenu />
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({})