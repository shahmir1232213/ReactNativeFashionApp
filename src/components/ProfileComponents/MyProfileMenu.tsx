import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, useColorScheme } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = () => {
  const scheme = useColorScheme(); // detects light or dark mode
  const isDark = scheme === "dark";

  const menuItems = [
    { id: 1, title: "Address", icon: "map-marker-outline", iconLib: "MaterialCommunityIcons" },
    { id: 2, title: "Payment method", icon: "credit-card-outline", iconLib: "MaterialCommunityIcons" },
    { id: 3, title: "Voucher", icon: "ticket-percent", iconLib: "MaterialCommunityIcons" },
    { id: 4, title: "My Wishlist", icon: "heart-o", iconLib: "FontAwesome" },
    { id: 5, title: "Rate this app", icon: "star", iconLib: "FontAwesome" },
    { id: 6, title: "Log out", icon: "log-out", iconLib: "Feather" },
  ];

  const navigation = useNavigation();

  const renderIcon = (item) => {
    switch (item.iconLib) {
      case "MaterialCommunityIcons":
        return <MaterialCommunityIcons name={item.icon} size={22} color={isDark ? "#ccc" : "#333"} />;
      case "FontAwesome":
        return <FontAwesome name={item.icon} size={22} color={isDark ? "#ccc" : "#333"} />;
      case "Feather":
        return <Feather name={item.icon} size={22} color={isDark ? "#ccc" : "#333"} />;
      default:
        return null;
    }
  };

  const themedStyles = styles(isDark);

  return (
    <ScrollView style={themedStyles.container}>
      {menuItems.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={themedStyles.menuItem}
          onPress={() => {
            if (item.id === 6) navigation.navigate("Welcome");
          }}
        >
          <View style={themedStyles.left}>
            {renderIcon(item)}
            <Text style={themedStyles.title}>{item.title}</Text>
          </View>
          <Feather name="chevron-right" size={22} color={isDark ? "#ccc" : "#555"} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = (isDark) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDark ? "#111" : "#f9f9f9",
      padding: 10,
      marginTop: 50,
    },
    menuItem: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: isDark ? "#1a1a1a" : "#fff",
      paddingVertical: 15,
      paddingHorizontal: 12,
      marginVertical: 5,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDark ? "#333" : "#ddd",
    },
    left: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    title: {
      color: isDark ? "#fff" : "#111",
      fontSize: 16,
    },
  });

export default MenuScreen;
