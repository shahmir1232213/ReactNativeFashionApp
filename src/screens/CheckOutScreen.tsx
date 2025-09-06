import { StyleSheet, View, useColorScheme ,Text, ScrollView,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import CheckOutNavigation from '../components/checkOutComponents/CheckOutNavigation'
import StepComponent from '../components/checkOutComponents/StepComponent'
import SigningInputFields from '../components/SigningInputFields'
import DeliveryOptions from '../components/checkOutComponents/DeliveryOptions'
import Divider from '../components/Divider'
import CartButton from '../components/Buttons/CartButton'
import Entypo from 'react-native-vector-icons/Entypo'
import CheckOutButton from '../components/checkOutComponents/CheckOutButton'

interface UserInfo {
  firstName: string;
  lastName: string;
  country: string;
  streetName: string;
  city: string;
  state: string;
  zipCode: string;
  phoneNumber: string;
}

const CheckOutScreen = () => {
  const [activeKey, setActiveKey] = useState<number>(0);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "",
    lastName: "",
    country: "",
    streetName: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  function handleFunc(text,prop:keyof UserInfo){
    setUserInfo((prev)=>{
      return{
        ...prev,
        [prop]:text
      }
    })
  }

const labels = [
  { placeholder: "First Name", key: "firstName", state: userInfo.firstName, setState: (text: string) => handleFunc(text, "firstName") },
  { placeholder: "Last Name", key: "lastName", state: userInfo.lastName, setState: (text: string) => handleFunc(text, "lastName") },
  { placeholder: "Country", key: "country", state: userInfo.country, setState: (text: string) => handleFunc(text, "country") },
  { placeholder: "Street Name", key: "streetName", state: userInfo.streetName, setState: (text: string) => handleFunc(text, "streetName") },
  { placeholder: "City", key: "city", state: userInfo.city, setState: (text: string) => handleFunc(text, "city") },
  { placeholder: "State", key: "state", state: userInfo.state, setState: (text: string) => handleFunc(text, "state") },
  { placeholder: "Zip Code", key: "zipCode", state: userInfo.zipCode, setState: (text: string) => handleFunc(text, "zipCode") },
  { placeholder: "Phone Number", key: "phoneNumber", state: userInfo.phoneNumber, setState: (text: string) => handleFunc(text, "phoneNumber") },
];

useEffect(()=>{
  console.log('userInfo: ',userInfo)
},[userInfo])

  return (
    <View style={[styles.container, isDark ? styles.containerDark : styles.containerLight]}>
      <Header head="Checkout" />
      <CheckOutNavigation activeKey={activeKey} setActiveKey={setActiveKey} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        { 
          activeKey === 0 ?
          <>
            <StepComponent step="STEP 1" stepHead="Shipping" />
            <SigningInputFields labels={labels} />
            <Text style={{fontSize:20, fontWeight:'600', marginVertical:10, color:isDark?'white':'black',paddingLeft:20}}>Shipping Methods</Text>
            <DeliveryOptions />
            <CheckOutButton text="Proceed to checkout" handleFunc={() => setActiveKey(1)} />
          </>
          : activeKey === 1 ?
          <>
            <StepComponent step="STEP 2" stepHead="Payment" />
           
          </>
          :
          <>
            <StepComponent step="STEP 3" stepHead="Review" />
          </>
        }
      </ScrollView>
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    //height: 700,
    ///marginBottom:,
    flex:1
  },
  containerLight: {
    backgroundColor: 'white',
  },
  containerDark: {
    backgroundColor: '#141416',
  },
   addToCart:{
        backgroundColor:'#343434',
        width:'70%',
        height:40,
        borderRadius: 100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:22
    },
    addToCartText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold'
    },
});
