import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const DeliveryOptions = () => {
  const [selected, setSelected] = useState("free");

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
    <View style={styles.container}>
      {options.map((opt) => (
        <Pressable
          key={opt.id}
          style={[
            styles.option,
            selected === opt.id && styles.optionSelected,
          ]}
          onPress={() => setSelected(opt.id)}
        >
          {/* Radio button */}
          <View style={styles.radioOuter}>
            {selected === opt.id && <View style={styles.radioInner} />}
          </View>

          {/* Texts */}
          <View>
            <View style={styles.row}>
              <Text
                style={[
                  styles.price,
                  opt.price === "Free" && styles.freePrice,
                ]}
              >
                {opt.price}
              </Text>
              <Text style={styles.title}>{opt.title}</Text>
            </View>
            <Text style={styles.subtitle}>{opt.subtitle}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111", // dark bg
    padding: 16,
  },
  option: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  optionSelected: {
    borderColor: "#00FFFF", // cyan border
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#fff",
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
    color: "#fff",
    marginRight: 6,
  },
  freePrice: {
    color: "#00C2A8",
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 12,
  },
});

export default DeliveryOptions;
