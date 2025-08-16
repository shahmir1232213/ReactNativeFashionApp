import { Image, StyleSheet, Text, View } from 'react-native'
import { ImageSourcePropType } from "react-native";
import React from 'react';    

interface BannerProps {
    head1: string;
    head2: string;
    imageSource: ImageSourcePropType;
}

const Banner:React.FC<BannerProps> = ({ head1, head2, imageSource }) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.head1}>{head1}</Text>
            <Text style={styles.head2}>{head2}</Text>
        </View>
        <Image 
            source={imageSource}
            style={styles.image}
        />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
   container: {
        width: '100%',
        height: 180, // or whatever size
        backgroundColor: '#f8f8fa', // temp color to debug
        position:'relative',
       // top:-48,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:23
    },
    head1:{
        fontSize:14,
        color:'#777e90',
        paddingBottom:28
    },
    head2:{
       // borderWidth:2,
       // borderColor:'red',
        width:'max-content',
        fontSize:22,
        color:'#353945',
        alignSelf: 'flex-start',
    },
    image: {
        width: 210,
        height: 170,
        resizeMode: 'contain',
        position: 'absolute',
        top: 0,
        right: -30,
    }
})