import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import { useSelector } from 'react-redux';
import React from 'react'

const ProfileHeaderText = () => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const email = useSelector((state)=>state.user.email)
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold',marginBottom: 5,fontSize: 16, color: isDark ? 'white' : 'black' }}>Welcome To GemStore</Text>
      <Text style={{fontSize: 12, color: isDark ? 'white' : 'black' }}>{email}</Text>
    </View>
  )
}

export default ProfileHeaderText

const styles = StyleSheet.create({
    container:{
        //borderWidth:2,
        //borderColor:'red',
        padding:5,
        marginLeft:20,
    }
})