import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstLogin from './src/screens/FirstLogin';
import HomePage from './src/screens/HomePage';

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
