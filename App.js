<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstLogin from './src/screens/FirstLogin';
import HomePage from './src/screens/HomePage';
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/index";
>>>>>>> 316c7b10072f12cd08ebf105333070e8160c5a0f

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <HomePage/>
      
=======
      <AppNavigator />
      <StatusBar style="auto" />
>>>>>>> 316c7b10072f12cd08ebf105333070e8160c5a0f
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
