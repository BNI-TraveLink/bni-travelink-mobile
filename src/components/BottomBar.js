import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/HomePage";
import History from "../screens/History";
import Favorite from "../screens/Favorite";
import Transaction from "../screens/Transaction";
import Setting from "../screens/Setting";
import { Image, View, Text } from "react-native";

const BottomBar = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  },
};

export default function BottomBarPage() {
  return (
    <NavigationContainer independent={true}>
      <BottomBar.Navigator screenOptions={screenOptions}>
        <BottomBar.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={require("../images/home-item.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <Text style={{ fontSize: 12, color: "#005E6A" }}>Home</Text>
                </View>
              );
            },
          }}
        />
        <BottomBar.Screen
          name="History"
          component={History}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={require("../images/history-item.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <Text style={{ fonSize: 12, color: "#005E6A" }}>History</Text>
                </View>
              );
            },
          }}
        />
        <BottomBar.Screen
          name="Transaction"
          component={Transaction}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={require("../images/qris2-item.png")}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    top: -20,
                  }}
                ></Image>
              );
            },
          }}
        />
        <BottomBar.Screen
          name="Favorite"
          component={Favorite}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={require("../images/favorite-item.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <Text style={{ fonSize: 12, color: "#005E6A" }}>
                    Favorite
                  </Text>
                </View>
              );
            },
          }}
        />
        <BottomBar.Screen
          name="Setting"
          component={Setting}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Image
                    source={require("../images/setting-item.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <Text style={{ fontSize: 12, color: "#005E6A" }}>Setting</Text>
                </View>
              );
            },
          }}
        />
      </BottomBar.Navigator>
    </NavigationContainer>
  );
}
