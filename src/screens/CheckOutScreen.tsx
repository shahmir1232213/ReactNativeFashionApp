import { StyleSheet, View, useColorScheme ,Text, ScrollView} from 'react-native'
import React, { useState } from 'react'
import Header from '../components/Header'
import CheckOutNavigation from '../components/checkOutComponents/CheckOutNavigation'
import StepComponent from '../components/checkOutComponents/StepComponent'
import SigningInputFields from '../components/SigningInputFields'
import DeliveryOptions from '../components/checkOutComponents/DeliveryOptions'

const CheckOutScreen = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [streetName, setStreetName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  const labels = [
    { placeholder: "First Name", state: firstName, setState: setFirstName },
    { placeholder: "Last Name", state: lastName, setState: setLastName },
    { placeholder: "Country", state: country, setState: setCountry },
    { placeholder: "Street Name", state: streetName, setState: setStreetName },
    { placeholder: "City", state: city, setState: setCity },
    { placeholder: "State", state: state, setState: setState },
    { placeholder: "Zip Code", state: zipCode, setState: setZipCode },
    { placeholder: "Phone Number", state: phoneNumber, setState: setPhoneNumber },
  ];

  return (
    <View style={[styles.container, isDarkMode ? styles.containerDark : styles.containerLight]}>
      <Header head="Checkout" />
      <CheckOutNavigation />
      <ScrollView showsVerticalScrollIndicator={false}>
        <StepComponent step="STEP 1" stepHead="Shipping" />
        <SigningInputFields labels={labels} />
        <DeliveryOptions />
     </ScrollView>
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding:20
  },
  containerLight: {
    backgroundColor: 'white',
  },
  containerDark: {
    backgroundColor: '#141416',
  },
});
