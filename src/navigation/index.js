import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import MenuScreen from "../screens/MenuScreen";

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="restaurant" component={RestaurantScreen} />
      <Stack.Screen name="menuList" component={MenuScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
