import React, { useEffect } from 'react';
import { Text, ImageBackground, StyleSheet, View, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
type Prop = {
  navigation:NativeStackNavigationProp
}

export default function Welcome() {
  const navigation = useNavigation()
  useEffect(()=>{
    console.log("👉 Screen A mounted");
    return () => console.log("❌ Screen A unmounted");
  },[])
  return (
    <ImageBackground
      source={require('../../assets/images/homeScreen.png')}
      style={styles.background}
      imageStyle={{ opacity:0.6}} // adjust transparency
    >
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.heading}>Welcome to GemStore</Text>
            <Text style={styles.para}>The  home for a fashionista</Text>
        </View>
        <Pressable style={styles.buttonContainer} onPress={()=>{navigation.navigate('IntroScreen')}}>
            <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
    </View>  
    
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer:{
     borderColor:'white',
     borderWidth:2,   
     borderRadius:50,
     width:"50%",
     height:"15%",

     backgroundColor:"#a0a0a0",
     justifyContent:'center',
     alignItems:'center'
  },
  textContainer:{
    paddingBottom:50
  },
  buttonText:{
    color:'white',
    fontWeight:'bold'
  },
  container:{
   // borderColor:'red',
   // borderWidth:2,
    height:250,
    width:'100%',
    alignItems:'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:'Product Sans',
    justifyContent:'flex-end',
    resizeMode: "contain",
  },
  content: {
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 35,
    color: 'white',
    fontWeight:'bold',
    paddingTop: 10,
  },
  para: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
});
