import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

interface Prop {
  step: string;
  stepHead: string;
}

const StepComponent: React.FC<Prop> = ({ step, stepHead }) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  console.log('Rendering StepComponent with step:', step, 'and stepHead:', stepHead);
  return (
    <View style={[styles.stepCont, isDarkMode ? styles.stepContDark : styles.stepContLight]}>
      <Text style={[styles.step, isDarkMode ? styles.textDark : styles.textLight]}>{step}</Text>
      <Text style={[styles.stepHead, isDarkMode ? styles.textDark : styles.textLight]}>{stepHead}</Text>
    </View>
  )
}

export default StepComponent

const styles = StyleSheet.create({
  stepCont: {
    marginTop: 20,
    // paddingRight: 20,
    //marginBottom: ,
    paddingLeft: 20,
   // borderWidth: 2,
    width: '100%',
    //height: '10%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  stepContLight: {
   // borderColor: 'red',
    backgroundColor: '#fff',
  },
  stepContDark: {
   // borderColor: '#555',
    backgroundColor: '#141416', // ✅ custom dark color
  },
  step: {
   // borderWidth: 1,
    height: 23,
  },
  stepHead: {
    fontSize: 23,
    //borderWidth: 1,
    marginTop: 4,
    fontWeight: 'bold',
  },
  textLight: {
    color: '#000',
  //  borderColor: '#000',
  },
  textDark: {
    color: '#fff',
   // borderColor: '#fff',
  },
})
