import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import GridHomeMenu from "../components/GridHomeMenu";

const HomePage = () => {
  const [isHidden, setIsHidden] = useState(false);
  const saldo = "2.971.946";

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../fonts/Poppins/Poppins-Medium.ttf"),
    "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
    "Inter-Medium": require("../fonts/Inter/static/Inter-Medium.ttf"),
    "Inter-Bold": require("../fonts/Inter/static/Inter-Bold.ttf"),
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
              source={require("../images/customer-service.png")}
              style={{ height: 20, width: 20 }}
            />
            <Text style={styles.chatUs}>chatUs</Text>
            <View style={styles.centerContent}>
              <Image
                source={require("../images/logobniputih.png")}
                style={styles.logo}
              />
            </View>
            <Image
              source={require("../images/notification.png")}
              style={{ marginRight: 8, height: 20, width: 16 }}
            />
            <Image
              source={require("../images/log-out.png")}
              style={{ height: 20, width: 20 }}
            />
          </View>
          <View>
            <View style={styles.custProfile}>
              <Text style={styles.custText}>Hello, Minara Club!</Text>
              <View style={styles.profileContainer}>
                <Image
                  source={require("../images/profile.jpeg")}
                  style={styles.circleImage}
                ></Image>
              </View>
            </View>
            <View style={styles.balanceContainer}>
              <View style={styles.saldoContainer}>
                <Text style={styles.saldoLabel}>Rp </Text>
                <Text style={styles.saldoText}>
                  {isHidden ? "⬤⬤⬤⬤⬤⬤⬤⬤" : saldo}
                </Text>
              </View>
              <TouchableOpacity onPress={toggleVisibility}>
                <Image
                  source={
                    isHidden
                      ? require("../images/visible.png")
                      : require("../images/not-visible.png")
                  }
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.accountContainer}>
              <Image
                source={require("../images/solid_down.png")}
                style={{ height: 25, width: 25, marginRight: 4 }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.accountText}>1946061123</Text>
                <Text style={styles.accountLabel}>BNI Taplus Muda</Text>
              </View>
              <Image
                source={require("../images/copy.png")}
                style={{ height: 25, width: 25, marginLeft: 2 }}
              ></Image>
            </View>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.gridContainer}>
              <GridHomeMenu
                imageSource={require("../images/transfer-item.png")}
                labelText={"Transfer"}
              />
              <GridHomeMenu
                imageSource={require("../images/payment-item.png")}
                labelText={"Payment"}
              />
              <GridHomeMenu
                imageSource={require("../images/purchase-item.png")}
                labelText={"Purchase"}
              />
              <GridHomeMenu
                imageSource={require("../images/investment-item.png")}
                labelText={"Investment"}
              />
            </View>
            <View style={styles.gridContainer}>
              <GridHomeMenu
                imageSource={require("../images/life-goals-item.png")}
                labelText={"Life Goals"}
              />
              <GridHomeMenu
                imageSource={require("../images/digital-loan-item.png")}
                labelText={"Digital Loan"}
              />
              <GridHomeMenu
                imageSource={require("../images/dikado-item.png")}
                labelText={"DiKado"}
              />
              <GridHomeMenu
                imageSource={require("../images/another-menu-item.png")}
                labelText={"Another Menu"}
              />
            </View>
          </View>
          <View style={styles.pointContainer}>
            <Text style={styles.pointText}>MyPoints</Text>
            <Text style={styles.pointText}>1.946</Text>
          </View>
          <Text style={styles.eWalletsText}>My E-Wallets</Text>
          <View style={styles.myWalletContainer}>
            <View style={styles.myWalletContent}>
              <Image
                source={require("../images/link-aja-item.png")}
                style={{ width: 70, height: 70, objectFit: "contain" }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.nameLabel}>LinkAja</Text>
                <Text style={styles.nameText}>Rp 297.000</Text>
              </View>
              <Image
                source={require("../images/link-aja-item.png")}
                style={{ width: 70, height: 70, objectFit: "contain" }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.nameLabel}>LinkAja</Text>
                <Text style={styles.nameText}>Rp 297.000</Text>
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
    height: 440,
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
  },

  chatUs: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    marginLeft: 5,
  },

  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 35, // mengatur logo BNI ketengah
  },

  logo: {
    width: 132,
    height: 40,
  },

  custProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  custText: {
    color: "#FFFFFF",
    fontSize: 25,
    fontFamily: "Poppins-SemiBold",
    marginTop: 20,
  },

  profileContainer: {
    borderRadius: 50,
    overflow: "hidden",
  },

  circleImage: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginTop: 9,
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },

  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  saldoContainer: {
    flexDirection: "row"
  },

  saldoLabel: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Poppins-ExtraBold",
    marginRight: 5,
  },

  saldoText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Poppins-ExtraBold",
    letterSpacing: 3, // mengatur agar tidak ada space
  },

  icon: {
    width: 20,
    height: 20,
    marginLeft: 6,
    marginBottom: 6,
  },

  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  accountText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },

  accountLabel: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
    marginTop: -10,
  },

  menuContainer: {
    justifyContent: "center",
    marginTop: 30,
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

  gridContainer: {
    marginLeft: 21,
    marginRight: 21,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pointContainer: {
    marginTop: 10,
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pointText: {
    fontSize: 16,
    color: "#005E6A",
    fontFamily: "Poppins-Medium",
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 9,
    paddingBottom: 9,
  },

  eWalletsText: {
    fontSize: 16,
    color: "#005E6A",
    fontFamily: "Inter-SemiBold",
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 17,
    paddingBottom: 9,
  },

  myWalletContainer: {
    flexDirection: "row",
    alignItems: "center",
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

  myWalletContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 21,
    marginRight: 21,
  },

  nameLabel: {
    color: "#005E6A",
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    marginRight: 5,
  },

  nameText: {
    color: "#005E6A",
    fontSize: 16,
    fontFamily: "Inter-Bold",
  },
});

export default HomePage;
