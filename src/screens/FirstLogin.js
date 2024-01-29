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
import GridMenuItem from "../components/GridMenuItem";
import { useFonts } from "expo-font";
import FormLogin from "../components/FormLogin"; // Import FormLogin component
import axios from "axios";

const FirstLogin = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [userId, setUserId] = useState("");
  const [mpin, setMpin] = useState("");

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
        <ImageBackground
          source={require("../images/background-container.png")}
          style={styles.backgroundGradient}
        >
          <View style={styles.appBar}>
          <Image
            source={require("../images/warning-item.png")}
            style={{ height: 30, width: 30 }}
          />
          <View style={styles.centerContent}>
            <Image
              source={require("../images/logobniputih.png")}
              style={styles.logo}
            />
          </View>
        </View>
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View>
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>
          <View>
            <Image
              source={require("../images/traveLink(1)1.png")}
              style={{ marginTop: 16, width: 358, height: 290 }}
            />
            <View style={styles.buttonLoginContainer}>
              <TouchableOpacity
                onPress={handleLoginPress}
                style={styles.buttonLogin}
              >
                <Text style={styles.buttonLoginText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gridContainer}>
            <GridMenuItem
              imageSource={require("../images/wallet-item.png")}
              labelText={"E-Wallet"}
            />
            <GridMenuItem
              imageSource={require("../images/qr-scan-item.png")}
              labelText={"QRIS"}
            />
            <GridMenuItem
              imageSource={require("../images/logo-bnitravelink-item.png")}
              labelText={"BNI TraveLink"}
              style={{ width: 49, height: 24 }}
            />
            <GridMenuItem
              imageSource={require("../images/menu-item.png")}
              labelText={"Another Menu"}
            />
          </View>
          <View style={styles.chatUsContainer}>
            <TouchableOpacity
              onPress={handleLoginPress}
              style={styles.buttonChatUs}
            >
              <Image
                source={require("../images/org-customer-service.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={styles.buttonTextChatUs}>Chat Us</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.openModalText}></Text>
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
  backgroundGradient: {
    paddingTop: 30,
    height: 440,
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    // // backgroundColor: 'white',
    // borderBottomWidth: 1,
    // borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // // elevation: 2,
    paddingRight: 35,
  },

  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
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

  buttonLoginContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonLogin: {
    backgroundColor: "#F15A23",
    padding: 10,
    borderRadius: 20,
    marginTop: 110,
    height: 50,
    width: 320,
  },

  buttonLoginText: {
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

  chatUsContainer: {
    flex: 1,
    alignItems: "center",
  },

  buttonChatUs: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    marginTop: 130,
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
});

export default FirstLogin;
