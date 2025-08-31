import { Text, StyleSheet, View, Image, ScrollView,TouchableOpacity,useColorScheme  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const ProductsList = ({ products,category }) => {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container, colorScheme === 'dark' && { backgroundColor: '#2a2f37' }]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((item, index) => (
          <TouchableOpacity  style={styles.card} key={index} 
          onPress={() => {
            navigation.navigate('ProductScreen',{ product: item ,category:category});
          }}>
            <View style={styles.product}>
              <Image style={styles.image} source={item.image} />
            </View>
            <View style={[styles.productInfo, colorScheme === 'dark' && { backgroundColor: '#2a2f37'}]}>
              <Text style={[styles.productText, colorScheme === 'dark' && { color: 'white' }]}>{item.productText}</Text>
              <Text style={[styles.priceText, colorScheme === 'dark' && { color: 'white' }]}>{`$${item.productPrice}`}</Text>
            </View>
          </TouchableOpacity>
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
