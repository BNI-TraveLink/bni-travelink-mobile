import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import CobaHome from './src/screens/CobaHome';
import HomePage from './src/screens/HomePage';
// import FirstLogin from './src/screens/FirstLogin';

export default function App() {
  return (
    <View style={styles.container}>
      {/* production */}
      <HomePage/>
      {/* <FirstLogin/> */}
      {/* <CobaHome/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
