import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CategoryCard from "./CategoryCard";

const categories = [
  { id: "1", name: "Pizza", image: require("../../assets/images.jpeg") },
  { id: "2", name: "Burger", image: require("../../assets/images.jpeg") },
  { id: "3", name: "Sushi", image: require("../../assets/images.jpeg") },
  { id: "4", name: "Pasta", image: require("../../assets/images.jpeg") },
  { id: "5", name: "Sandwiche", image: require("../../assets/images.jpeg") },
];

const CategoryList = ({ onCategorySelect }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryCard item={item} onCategorySelect={onCategorySelect} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    height: 168,
  },
});

export default CategoryList;
