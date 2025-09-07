import { StyleSheet, View, useColorScheme ,Text, ScrollView,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/HomeScreenComp/Header'
import CheckOutNavigation from '../components/checkOutComponents/CheckOutNavigation'
import StepComponent from '../components/checkOutComponents/StepComponent'
import SigningInputFields from '../components/Form/SigningInputFields'
import DeliveryOptions from '../components/checkOutComponents/DeliveryOptions'
import Divider from '../components/HomeScreenComp/Divider'
import CartButton from '../components/Buttons/CartButton'
import Entypo from 'react-native-vector-icons/Entypo'
import CheckOutButton from '../components/Buttons/CheckOutButton'
import PriceSummary from '../components/checkOutComponents/PriceSummary'
import { useNavigation } from '@react-navigation/native'
import { useSelector,useDispatch } from 'react-redux'
import {clearCart } from '../redux/slices/cartSlice'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
  const navigation = useNavigation();
  const dispatch = useDispatch()
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
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{padding:23, paddingBottom: 100 }}>
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
            <PriceSummary/>
            <CheckOutButton text="Place Order" handleFunc={
              () =>{
                setActiveKey(2)
                dispatch(clearCart())
               }
              } />
          </>
          :
          <>
            <StepComponent step="STEP 3" stepHead="Order Completed" />
              <Ionicons name='bag-handle-sharp'size={120} color={isDark?'white':'black'} style={{alignSelf:'center',marginTop:70}} />
            <CheckOutButton text="Continue Shopping" handleFunc={() => {navigation.navigate('MainTabs',{screens:'Home'});}} />
            
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
});
