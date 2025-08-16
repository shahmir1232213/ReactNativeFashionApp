import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Header from '../components/Header';
import ScrollHeader from '../components/ScrllHeader';
import Divider from '../components/Divider';
import ProductsList from '../components/ProductsList';
import ProductsList2 from '../components/ProductsList2';
import Banner from '../components/Banner';
import GenderPage from '../pages/GenderPage';
import React,{useState} from 'react';
import { womenBanner } from '../data/products';
import { menBanner } from '../data/products';
import { menProducts } from '../data/products';
import { womenProducts2 } from '../data/products';
import { menProducts2 } from '../data/products';
import womenProducts  from '../data/products';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Women');
  return (
    <>
      <Header text="GemStore" />
      <ScrollHeader setSelectedCategory={setSelectedCategory} />
      {
        selectedCategory === 'Women' ? 
          <GenderPage 
            bannerData={womenBanner} 
            products1={womenProducts} 
            products2={womenProducts2}
            backgroundImage={require("../../assets/images/home1stImage.png")}/> :
          <GenderPage 
            bannerData={menBanner} 
            products1={menProducts} 
            backgroundImage={require("../../assets/images/background.jpg")}
            products2={menProducts2}
            />
           
      }
      
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageCont: {
    width: '100%',
    height: 200,
    borderColor: 'white',
    borderWidth: 2,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    borderRadius: 40,
  },
  newArrivalsContainer: {
    width: '100%',
    height: 160,
    borderColor: 'blue',
    borderWidth: 2,
    paddingVertical: 10, // ensures visibility regardless of text size
    alignItems: 'flex-start', // keep text aligned left
  },
  newArrivalsText: {
    color: 'black',
  fontSize: 23,
    paddingLeft: 22,
  }
});
