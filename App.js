import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import KrlOrderForm from './src/screens/KrlOrderForm';
// import TraveLink from './src/screens/TraveLink';
// import Purchase from './src/screens/Purchase';
// import HomePageAfter from './src/screens/HomePageAfter';
// import BottomBarPage from './src/components/BottomBar';
// import HomePage from './src/screens/HomePage';
import FirstLogin from './src/screens/FirstLogin';
// import Coba from './src/screens/Coba';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage/> */}
      <FirstLogin/>
      {/* <BottomBarPage/> */}
      {/* <HomePageAfter/> */}
      {/* <Purchase/> */}
      {/* <TraveLink/> */}
      {/* <KrlOrderForm/> */}
      {/* <Coba/> */}
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
