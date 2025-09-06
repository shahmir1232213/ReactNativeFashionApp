import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface PriceSummaryProps {
  productPrice: number;
  shipping?: string;
}

const PriceSummary: React.FC<PriceSummaryProps> = () => {
    const productPrice = useSelector((state) => state.cart.total);
    const shipping = useSelector((state) => state.cart.deliveryCharges === 0 ? 'Free' : state.cart.deliveryCharges);
    console.log('Product Price from Redux:', shipping);
    let total = 0;
    if(shipping !== 'Free')
        total = productPrice +  shipping
    else
        total = productPrice 
    return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Product price</Text>
        <Text style={styles.value}>${productPrice}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Shipping</Text>
        <Text style={styles.value}>{shipping}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.row}>
        <Text style={[styles.label, styles.subtotal]}>Subtotal</Text>
        <Text style={[styles.value, styles.subtotal]}>$ {total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
    backgroundColor: '#121212',
    padding: 16,
    borderRadius: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
},
  label: {
    color: '#ccc',
    fontSize: 16,
  },
  value: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 8,
  },
  subtotal: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
});

export default PriceSummary;
