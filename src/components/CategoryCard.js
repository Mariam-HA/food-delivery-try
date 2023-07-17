import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CategoryCard = ({ item, onCategorySelect }) => {
  return (
    <TouchableOpacity onPress={() => onCategorySelect(item.name)}>
      <View style={styles.card}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "pink",
    margin: 10,
    width: 120,
    height: 120,
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
