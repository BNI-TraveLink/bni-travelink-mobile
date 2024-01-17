import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/index";
import HomePage from "./src/screens/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AppNavigator /> */}
      <HomePage/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
