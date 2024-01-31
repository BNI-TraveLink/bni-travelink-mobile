import { useFonts } from "expo-font";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { View } from "react-native";
import GridHomeMenu from "../components/GridHomeMenu";
import { useNavigation } from "@react-navigation/native";
import HistoryTraveLink from "../components/HistoryTraveLink";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TraveLink = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate("Purchase");
  };

  const handleCommuterPress = async () => {
    try {
      const url = 'http://192.168.132.20:8081/service/getStationByServiceName';

      const response = await axios.get(url, {
        params: {
          serviceName: 'KRL',
        },
      });

      const stations = response.data.map((station) => ({
        label: station.station_name,
        value: station.station_name,
      }));

      await AsyncStorage.setItem('stations', JSON.stringify(stations));

      await navigation.navigate("KrlOrderForm")
    } catch (error) {
      console.error('Error hitting the API:', error);
    }
  };


  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../fonts/Inter/static/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
  });

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
            <Text style={styles.logoText}>BNI TraveLink</Text>
          </View>
        </View>
        <View style={{ paddingLeft: 10, paddingRight: 10 }}>
          <View>
            <View style={styles.menuContainer}>
              <View style={styles.gridContainer}>
                <TouchableOpacity onPress={handleCommuterPress}>
                  <GridHomeMenu
                    imageSource={require("../images/commuter-item.png")}
                    labelText={"Commuter"}
                  />
                </TouchableOpacity>
                <GridHomeMenu
                  imageSource={require("../images/tije-item.png")}
                  labelText={"TiJe"}
                />
                <GridHomeMenu
                  imageSource={require("../images/mrt-item.png")}
                  labelText={"MRT"}
                />
                <GridHomeMenu
                  imageSource={require("../images/lrt-item.png")}
                  labelText={"LRT"}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <HistoryTraveLink />
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  backgroundGradient: {
    paddingTop: 30,
    height: 77,
    flex: 1
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

  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: 35, // mengatur logo BNI ketengah
  },

  logoText: {
    color: "white",
    fontSize: 22,
    fontFamily: "Inter-SemiBold",
  },

  menuContainer: {
    justifyContent: "center",
    marginTop: 17,
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
});

export default TraveLink;
