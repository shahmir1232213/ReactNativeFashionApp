import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, useColorScheme } from "react-native";

const DeliveryOptions = () => {
  const [selected, setSelected] = useState("free");
  const scheme = useColorScheme();
  const isDarkMode = scheme === "dark";

  const options = [
    {
      id: "free",
      price: "Free",
      title: "Delivery to home",
      subtitle: "Delivery from 3 to 7 business days",
    },
    {
      id: "home",
      price: "$ 9.90",
      title: "Delivery to home",
      subtitle: "Delivery from 4 to 6 business days",
    },
    {
      id: "fast",
      price: "$ 9.90",
      title: "Fast Delivery",
      subtitle: "Delivery from 2 to 3 business days",
    },
  ];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#141416" : "#fff" },
      ]}
    >
      {options.map((opt) => (
        <Pressable
          key={opt.id}
          style={[
            styles.option,
            { borderColor: isDarkMode ? "#333" : "#ddd" },
            selected === opt.id && { borderColor: "#00C2A8" },
          ]}
          onPress={() => setSelected(opt.id)}
        >
          {/* Radio button */}
          <View
            style={[
              styles.radioOuter,
              { borderColor: isDarkMode ? "#fff" : "#000" },
            ]}
          >
            {selected === opt.id && <View style={styles.radioInner} />}
          </View>

          {/* Texts */}
          <View>
            <View style={styles.row}>
              <Text
                style={[
                  styles.price,
                  { color: isDarkMode ? "#fff" : "#000" },
                  opt.price === "Free" && styles.freePrice,
                ]}
              >
                {opt.price}
              </Text>
              <Text style={[styles.title, { color: isDarkMode ? "#fff" : "#000" }]}>
                {opt.title}
              </Text>
            </View>
            <Text style={[styles.subtitle, { color: isDarkMode ? "#aaa" : "#555" }]}>
              {opt.subtitle}
            </Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00C2A8", // teal inner circle
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  price: {
    fontWeight: "bold",
    marginRight: 6,
  },
  freePrice: {
    color: "#00C2A8",
  },
  title: {
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 12,
  },
});

export default DeliveryOptions;
