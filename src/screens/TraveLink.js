import { useFonts } from "expo-font";
import { Image, ImageBackground, StyleSheet } from "react-native";
import { View } from "react-native";
import GridHomeMenu from "../components/GridHomeMenu";

const TraveLink = () => {
  const [fontsLoaded] = useFonts({
    "Inter-Medium": require("../fonts/Inter/static/Inter-Medium.ttf"),
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
              source={require("../images/arrow-back-item.png")}
              style={{ height: 30, width: 30 }}
            />
            <View style={styles.centerContent}>
              <Image
                source={require("../images/logobniputih.png")}
                style={styles.logo}
              />
            </View>
          </View>
          <View>
            <View style={styles.menuContainer}>
              <View style={styles.gridContainer}>
                <GridHomeMenu
                  imageSource={require("../images/commuter-item.png")}
                  labelText={"Commuter"}
                />
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
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  backgroundGradient: {
    paddingTop: 45,
    height: 88,
  },

  appBar: {
    flexDirection: "row",
    alignItems: "center",
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
