import { FlatList, SafeAreaView, StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { StatusBar } from "expo-status-bar";
import CategoryList from "./CategoryList";

const restaurants = [
  {
    id: "1",
    name: "Mariam Pizza",
    category: "Pizza",
    rating: 1000,
    deliveryTime: "30-45 min",
    image: require("../../assets/images.jpeg"),
    menu: [
      {
        image: require("../../assets/images.jpeg"),
        price: "11KD",
        ingredients: ["tomato", "lemon"],
      },
    ],
  },
  {
    id: "2",
    name: "Burger",
    category: "Burger",
    rating: 4.5,
    deliveryTime: "30-45 min",
    image: require("../../assets/images.jpeg"),
    menu: [
      {
        image: require("../../assets/images.jpeg"),
        price: "11KD",
        ingredients: ["tomato", "lemon"],
      },
    ],
  },
  {
    id: "3",
    name: "Sushi",
    category: "Sushi",
    rating: 4.5,
    deliveryTime: "30-45 min",
    image: require("../../assets/images.jpeg"),
    menu: [
      {
        image: require("../../assets/images.jpeg"),
        price: "11KD",
        ingredients: ["tomato", "lemon"],
      },
      {
        image: require("../../assets/images.jpeg"),
        price: "11KD",
        ingredients: ["tomato", "lemon"],
      },
      {
        image: require("../../assets/images.jpeg"),
        price: "11KD",
        ingredients: ["tomato", "lemon"],
      },
      {
        image: require("../../assets/images.jpeg"),
        price: "11KD",
        ingredients: ["tomato", "lemon"],
      },
      {
        image: require("../../assets/images.jpeg"),
        price: "11KD",
        ingredients: ["tomato", "lemon"],
      },
    ],
  },
  {
    id: "5",
    name: "Pasta",
    category: "Pasta",
    rating: 4.5,
    deliveryTime: "30-45 min",
    image: require("../../assets/images.jpeg"),
  },
];

const RestaurantsList = () => {
  const [selectedCat, setSelectedCat] = useState("");

  const handleSelectCat = (catId) => {
    setSelectedCat(catId);
  };

  const filteredRes = selectedCat
    ? restaurants.filter((restaurant) =>
        restaurant.category.includes(selectedCat)
      )
    : restaurants;

  return (
    <>
      <CategoryList onCategorySelect={handleSelectCat} />
      <SafeAreaView style={styles.container}>
        {selectedCat && (
          <Text
            onPress={() => {
              setSelectedCat("");
            }}
          >
            Filter: {selectedCat} X
          </Text>
        )}
        <FlatList
          data={filteredRes}
          renderItem={({ item }) => <RestaurantCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export default RestaurantsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
