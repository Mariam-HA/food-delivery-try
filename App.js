import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import Heder from "./src/components/Heder";
import RootNavigation from "./src/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <Heder />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
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
