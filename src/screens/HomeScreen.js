import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          navigation.navigate("restaurant");
        }}
        title="Go to res"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
