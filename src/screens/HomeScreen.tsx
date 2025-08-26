import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Header from '../components/Header';
import ScrollHeader from '../components/ScrllHeader';
import Divider from '../components/Divider';
import ProductsList from '../components/ProductsList';
import ProductsList2 from '../components/ProductsList2';
import Banner from '../components/Banner';
import GenderPage from '../pages/GenderPage';
import CartPage from '../pages/CartPage';
import React,{useState} from 'react';
import { womenBanner } from '../data/products';
import { menBanner } from '../data/products';
import { menProducts } from '../data/products';
import { womenProducts2 } from '../data/products';
import { menProducts2 } from '../data/products';
import { accessories } from '../data/products';
import {accessoriesBanner} from '../data/products';
import womenProducts  from '../data/products';
import IsLoggedIn from '../components/isLoggedIn';

const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Women');
  return (
    <>
    {/* <IsLoggedIn> */}
      <Header text="GemStore" />
      <ScrollHeader setSelectedCategory={setSelectedCategory} />
      {
        selectedCategory === 'Women' ? 
          <GenderPage 
            category='Women'
            bannerData={womenBanner} 
            products1={womenProducts} 
            products2={womenProducts2}
            backgroundImage={require("../../assets/images/home1stImage.png")}/> 
          : selectedCategory === 'Men' ?
          <GenderPage 
            category='Men'
            bannerData={menBanner} 
            products1={menProducts} 
            backgroundImage={require("../../assets/images/background.jpg")}
            products2={menProducts2}
            />
           : selectedCategory === 'Acessories' ? 
           <GenderPage 
            category='Acessories'
            bannerData={accessoriesBanner} 
            products1={accessories} 
            backgroundImage={require("../../assets/images/jwellery.jpg")}
            products2={accessories}
           />
           : <CartPage />
           
      }
      {/* </IsLoggedIn> */}
      
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
