import { StyleSheet, Text, View,Pressable,useColorScheme } from 'react-native'
import React from 'react'

interface Props {
    title: string;
    onPress: () => void;
  }

const SigningButton: React.FC<Props> = ({title,onPress}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  return (
    <Pressable style={[styles.button, isDark && { backgroundColor: '#ffffff' }]} onPress={onPress}>
      <Text style={[styles.buttonText, isDark && { color: 'black' }]}>{title}</Text>
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