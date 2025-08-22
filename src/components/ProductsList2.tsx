import React from "react";
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity, useColorScheme} from "react-native";
import { useNavigation } from '@react-navigation/native';
import products from "../data/products"; // Adjust the import path as necessary
import { Touchable } from "react-native/types_generated/index";

const ProductsList2 = ({ products }) => {
  const navigation = useNavigation()
  const colorScheme = useColorScheme();
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {products.map((item, index) => (
       <TouchableOpacity key={index} style={[styles.card, colorScheme === 'dark' && { backgroundColor: '#141416' }]} onPress={()=>{navigation.navigate('ProductScreen', { product: item })}}>
          <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.productText, colorScheme === 'dark' && { color: 'white' }]}>{item.productText}</Text>
          <Text style={[styles.productPrice, colorScheme === 'dark' && { color: 'white' }]}>{`$${item.productPrice}`}</Text>
        </View>
      </TouchableOpacity>

      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
 card: {
  marginRight: 10,
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "flex-start",
  backgroundColor: "#fff",
  padding: 10,
  borderRadius: 8,
  height: 100,
  // subtle border shadow
  shadowColor: "black",
  shadowOffset: { width: 0, height: 0 }, // shadow evenly around
  shadowOpacity: 0.1,
  shadowRadius: 4,

  elevation: 2, // Android subtle border shadow
},

  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textContainer: {
    width: 100,
    height: 50,
    gap: 8,
  },
  productText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  productPrice: {
    fontSize: 12,
    fontWeight: "500",
    color: "#888",
  },
});

export default ProductsList2;
