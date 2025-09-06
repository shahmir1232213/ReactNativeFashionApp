import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'

const icons = [
  { icon: <Entypo name="location-pin" size={30} /> },
  { icon: <Fontisto name="credit-card" size={15} /> },
  { icon: <Ionicons name="checkmark-done-circle" size={30} /> },
];

const checkOutNavigation = () => {
  const [activeKey, setActiveKey] = useState<number>(0);
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';

  return (
    <View style={[styles.button, isDarkMode ? styles.buttonDark : styles.buttonLight]}>
      {icons.map((icon, index) => (
        <React.Fragment key={index}>
          <TouchableOpacity onPress={() => setActiveKey(index)}>
            {React.cloneElement(icon.icon, {
              color: activeKey === index
                ? isDarkMode ? '#fff' : '#000'
                : isDarkMode ? '#aaa' : '#777e90',
            })}
          </TouchableOpacity>
          {/* render dots except after the last icon */}
          {index !== icons.length - 1 && (
            <>
              <Text
                style={[
                  styles.dots,
                  { backgroundColor: isDarkMode ? '#aaa' : '#777e90' },
                ]}
              />
              <Text
                style={[
                  styles.dots,
                  { backgroundColor: isDarkMode ? '#aaa' : '#777e90' },
                ]}
              />
              <Text
                style={[
                  styles.dots,
                  { backgroundColor: isDarkMode ? '#aaa' : '#777e90' },
                ]}
              />
              <Text
                style={[
                  styles.dots,
                  { backgroundColor: isDarkMode ? '#aaa' : '#777e90' },
                ]}
              />
            </>
          )}
        </React.Fragment>
      ))}
    </View>
  );
};

export default checkOutNavigation;

const styles = StyleSheet.create({
  button: {
    //borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonLight: {
    //borderColor: 'red',
    backgroundColor: 'white',
  },
  buttonDark: {
    //borderColor: '#555',
    backgroundColor: '#141416', // ✅ corrected dark mode color
  },
  dots: {
    width: 4,
    height: 4,
    borderRadius: 100,
    marginHorizontal: 1,
  },
});
