import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props {
  header: string;  
}

const SigningHeaders: React.FC<Props> = ({header}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{header}</Text>
    </View>
  )
}

export default SigningHeaders

const styles = StyleSheet.create({
    container:{
      // borderColor: "red",
      // borderWidth: 4,
       paddingBottom: 72,
    },
    headerText: {
        fontSize: 26,
        fontWeight: '700',
        color: 'black',
    }
})