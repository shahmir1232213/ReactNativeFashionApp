import React,{useState} from "react";
import { View, Image, StyleSheet,Pressable,Text} from "react-native";
import Swiper from "react-native-swiper";


export default function Intro({navigation}) {
  const [swipeText,setSwipeTesxt] = useState('')
  return (
    <View style={styles.parentCont}>
      <View>
        <Text style={styles.TopHeading}>Discover Something New</Text>
        <Text style={styles.lowPara}>Special new arrivals just for you</Text>
      </View>
      
      <View style={styles.sweeperContainer}>
          <Swiper
            loop={true}
            showsPagination={true}
            dotColor="#ccc"
            activeDotColor="#000"
            paginationStyle={{
             gap:8,
              bottom: -50, // Adjust this to control dot position
            }}
          >
            <Image style={styles.image} source={require("../../assets/images/intro1stPic.png")} />
            <Image style={styles.image} source={require("../../assets/images/introImage2.png")} />
            <Image style={styles.image} source={require("../../assets/images/introImage3.png")} />
          </Swiper>
        </View>
        <View style={styles.bottomDiv}>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={styles.buttonText}>Get Started</Text>
            </Pressable>
        </View>
     </View>
  );
}

const styles = StyleSheet.create({
  lowPara:{
    textAlign:'center'
  },
  TopHeading:{
    fontWeight:'bold',
    fontSize:27
  },
  parentCont:{
    paddingTop:40,
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
  },
  bottomDiv:{
    backgroundColor:"#464447",
    height:"40%",
    width:"100%",
    justifyContent:'flex-end',
    alignItems:'center',
    paddingBottom:100 
  },
  sweeperContainer: {
    width: 320,
    height: 380, // Or use flex: 1 for full screen
    //borderColor: 'green',
    //borderWidth: 6,
    borderRadius:20,
    position:'relative',
    top:110,
    backgroundColor:"#e7e8e9",
    zIndex:1

  },
  image: {
    flex: 1,       // Takes all available space
    width: "100%",
    resizeMode: "contain", // Ensures proper aspect ratio
  },
  buttonContainer:{
     borderColor:'white',
     borderWidth:2,   
     borderRadius:50,
     width:"60%",
     height:"20%",
     backgroundColor:"#747375",
     justifyContent:'center',
     alignItems:'center'
  },  
  buttonText:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },

});