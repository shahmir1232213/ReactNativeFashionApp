import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";

interface Prop {
  text: string;
}

const Divider: React.FC<Prop> = ({ text }) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        colorScheme === "dark" && { backgroundColor: "#2a2f37" },
      ]}
    >
      <Text
        style={[
          styles.text,
          colorScheme === "dark" && { color: "white" },
        ]}
      >
        {text}
      </Text>
      <Text
        style={[
          styles.text2,
          colorScheme === "dark" && { color: "#ccc" },
        ]}
      >
        Show all
      </Text>
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 22,
    paddingRight: 22,
    // backgroundColor: "blue",
    // borderColor: "white",
    // botderWidth: 12, // <-- typo here, should be borderWidth
  },
  text: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  text2: {
    color: "#9b9b9b",
    fontSize: 14,
  },
});
