import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const MenuItemCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.price}>Price:{item.price}</Text>
        <Text style={styles.ingredients}>Ingredients:{item.ingredients}</Text>
      </View>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 17,
    width: 300,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 0.5,
    borderColor: "gray",
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 12,
  },
  details: {
    padding: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "gray",
  },
  ingredients: {
    fontSize: 18,
    color: "gray",
  },
});
