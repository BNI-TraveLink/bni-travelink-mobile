import React, { createContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Confirmation from "./src/screens/Confirmation";
import HomeScreen from "./src/screens/homescreen";
import Receipt from "./src/screens/Receipt";
import TestApp from "./src/screens/TestApp";
import TicketDetails from "./src/screens/TicketDetails";

// export const FontThemeContext = createContext();
const Stack = createStackNavigator();

function App() {
  // Tentukan tema font di sini
  const fontTheme = {
    regular: "Inter-Regular",
    medium: "Inter-Medium",
    semiBold: "Inter-SemiBold",
  };

  // const handleBack = () => {
  //   // Handle logic when the Back button is pressed globally
  //   // For now, let's navigate back to the previous screen
  //   // (This logic assumes that your Confirmation screen is the only screen with a Back button)
  //   navigation.goBack();
  // };
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

      {/* <Purchase></Purchase> */}
      {/* <Receipt></Receipt> */}
      {/* <TestApp></TestApp> */}
      {/* <TicketDetails></TicketDetails> */}

      {/* Sediakan tema font melalui konteks */}
      {/* <FontThemeContext.Provider value={fontTheme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Confirmation" component={Confirmation} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </FontThemeContext.Provider> */}

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Receipt" component={Receipt} />
          <Stack.Screen name="TicketDetails" component={TicketDetails} />
        </Stack.Navigator>
      </NavigationContainer>

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
