import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

const MenuScreen = () => {
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
        return <MaterialCommunityIcons name={item.icon} size={22} color="#ccc" />;
      case "FontAwesome":
        return <FontAwesome name={item.icon} size={22} color="#ccc" />;
      case "Feather":
        return <Feather name={item.icon} size={22} color="#ccc" />;
      default:
        return null;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {menuItems.map((item, index) => (
        <TouchableOpacity key={item.id} style={styles.menuItem} onPress={() => {if(item.id === 6) navigation.navigate('Welcome')}}>
          <View style={styles.left}>
            {renderIcon(item)}
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <Feather name="chevron-right" size={22} color="#ccc" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 10,
    marginTop: 50,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MenuScreen;
