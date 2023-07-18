import { FlatList, Text, View } from "react-native";
import React from "react";
import MenuItemCard from "../components/MenuItemCard";

const MenuScreen = ({ route }) => {
  const { menu } = route.params;

  return (
    <View>
      <FlatList
        data={menu}
        renderItem={({ item }) => <MenuItemCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MenuScreen;
