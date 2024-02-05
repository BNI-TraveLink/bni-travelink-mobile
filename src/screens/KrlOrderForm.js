import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  Modal,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import Confirmation from "../components/Confirmation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BottomBarOrderForm from "../components/BotomBarOrderForm";
import axios from "axios";
// import { API_URL } from "@env";

const KrlOrderForm = () => {
  const [stations, setStations] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [price, setPrice] = useState(0);
  const [loginResponse, setLoginResponse] = useState([]);
  const [userId, setUserId] = useState("");

  const [selectedStation1, setSelectedStation1] = useState(null);
  const [selectedStation2, setSelectedStation2] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState(null);

  let isReorder = false;
  const [dataUsedToReorder, setDataUsedToReorder] = useState([]);

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("TraveLink");
  };

  useEffect(() => {
    const getStations = async () => {
      try {
        const storedData = await AsyncStorage.getItem("travelinkData");
        const parsedData = JSON.parse(storedData);

        const sessionData = await AsyncStorage.getItem("session");
        const parsedSessionData = JSON.parse(sessionData);
        if (parsedData && parsedSessionData) {
          setStations(parsedData.stations);
          setServiceName(parsedData.service);
          setPrice(parsedData.price);

          setLoginResponse(parsedSessionData);
          setUserId(parsedSessionData.userId);
          console.log("login response", loginResponse.userId);
          console.log("userid", userId);

        } else {
          console.log("No stations found in AsyncStorage");
        }
      } catch (error) {
        console.log("Error retrieving stations:", error);
      }
    };

    const reorder = async () => {
      try {
        const reorderData = await AsyncStorage.getItem("reorder");
        const parsedReorderData = JSON.parse(reorderData);
        setDataUsedToReorder(parsedReorderData);

        isReorder = true;

        if (isReorder) {
          setSelectedStation1(dataUsedToReorder.departure);
          setSelectedStation2(dataUsedToReorder.destination);
          setSelectedPeople(dataUsedToReorder.amount);
        }

        console.log("isReorder is true")
        console.log(selectedStation1)
        console.log(selectedStation2)
        console.log(selectedPeople)
        console.log("Done isReorder")
      } catch (error) {
        console.error("Error while getting the reorder data: ", error);
      }
    }

    getStations();
    reorder();
  }, []);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../fonts/Poppins/Poppins-Bold.ttf"),
    "Inter-Regular": require("../fonts/Inter/static/Inter-Regular.ttf"),
    "Poppins-SemiBold": require("../fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  
  const handleExchange = () => {
    const tempStation = selectedStation1;
    setSelectedStation1(selectedStation2);
    setSelectedStation2(tempStation);
  };
  
  const people = [
    { label: "1 people", value: 1 },
    { label: "2 people", value: 2 },
    { label: "3 people", value: 3 },
    { label: "4 people", value: 4 },
    { label: "5 people", value: 5 },
  ];

  const handleFormSubmit = () => {
    if (selectedStation1 && selectedStation2 && selectedPeople) {
      setIsConfirmationVisible(true);
    } else {
      setIsConfirmationVisible(false);
    }
  };

  useEffect(() => {
    handleFormSubmit();
  }, [selectedStation1, selectedStation2, selectedPeople]);

  if (fontsLoaded) {
    return (
      <ImageBackground
        source={require("../images/background-setengah.png")}
        style={styles.backgroundGradient}
      >
        <View style={styles.appBar}>
          <TouchableOpacity onPress={handleBackPress}>
            <Image
              source={require("../images/arrow-back-item.png")}
              style={{ height: 30, width: 30 }}
            />
          </TouchableOpacity>
          <View style={styles.centerContent}>
            {/* <Text style={styles.logoText}>Commuter Line</Text> */}
            <Text style={styles.logoText}>{serviceName}</Text>
          </View>
        </View>
        <View style={{ paddingLeft: 10, paddingRight: 10, height: 390 }}>
          <View>
            <View style={styles.menuContainer}>
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../images/kai-commuter-logo.png")}
                  style={styles.kaiLogo}
                />
              </View>
              <View style={[styles.contentContainer, { paddingBottom: 20 }]}>
                <Text style={styles.textContainer}>From</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../images/trainRight-item.png")}
                    style={{ height: 40, width: 40, marginTop: 15 }}
                  />
                  {stations && (
                    <Dropdown
                      placeholderStyle={styles.textSelectStation}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={stations}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      searchPlaceholder="Search..."
                      value={selectedStation1}
                      onChange={(item) => {
                        setSelectedStation1(item.value);
                      }}
                      onChangeText={(item) => {
                        setSelectedStation1(item.value);
                      }}
                      placeholder="Select Departure Station"
                      style={styles.placeholderStyle}
                    />
                  )}
                </View>
              </View>
              <View>
                <TouchableOpacity onPress={handleExchange}>
                  <Image
                    source={require("../images/exchange-line-item.png")}
                    style={{
                      height: 40,
                      width: 40,
                      marginTop: -20,
                      marginLeft: 340,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.contentContainer}>
                <Text style={[styles.textContainer, { marginTop: -10 }]}>
                  To
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../images/trainRight-item.png")}
                    style={{ height: 40, width: 40, marginTop: 15 }}
                  />
                  {stations && (
                    <Dropdown
                      placeholderStyle={styles.textSelectStation}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={stations}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      searchPlaceholder="Search..."
                      value={selectedStation2}
                      onChange={(item) => {
                        setSelectedStation2(item.value);
                      }}
                      onChangeText={(item) => {
                        setSelectedStation2(item.value);
                      }}
                      placeholder="Select Destination Station"
                      style={styles.placeholderStyle}
                    />
                  )}
                </View>
              </View>
              <View style={styles.contentContainer}>
                <Text style={styles.textContainer}>Passenger</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={require("../images/people-item.png")}
                    style={{ height: 40, width: 40, marginTop: 15 }}
                  />
                  <Dropdown
                    placeholderStyle={styles.textSelectStation}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={people}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    searchPlaceholder="Search..."
                    value={selectedPeople}
                    onChange={(item) => {
                      setSelectedPeople(item.value);
                    }}
                    onChangeText={(item) => {
                      setSelectedPeople(item.value);
                    }}
                    placeholder="Max 5 People"
                    style={styles.placeholderStyle}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <Confirmation
            // set order from krl
            isVisibleConfirm={isConfirmationVisible}
            selectedStation1={selectedStation1}
            selectedStation2={selectedStation2}
            selectedPeople={selectedPeople}
            price={price}
          />
        {/* <BottomBarOrderForm /> */}
      </ImageBackground>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};

const styles = StyleSheet.create({
  backgroundGradient: {
    paddingTop: 30,
    height: 77,
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },

  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 35,
  },

  logoText: {
    color: "white",
    fontSize: 22,
    fontFamily: "Inter-SemiBold",
  },

  menuContainer: {
    justifyContent: "center",
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
    marginTop: 20,
  },

  modalContainer: {
    position: "absolute",
    top: 200,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 0,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
  },

  //container di bawah KAI
  contentContainer: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    paddingLeft: 20,
  },

  // text untuk from to passenger
  textContainer: {
    color: "#005E6A",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    marginBottom: -15,
    marginTop: 10,
  },

  placeholderStyle: {
    borderBottomWidth: 1,
    borderColor: "#ADADAD",
    paddingVertical: 5,
    marginLeft: 10,
    width: 270,
  },

  textSelectStation: {
    fontSize: 14,
    color: "#797979",
    fontFamily: "Inter-Regular",
    marginLeft: 5,
    marginBottom: -20,
  },

  selectedTextStyle: {
    fontSize: 16,
    color: "#005E6A",
    fontFamily: "Poppins-SemiBold",
    marginBottom: -20,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default KrlOrderForm;
