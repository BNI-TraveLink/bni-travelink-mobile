import React, { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useFonts } from "expo-font";
import GridHomeMenu from "../components/GridHomeMenu";
import { useNavigation } from "@react-navigation/native";
import BottomBarPage from "../components/BottomBar";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomePage = ({ selectedStation1, selectedStation2 }) => {
  const [isHidden, setIsHidden] = useState(false);
  // const [saldo, setSaldo] = useState(0);
  const saldo = 10000000;

  // useEffect(() => {
  //   const getUserBalance = async () => {
  //     console.log("USE EFFECT MASUKKK!!!");
  //     try {
  //       console.log("masuk ke tryyyyy");
  //       const sessionData = await AsyncStorage.getItem("session");
  //       const parsedData = JSON.parse(sessionData);
  //       const userId = parsedData.userId;

  //       console.log("userid: " + userId);

  //       const response = await axios.get(
  //         "http://192.168.132.20:8081/balance/getBalanceByUserId/userId",
  //         {
  //           params: { userId },
  //         }
  //       );

  //       console.log("==response==");
  //       console.log(response.data);
  //       console.log("=============");

  //       // const saldo = response.data.balance;
  //       setSaldo(response.data.balance);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getUserBalance();
  // }, []);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const navigation = useNavigation();

  const handleLogOutPress = () => {
    navigation.navigate("FirstLogin");
  };

  const handlePurchasePress = () => {
    navigation.navigate("Purchase");
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../fonts/Poppins/Poppins-Medium.ttf"),
    "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
    "Inter-Medium": require("../fonts/Inter/static/Inter-Medium.ttf"),
    "Inter-Bold": require("../fonts/Inter/static/Inter-Bold.ttf"),
    "Inter-Regular": require("../fonts/Inter/static/Inter-Regular.ttf"),
    "Inter-Light": require("../fonts/Inter/static/Inter-Light.ttf"),
  });

  if (fontsLoaded) {
    return (
      <ImageBackground
        source={require("../images/background-container-full.png")}
        style={styles.backgroundGradient}
      >
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
          <TouchableOpacity onPress={handleLogOutPress}>
            <Image
              source={require("../images/log-out.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
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
                <TouchableOpacity onPress={handlePurchasePress}>
                  <GridHomeMenu
                    imageSource={require("../images/purchase-item.png")}
                    labelText={"Purchase"}
                  />
                </TouchableOpacity>
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
            <Text style={styles.titleBNITraveLink}>My BNI TraveLink</Text>
            <View style={styles.myTravelinkContainer}>
              <View
                style={{
                  marginLeft: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginTop: 12,
                }}
              >
                <GridHomeMenu
                  imageSource={require("../images/travelink-item.png")}
                />
                <View style={{ marginLeft: -70, marginTop: 20 }}>
                  <Text style={styles.tittleCommuterLine}>Commuter Line</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.tittleDestination}>Jakarta</Text>
                    <Text style={styles.tittleDestination}> - </Text>
                    <Text style={styles.tittleDestination}>Tanjung Barat</Text>
                  </View>
                  <Text style={styles.tittleValid}>
                    Valid until 15 Feb 2024, 23:59
                  </Text>
                </View>
                <View
                  style={[
                    styles.activeContainer,
                    { marginTop: 10, marginRight: 15 },
                  ]}
                >
                  <Text style={styles.tittleActive}>Active</Text>
                </View>
              </View>
            </View>
            <Text style={styles.eWalletsText}>My E-Wallets</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flexDirection: "row", marginBottom: 10 }}>
                <View style={styles.myWalletContainer}>
                  <View style={styles.myWalletContent}>
                    <Image
                      source={require("../images/gopay-item.png")}
                      style={{ width: 60, height: 60, objectFit: "contain" }}
                    />
                    <View style={{ marginLeft: 5 }}>
                      <Text style={styles.nameLabel}>Go-Pay</Text>
                      <Text style={styles.nameText}>Rp 11.023</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.myWalletContainer, { marginLeft: 10 }]}>
                  <View style={styles.myWalletContent}>
                    <Image
                      source={require("../images/linkaja-item.png")}
                      style={{ width: 60, height: 60, objectFit: "contain" }}
                    />
                    <View style={{ marginLeft: 5 }}>
                      <Text style={styles.nameLabel}>LinkAja</Text>
                      <Text style={styles.nameText}>Rp 297.000</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.myWalletContainer, { marginLeft: 10 }]}>
                  <View style={styles.myWalletContent}>
                    <Image
                      source={require("../images/ovo-item.png")}
                      style={{ width: 60, height: 60, objectFit: "contain" }}
                    />
                    <View style={{ marginLeft: 5 }}>
                      <Text style={styles.nameLabel}>OVO</Text>
                      <Text style={styles.nameText}>Rp 19.460</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.myWalletContainer, { marginLeft: 10 }]}>
                  <View style={styles.myWalletContent}>
                    <Image
                      source={require("../images/dana-item.png")}
                      style={{ width: 60, height: 60, objectFit: "contain" }}
                    />
                    <View style={{ marginLeft: 5 }}>
                      <Text style={styles.nameLabel}>DANA</Text>
                      <Text style={styles.nameText}>Rp 26.297</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
            <Text style={styles.promoText}>Promotions & Information</Text>
            <ScrollView horizontal={true} showsVerticalScrollIndicator={false}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../images/promo1.png")}
                  style={styles.promoContent}
                />
                <Image
                  source={require("../images/promo2.png")}
                  style={[styles.promoContent, { marginLeft: 10 }]}
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        {/* <BottomBarPage /> */}
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  backgroundGradient: {
    paddingTop: 30,
    flex: 1,
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    // backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // elevation: 2,
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
    flexDirection: "row",
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
    padding: 10,
    width: 165,
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
    alignItems: "center",
  },

  nameLabel: {
    color: "#005E6A",
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    marginRight: 5,
    alignItems: "center",
  },

  nameText: {
    color: "#005E6A",
    fontSize: 16,
    fontFamily: "Inter-Bold",
    marginTop: -3,
  },

  promoText: {
    fontSize: 16,
    color: "#005E6A",
    fontFamily: "Inter-SemiBold",
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 5,
    paddingBottom: 9,
  },

  promoContent: {
    width: 245,
    height: 124,
  },

  myTravelinkContainer: {
    justifyContent: "center",
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
    height: 100,
  },

  tittleCommuterLine: {
    color: "#005E6A",
    fontSize: 13,
    fontFamily: "Inter-Regular",
  },

  tittleDestination: {
    color: "#005E6A",
    fontSize: 14,
    fontFamily: "Inter-SemiBold",
    marginTop: 5,
    marginBottom: 5,
  },

  tittleValid: {
    color: "#F15A23",
    fontSize: 10,
    fontFamily: "Inter-Light",
  },

  activeContainer: {
    justifyContent: "center",
    backgroundColor: "#A1E496",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  tittleActive: {
    color: "#005E6A",
    fontSize: 14,
    fontFamily: "Inter-Medium",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },

  titleBNITraveLink: {
    fontSize: 16,
    color: "#005E6A",
    fontFamily: "Inter-SemiBold",
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 17,
    paddingBottom: 9,
  },
});

export default HomePage;
