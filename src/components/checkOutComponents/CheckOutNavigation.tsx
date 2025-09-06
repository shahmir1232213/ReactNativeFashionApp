import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React,{useState,useEffect} from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'

const icons = [
  { icon: <Entypo name="location-pin" size={35}  /> },
  { icon: <Fontisto name="credit-card" size={20}  /> },
  { icon: <Ionicons name="checkmark-done-circle" size={35} /> },
];

const checkOutNavigation = () => {
  const [activeKey,setActiveKey] = useState<string>('')
    return (
        <View style={styles.button}>
        { 
            icons.map((icon,index)=>(
                <>
                    <TouchableOpacity key={index} onPress={()=>(setActiveKey(index))}> 
                        {React.cloneElement(icon.icon, {
                            color: activeKey === index ? '#fcfcfd' : '#777e90',
                        })}
                    </TouchableOpacity>
                    {/* render dots except after the last icon */}
                    {index !== icons.length - 1 && (
                        <>
                        <Text style={styles.dots}>.</Text>
                        <Text style={styles.dots}>.</Text>
                        <Text style={styles.dots}>.</Text>
                        <Text style={styles.dots}>.</Text>
                        </>
                    )}
                </>
            ))        
        }
        </View>
  )
}

export default checkOutNavigation

const styles = StyleSheet.create({
    button:{
        borderWidth:2,
        borderColor:'red',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        backgroundColor:'black'
    },
    dots:{
        backgroundColor:'#777e90',
        width:4,
        height:4,
        borderRadius:100
    }
})