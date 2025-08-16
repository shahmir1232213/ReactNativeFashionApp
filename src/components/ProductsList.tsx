import { Text, StyleSheet, View, Image, ScrollView } from 'react-native';
import React from 'react';

const ProductsList = ({ products }) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.product}>
              <Image style={styles.image} source={item.image} />
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productText}>{item.productText}</Text>
              <Text style={styles.priceText}>${item.productPrice}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 12,
  },
  card: {
    width: 138,
    height: 300,
    marginRight: 16,
  },
  product: {
    width: '100%',
    height: '59%',
    borderRadius: 19,
    overflow: 'hidden',
    backgroundColor: '#e5e1e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  productInfo: {
    marginTop: 8,
    backgroundColor: 'white',
    paddingLeft: 22,
    borderRadius: 8,
  },
  productText: {
    color: 'black',
    fontSize: 15,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});
