import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'

interface Props {
    title: string;
}

const SigningButton: React.FC<Props> = ({title}) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default SigningButton

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#2d201c',
        height: 44,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        width: '50%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
    }
})