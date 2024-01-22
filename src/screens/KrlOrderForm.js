import { useFonts } from "expo-font";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const KrlOrderForm = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../fonts/Poppins/Poppins-Bold.ttf"),
  });

  if (fontsLoaded) {
    return (
      <ImageBackground
        source={require("../images/background-container.png")}
        style={styles.backgroundGradient}
      >
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View style={styles.appBar}>
            <Image
              source={require("../images/arrow-back-item.png")}
              style={{ height: 30, width: 30 }}
            />
            <View style={styles.centerContent}>
              <Image
                source={require("../images/logobniputih.png")}
                style={styles.logo}
              />
            </View>
          </View>
          <View>
            <View style={styles.menuContainer}>
              <Image
                source={require("../images/kai-commuter-logo.png")}
                style={styles.kaiLogo}
              />
              <View>
                <Text style={[styles.textContainer]}>From</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../images/trainRight-item.png")}
                    style={{ height: 40, width: 40 }}
                  ></Image>
                  <TextInput
                    placeholder="Select Departure Station"
                    style={styles.textInput}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  backgroundGradient: {
    paddingTop: 45,
    height: 88,
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
  },

  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 35,
  },

  logo: {
    width: 132,
    height: 40,
  },

  menuContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  kaiLogo: {
    width: 110,
    height: 40,
    marginTop: 19,
  },

  textContainer: {
    color: "#005E6A",
    fontFamily: "Poppins-Bold",
    fontSize: 14,
    marginRight: 320,
  },

  textInput: {
    borderBottomWidth: 1,
    borderColor: "#ADADAD",
    paddingVertical: 8,
    marginLeft: 10,
  },

  placeItem: {
    fontSize: 16,
    paddingVertical: 8,
  },

  stationList: {
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 5,
  },

  stationItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "transparent", // Mengganti warna garis hitam dengan warna transparan
    paddingHorizontal: 16,
  },
});

export default KrlOrderForm;
