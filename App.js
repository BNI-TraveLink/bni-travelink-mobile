import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./src/navigation/index";
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/homescreen";
import FirstLogin from "./src/screens/FirstLogin";
import HomePage from "./src/screens/HomePage";
import Purchase from "./src/screens/Purchase";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="FirstLogin" component={FirstLogin} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer> */}

      <Purchase></Purchase>
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

export default App;
