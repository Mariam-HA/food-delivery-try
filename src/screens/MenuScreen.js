import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MunuItemCard from "../components/MenuItemCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import MenuItemCard from "../components/MenuItemCard";

const menu = [
  {
    id: 1,
    name: "whatever",
    image: require("../../assets/images.jpeg"),
    price: "11KD",
    ingredients: ["tomato", "lemon"],
  },
  {
    id: 2,
    name: "whatever",
    image: require("../../assets/images.jpeg"),
    price: "11KD",
    ingredients: ["tomato", "lemon"],
  },
];

const MenuScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menu}
        renderItem={({ item }) => <MenuItemCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
