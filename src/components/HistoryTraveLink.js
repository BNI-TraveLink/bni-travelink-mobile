import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const HistoryTraveLink = () => {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../fonts/Inter/static/Inter-Medium.ttf"),
    "Poppins-Regular": require("../fonts/Poppins/Poppins-Regular.ttf"),
    "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
    "Inter-Light": require("../fonts/Inter/static/Inter-Light.ttf"),
    "Poppins-SemiBold": require("../fonts/Poppins/Poppins-SemiBold.ttf"),
  });

  const handleButtonLoadMore = () => {
    console.log("Tombol ditekan!");
  };

  if (fontsLoaded) {
    return (
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Text style={styles.tittleHistory}>History</Text>
        <View style={styles.historyContainerActive}>
          <View style={styles.historyContentActive}>
            <View style={styles.listContainerActive}>
              <Image
                source={require("../images/commuter-historyItem.png")}
                style={{ height: 40, width: 40 }}
              ></Image>
              <View style={styles.textContainer}>
                <Text style={styles.tittleTraveLinkActive}>Commuter Line</Text>
                <View style={styles.destinationContainer}>
                  <Text style={styles.tittleDestinationActive}>
                    Jakarta Kota
                  </Text>
                  <Text style={styles.tittleDestinationActive}>-</Text>
                  <Text style={styles.tittleDestinationActive}>
                    Tanjung Barat
                  </Text>
                </View>
                <Text style={styles.tittleDateActive}>15 Feb, 09:35</Text>
              </View>
              <View style={styles.listRightContainer}>
                <View style={styles.activeContainerActive}>
                  <View style={styles.activeContent}>
                    <Text style={styles.tittleActive}> Active </Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.tittleOrderIDActive,
                    { marginTop: 12, marginRight: 10 },
                  ]}
                >
                  #0003
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.historyContainerUsed}>
          <View style={styles.historyContentUsed}>
            <View style={styles.listContainerUsed}>
              <Image
                source={require("../images/mrt-historyItem.png")}
                style={{ height: 40, width: 40 }}
              ></Image>
              <View style={styles.textContainer}>
                <Text style={styles.tittleTraveLinkUsed}>MRT</Text>
                <View style={styles.destinationContainer}>
                  <Text style={styles.tittleDestinationUsed}>Lebak Bulus Grab</Text>
                  <Text style={styles.tittleDestinationUsed}>-</Text>
                  <Text style={styles.tittleDestinationUsed}>
                    Dukuh Atas BNI
                  </Text>
                </View>
                <Text style={styles.tittleDateUsed}>15 Feb, 09:35</Text>
              </View>
              <View style={styles.listRightContainer}>
                <View style={styles.activeContainerUsed}>
                  <View style={styles.activeContent}>
                    <Text style={styles.tittleUsed}>  Used  </Text>
                  </View>
                </View>
                <Text
                  style={[
                    styles.tittleOrderIDUsed,
                    { marginTop: 12, marginRight: 10 },
                  ]}
                >
                  #0003
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 60}}>
          <TouchableOpacity
            style={styles.buttonLoadMore}
            onPress={handleButtonLoadMore}
          >
            <Text style={styles.tittleLoadMore}>Load More</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return <Text>Loading...</Text>;
  }
};

const styles = StyleSheet.create({
  tittleHistory: {
    color: "#005E6A",
    fontFamily: "Inter-Medium",
    fontSize: 12,
  },

  historyContainerActive: {
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

  historyContentActive: {
    marginTop: 10,
  },

  listContainerActive: {
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10
  },

  textContainer: {
    flex : 1,
  },

  destinationContainer: {
    flexDirection: "row",
    overflow: "hidden"
    // flex: 1,
    // overflow: 'hidden'
  },

  tittleTraveLinkActive: {
    color: "#FE7624",
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },

  tittleDestinationActive: {
    color: "#005E6A",
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    marginTop: 5,
  },

  tittleDateActive: {
    color: "#FE7624",
    fontFamily: "Inter-Light",
    fontSize: 10,
  },

  activeContainerActive: {
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

  tittleOrderIDActive: {
    color: "#FE7624",
    fontFamily: "Inter-Regular",
    fontSize: 10,
  },

  listRightContainer: {
    alignItems: "flex-end",
  },

  tittleTraveLinkUsed: {
    color: "#696969",
    fontFamily: "Poppins-Regular",
    fontSize: 11,
  },

  tittleDestinationUsed: {
    color: "#696969",
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    marginTop: 5,
  },

  tittleDateUsed: {
    color: "#797979",
    fontFamily: "Inter-Light",
    fontSize: 10,
  },

  activeContainerUsed: {
    backgroundColor: "#D2D2D2",
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

  tittleUsed: {
    color: "#696969",
    fontFamily: "Inter-Medium",
    fontSize: 12,
  },

  tittleOrderIDUsed: {
    color: "#797979",
    fontFamily: "Inter-Regular",
    fontSize: 10,
  },

  historyContainerUsed: {
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

  historyContentUsed: {
    marginTop: 10,
  },

  listContainerUsed: {
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 10
  },

  buttonLoadMore: {
    backgroundColor: "#FE7624",
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    width: "40%",
    height: 40,
  },

  tittleLoadMore: {
    color: "#FFFFFF",
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
});

export default HistoryTraveLink;
