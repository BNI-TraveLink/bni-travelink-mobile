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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomBarPage from "../components/BottomBarPage";
import moment from 'moment';

import Constants from "expo-constants";
const apiUrl = Constants.manifest.extra.API_URL;

let lastTicket = null;

const HomePage = () => {
  const [isHidden, setIsHidden] = useState(false);

  const [saldo, setSaldo] = useState(0);
  const [userData, setUserData] = useState("");

  const [stations, setStations] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      lastTicket = null;
      try {
        // 1. Get the balance first
        const balanceSessionData = await AsyncStorage.getItem("balance");
        const parsedBalanceData = JSON.parse(balanceSessionData);
        setSaldo(parsedBalanceData.toString());

        // 2. Then, get the session data
        const sessionData = await AsyncStorage.getItem("session");
        const parsedSessionData = JSON.parse(sessionData);
        setUserData(parsedSessionData);

        // 3. Get the last ticket transaction
        const lastTicketTransaction = await AsyncStorage.getItem("lastTicketTransaction");
        const parsedLastTicketTransaction = JSON.parse(lastTicketTransaction);
        lastTicket = parsedLastTicketTransaction;
      } catch (error) {
        console.log("Error fetching data: " + error);
      }
    };

    getUserData();
  }, []);

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

  const handleHistoryActive = async () => {
    await AsyncStorage.setItem("transaction", JSON.stringify(lastTicket));
    navigation.navigate("EticketIn");
  };

  const handleHistoryReorder = async () => {
    setStations([]);

    try {
      await AsyncStorage.setItem("reorder", JSON.stringify(lastTicket));
      await getListStations(lastTicket.service.name);
      navigation.navigate("KrlOrderForm");
    } catch (error) {
      console.log('Error hitting the API:', error);
    }
  };

  const getListStations = async (travelinkService) => {
    const url = `${apiUrl}/service/getStationByServiceName`;

    try {
      const response = await axios.get(url, {
        params: {
          serviceName: travelinkService,
        },
      });

      const newStations = response.data.map((station) => ({
        label: station.station_name,
        value: station.station_name,
      }));

      setStations(newStations);

      const dataToSave = {
        service: travelinkService,
        stations: newStations, // Use the updated stations
        price: response.data[0].fkService.price
         };

      await AsyncStorage.setItem('travelinkData', JSON.stringify(dataToSave));
    } catch (error) {
      console.log('Error getting station data:', error);
      throw error; // Rethrow the error to be caught in handleMrtPress
    }
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("../fonts/Poppins/Poppins-ExtraBold.ttf"),
    "Poppins-Medium": require("../fonts/Poppins/Poppins-Medium.ttf"),
    "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
    "Inter-Medium": require("../fonts/Inter/static/Inter-Medium.ttf"),
    "Inter-Bold": require("../fonts/Inter/static/Inter-Bold.ttf"),
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
              {/* <Text style={styles.custText}>Hello, Minara Club!</Text> */}
              <Text style={styles.custText}>Hello, {userData.userId}!</Text>
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
                <Text style={styles.accountText}>{userData.accountNumber}</Text>
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
            {
              lastTicket != null
              ? (
              <View>
                <Text style={styles.tittleBNITraveLink}>My BNI TraveLink</Text>
                {/* <TouchableOpacity onPress={lastTicket.active ? handleHistoryActive : handleHistoryReorder}> */}
                <TouchableOpacity onPress={lastTicket.active ? handleHistoryReorder : handleHistoryActive}>
                  <View style={styles.historyContainer}>
                    <View style={styles.historyContent}>
                      <View style={styles.listContainer}>
                        <Image
                          source={require("../images/commuter-historyItem.png")}
                          style={{ height: 40, width: 40 }}
                        ></Image>
                        <View style={styles.textContainer}>
                          <Text style={styles.tittleTraveLink}>{lastTicket.service.name}</Text>
                          <View style={styles.destinationContainer}>
                            <Text style={styles.tittleDestination}>
                              {/* Jakarta Kota */}
                              {lastTicket.departure}
                            </Text>
                            <Text style={styles.tittleDestination}>-</Text>
                            <Text style={styles.tittleDestination}>
                              {/* Tanjung Barat */}
                              {lastTicket.destination}
                            </Text>
                          </View>
                          <Text style={styles.tittleDate}>
                            {/* Valid until 15 Feb 2024, 23.59 */}
                            Valid until {moment(lastTicket.expiredAt).format('D MMM YYYY,').concat(' 00.00')}
                          </Text>
                        </View>
                        <View style={styles.listRightContainer}>
                          {/* <View style={lastTicket.active ? styles.activeContainer : styles.reorderContainer}>
                            <View style={lastTicket.active ? styles.activeContainer : styles.reorderContainer}> */}
                          <View style={styles.activeContainer}>
                            <View style={styles.activeContainer}>
                              <Text style={styles.tittleActive}> {lastTicket.active ? "Active" : "Reorder"} </Text>
                            </View>
                          </View>
                          <Text
                            style={[
                              styles.tittleOrderID,
                              { marginTop: 12, marginRight: 10 },
                            ]}
                          >
                            #{lastTicket.amount.toString().padStart(4, '0')}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              ) :
              null
            }
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
        <BottomBarPage />
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

  tittleBNITraveLink: {
    fontSize: 16,
    color: "#005E6A",
    fontFamily: "Inter-SemiBold",
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 17,
  },

  historyContainer: {
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
    marginTop: 10,
  },

  historyContent: {
    marginTop: 10,
  },

  listContainer: {
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  textContainer: {
    marginLeft: 10,
  },

  destinationContainer: {
    flexDirection: "row",
  },

  tittleTraveLink: {
    color: "#FE7624",
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },

  tittleDestination: {
    color: "#005E6A",
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    marginTop: 5,
  },

  tittleDate: {
    color: "#FE7624",
    fontFamily: "Inter-Light",
    fontSize: 10,
  },

  activeContainer: {
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

  activeContent: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },

  tittleActive: {
    color: "#005E6A",
    fontFamily: "Inter-Medium",
    fontSize: 12,
  },

  tittleOrderID: {
    color: "#FE7624",
    fontFamily: "Inter-Regular",
    fontSize: 10,
  },

  listRightContainer: {
    alignItems: "flex-end",
    marginLeft: 115,
  },

  reorderContainer: {
    backgroundColor: "#82E5F2",
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

  reorderContent: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },

  tittleReorder: {
    color: "#005E6A",
    fontFamily: "Inter-Medium",
    fontSize: 12,
  },
});

export default HomePage;
