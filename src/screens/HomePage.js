import React from "react";
import { ImageBackground, View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";

const HomePage = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../fonts/Poppins/Poppins-Regular.ttf"),
  });

  if (fontsLoaded) {
    return (
      <View style={{ flex: 1, paddingBottom: 32 }}>
        <ImageBackground
          source={require("../images/Rectangle1.png")}
          style={styles.backgroundGradient}
        >
          <View>
            <View style={styles.appBar}>
              <Image
                source={require("../images/ri_customer-service-fill.png")}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.chatUs}>Chat Us</Text>
              <View style={styles.centerContent}>
                <Image
                  source={require("../images/logo-bni-putih.png")}
                  style={styles.logo}
                />
              </View>
              <Image source={require("../images/Vector.png")} />
              <Image source={require("../images/line-md_log-out.png")} />
            </View>
          </View>
          {/* <View style={styles.appBar}>
            <Text style={styles.chatUs}>Chat Us</Text>
          </View> */}
        </ImageBackground>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  backgroundGradient: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 56,
    height: 430,
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000", // Warna bayangan
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // Kekuatan bayangan (0-1)
    shadowRadius: 3.84, // Jarak bayangan dari elemen
  },

  chatUs: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "Poppins-Regular",
  },

  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 132,
    height: 40,
  },

  custName:{

  }
});

export default HomePage;
