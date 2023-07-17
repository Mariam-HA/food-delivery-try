import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Heder = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Menu</Text>
      <Text style={styles.title}>Food Delivery</Text>
      <Text style={styles.text}>Cart</Text>
    </View>
  );
};

export default Heder;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3D6DCC",
    padding: 15,
    paddingTop: 50,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
  },
});
