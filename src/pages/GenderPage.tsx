import { StyleSheet, Text, View, Image, ScrollView,useColorScheme} from 'react-native';
import Divider from '../components/Divider';
import ProductsList from '../components/ProductsList';
import Banner from '../components/Banner';
import ProductsList2 from '../components/ProductsList2';
// import * as Keychain from 'react-native-keychain'
import React,{useEffect} from 'react';

const GenderPage = ({ bannerData, products1, backgroundImage, products2 , navigation}) => {
  const colorScheme = useColorScheme()
  // useEffect(()=>{
  //    async function clear(){
  //      setTimeout(async () => {
  //       console.log('removing token ....')
  //       await Keychain.resetGenericPassword()
  //       console.log('token removed')
  //      },1500)
  //    }
  //    clear()
  //  })
  return (
    <ScrollView style={[styles.container,colorScheme === 'dark' && {backgroundColor:'#2a2f37'}]} showsVerticalScrollIndicator={false}>
      <View style={styles.imageCont}>
        <Image
          style={styles.image}
          source={backgroundImage}
        />
      </View>
      <Divider text="Feature Products" />
      <ProductsList products={products1} navigation={navigation} />

      {bannerData.map((banner, index) => (
        <View key={index} style={{ marginTop: index === 0 ? -40 : 20 }}>
          {
            index === 1 && (
               <Divider text="Top Collections" />
            )
          }
          <Banner
            head1={banner.head1}
            head2={banner.head2}
            imageSource={banner.image}
          />
          {index === 0 && (
            <>
              <Divider text="Recommended" />
              <ProductsList2 products={products2} />
            </>
        )}
        </View>
      ))}
    </ScrollView>
  );
};


export default GenderPage;

const styles = StyleSheet.create({
  imageCont: {
    width: '100%',
    height: 200,
   // borderColor: 'white',
   // borderWidth: 2,
    padding: 12,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover", // fills container while keeping aspect ratio
    borderRadius: 40,
  },
   container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
