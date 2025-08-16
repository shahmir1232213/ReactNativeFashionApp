import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Divider from '../components/Divider';
import ProductsList from '../components/ProductsList';
import Banner from '../components/Banner';
import ProductsList2 from '../components/ProductsList2';
import React from 'react';

const GenderPage = ({ bannerData, products1, backgroundImage, products2}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageCont}>
        <Image
          style={styles.image}
          source={backgroundImage}
        />
      </View>

      <Divider text="Feature Products" />
      <ProductsList products={products1} />

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
    borderColor: 'white',
    borderWidth: 2,
    padding: 12,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "stretch", // fills container while keeping aspect ratio
    borderRadius: 40,
  },
   container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
