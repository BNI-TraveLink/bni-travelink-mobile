import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import GridItem from "../components/GridMenuItem";
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
  });

  if (fontsLoaded) {
    return (
      <View style={{ flex: 1, paddingBottom: 32, backgroundColor: "#F5F5F5" }}>
        <ImageBackground
          source={require("../images/Rectangle1.png")}
          style={styles.backgroundGradient}
        >
          <View>
            <View style={styles.appBar}>
              <Image
                source={require("../images/ri_customer-service-fill.png")}
                style={{ marginRight: 5, height: 20, width: 20 }}
              />
              <Text style={styles.chatUs}>Chat Us</Text>
              <View style={styles.centerContent}>
                <Image
                  source={require("../images/logo-bni-putih.png")}
                  style={styles.logo}
                />
              </View>
              <Image
                source={require("../images/Vector.png")}
                style={{ marginRight: 8 }}
              />
              <Image source={require("../images/line-md_log-out.png")} />
            </View>
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
                      ? require("../images/hide.png")
                      : require("../images/show.png")
                  }
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.accountContainer}>
              <Image
                source={require("../images/icon-park-solid_down-one.png")}
                style={{ height: 25, width: 25, marginRight: 4 }}
              />
              <View style={{ alignItems: "center" }}>
                <Text style={styles.accountText}>1946061123</Text>
                <Text style={styles.accountLabel}>BNI Taplus Muda</Text>
              </View>
              <Image
                source={require("../images/bitcoin-icons_copy-filled.png")}
                style={{ height: 25, width: 25, marginLeft: 2 }}
              ></Image>
            </View>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.gridContainer}>
              <GridHomeMenu
                imageSource={require("../images/fa6-solid_money-bill-transfer.png")}
                labelText={"Transfer"}
              />
              <GridHomeMenu
                imageSource={require("../images/majesticons_list-box.png")}
                labelText={"Payment"}
              />
              <GridHomeMenu
                imageSource={require("../images/fontisto_shopping-basket-add.png")}
                labelText={"Purchase"}
              />
              <GridHomeMenu
                imageSource={require("../images/solar_graph-new-bold.png")}
                labelText={"Investment"}
              />
            </View>
            <View style={styles.gridContainer}>
              <GridHomeMenu
                imageSource={require("../images/octicon_goal-16.png")}
                labelText={"Life Goals"}
              />
              <GridHomeMenu
                imageSource={require("../images/game-icons_receive-money.png")}
                labelText={"Digital Loan"}
              />
              <GridHomeMenu
                imageSource={require("../images/teenyicons_gift-solid.png")}
                labelText={"DiKado"}
              />
              <GridHomeMenu
                imageSource={require("../images/fe_app-menu.png")}
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
            <View style={styles.myWalletContent}></View>
            <Image source={require("../images/Rectangle4(1).png")} />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.pointText}>LinkAja</Text>
              <Text style={styles.pointText}>Rp 297.000</Text>
            </View>
          </View>
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

  icon: {
    width: 20,
    height: 20,
    marginLeft: 6,
  },
  saldoContainer: {
    flexDirection: "row",
    alignItems: "center",
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

  myWalletText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Poppins-Regular",
  },
});

export default HomePage;
