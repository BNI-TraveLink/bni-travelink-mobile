import React, { useState } from "react";
import {
  ImageBackground,
  TouchableOpacity,
  Modal,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import GridItem from "../components/GridMenuItem";
import { useFonts } from "expo-font";
import FormLogin from "../components/FormLogin"; // Import FormLogin component

//staging
const FirstLogin = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLoginPress = () => {
    setModalVisible(true);
  };

  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("../fonts/Inter/static/Inter-Regular.ttf"),
    "Poppins-SemiBold": require("../fonts/Poppins/Poppins-SemiBold.ttf"),
    "Inter-Medium": require("../fonts/Inter/static/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
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
              <View style={styles.buttonLoginContainer}>
                <TouchableOpacity
                  onPress={handleLoginPress}
                  style={styles.buttonLogin}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
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
                imageSource={require("../images/logotravelink2.png")}
                labelText={"BNI TraveLink"}
                style={{ width: 49, height: 24 }}
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
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.openModalText}>Open Login</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <FormLogin
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
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
    fontWeight: "bold",
    fontFamily: "Inter-SemiBold",
  },

  buttonLogin: {
    backgroundColor: "#F15A23",
    padding: 10,
    borderRadius: 20,
    marginTop: 110,
    height: 50,
    width: 298,
  },

  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },

  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 80,
    paddingHorizontal: 16,
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
    fontFamily: "Poppins-SemiBold",
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

  openModalText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
    textDecorationLine: "underline",
  },
});

export default FirstLogin;
