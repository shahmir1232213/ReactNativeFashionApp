import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialDesignIcons from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';

const categories = [
  { id: 1, name: 'Women', icon: <Ionicons name="woman-outline" size={27} /> },
  { id: 2, name: 'Men', icon: <Ionicons name="man-outline" size={27} /> },
  { id: 3, name: 'Acessories', icon: <FontAwesome5 name="glasses" size={27} /> },
  { id: 4, name: 'Fashion', icon: <MaterialDesignIcons name="eye" size={27} /> },
];

const ScrllHeader = ({ setSelectedCategory }) => {
  const [activeId, setActiveId] = useState(1); // Default active category

  return (
    <View style={styles.scrollView}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: 'row',
          gap: 49,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((cat) => (
          <TouchableOpacity key={cat.id} 
              onPress={() => {
                setActiveId(cat.id)
                setSelectedCategory(cat.name)
              }
            }>
            <View
              style={[
                styles.scrolls,
                activeId === cat.id && styles.activeScrolls,
              ]}
            >
              {React.cloneElement(cat.icon, {
                color: activeId === cat.id ? 'white' : '#9d9d9d',
              })}
            </View>
            <Text
              style={[
                styles.text,
                activeId === cat.id && styles.activeText,
              ]}
            >
              {cat.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrllHeader;

const styles = StyleSheet.create({
  text: {
    color: '#9d9d9d',
    textAlign: 'center',
    fontSize: 10,
  },
  activeText: {
    color: 'black',
    fontWeight: '600',
  },
  scrollView: {
    width: '100%',
    height: '7%',
    paddingLeft: 34,
    paddingRight: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrolls: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeScrolls: {
    backgroundColor: 'black',
  },
});
