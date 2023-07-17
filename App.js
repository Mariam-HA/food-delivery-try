import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoryList from "./src/components/CategoryList";
import Heder from "./src/components/Heder";
import RestaurantsList from "./src/components/RestaurantsList";
import MenuScreen from "./src/screens/MenuScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Heder />
      {/* <CategoryList /> */}
      <RestaurantsList />
      {/* <MenuScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
