import React from "react";
import { ImageBackground, StatusBar, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";
import GridItem from "../components/GridMenuItem";

const FirstLogin = () => {
  const handleLoginPress = () => {
    console.log("Tekan disini");
  };

  return (
    <View style={{flex:1, paddingBottom:32}}>
      <ImageBackground
        source={require("../images/background.png")}
        style={styles.backgroundGradient}
      >
        <View>
          <View style={styles.appBar}>
            <Image
              source={require("../images/mingcute_warning-line.png")}
              style={{ marginTop: 5 }}
            />
            <View style={styles.centerContent}>
              <Image
                source={require("../images/logo-bni-putih.png")}
                style={styles.logo}
              />
            </View>
          </View>
          <View>
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>
          <View>
            <Image
              source={require("../images/TraveLink(1)1.png")}
              style={{ marginTop: 16, width: 358, height: 290 }}
            />
            <TouchableOpacity
              onPress={handleLoginPress}
              style={styles.buttonLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridContainer}>
            <GridItem
              imageSource={require("../images/ion_wallet-outline.png")}
              labelText={"E-Wallet"}
            />
            <GridItem
              imageSource={require("../images/qris.png")}
              labelText={"QRIS"}
            />
            <GridItem
              imageSource={require("../images/logotravelink1.png")}
              labelText={"BNI TraveLink"}
              style={{width: 49, height: 24}}
            />
             <GridItem
              imageSource={require("../images/ep_menu.png")}
              labelText={"Another Menu"}
            />
          </View>
          <View style={styles.chatUsContainer}>
            <TouchableOpacity
              onPress={handleLoginPress}
              style={styles.buttonChatUs}
            >
              <Image
                source={require("../images/mdi_customer-service.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.buttonTextChatUs}>Chat Us</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
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
    // paddingTop: StatusBar.currentHeight,
  },

  appBarText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
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

  welcomeText: {
    fontSize: 22,
    color: "white",
    textAlign: "center",
    marginTop: 55,
    fontWeight: 'bold',
  },

  buttonLogin: {
    backgroundColor: "#005E6A",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    height: 50,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  buttonLoginContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonChatUs: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    width: 90,
    height: 40,
    borderColor: "#005E6A",
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  buttonTextChatUs: {
    color: "#005E6A",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 8,
  },

  chatUsContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default FirstLogin;
