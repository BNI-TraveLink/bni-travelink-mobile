import React, { useEffect, useRef, useState } from "react";
import GradientBackground from "../components/GradientBackground";
import { Animated, View, Text, Image, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { useNavigation } from "@react-navigation/native";

const InterRegular = require("../fonts/Inter/static/Inter-Regular.ttf");

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const [fontLoaded, setFontLoaded] = useState(false); // State untuk mengontrol apakah font sudah terload atau belum

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "Inter-Regular": InterRegular,
      });
      setFontLoaded(true);
    };

    loadFont();
  }, []);

  useEffect(() => {
    if (fontLoaded) {
      const fadeOut = Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      });

      const timer = setTimeout(() => {
        navigation.replace("FirstLogin");
      }, 3000);

      return () => {
        clearTimeout(timer);
        fadeOut.stop();
      };
    }
  }, [fadeAnim, fontLoaded, navigation]);

  return (
    <GradientBackground>
      {fontLoaded && (
        <Animated.View
          style={[
            styles.container,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <View style={styles.container}>
            <Image
              source={require("../images/logo46.png")}
              style={[styles.icon, { position: "absolute", top: -15 }]}
            />
            <Image
              source={require("../images/logolengkapbni.png")}
              style={[styles.iconbni, { position: "absolute", top: -15 }]}
            />
            <Image
              source={require("../images/logolps.png")}
              style={[styles.iconlps, { position: "absolute", top: -15 }]}
            />
            <Text style={[styles.text, { fontFamily: "Inter-Regular" }]}>
              PT Bank Negara Indonesia (Persero) Tbk. berizin dan diawasi oleh
              Otoritas Jasa Keuangan (OJK) serta merupakan peserta penjamin
              Lembaga Penjamin Simpanan (LPS)
            </Text>
            <Text style={[styles.hakcipta, { fontFamily: "Inter-Regular" }]}>
              Hak Cipta ⓒ 2023 BNI Mobile Banking
            </Text>
          </View>
        </Animated.View>
      )}
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 390,
    height: 361,
  },
  iconbni: {
    width: 188,
    height: 70,
    marginTop: 291,
    marginBottom: 483,
    marginLeft: 104,
    marginRight: 97.78,
  },
  iconlps: {
    width: 80,
    height: 80,
    marginTop: 571,
    marginBottom: 193,
    marginLeft: 155,
    marginRight: 155,
  },
  text: {
    width: 297,
    height: 20,
    color: "#696969",
    fontSize: 7,
    textAlign: "center",
    marginTop: 627,
    marginBottom: 1,
  },
  hakcipta: {
    width: 297,
    height: 10,
    color: "#696969",
    fontSize: 7,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 165,
    paddingHorizontal: 50,
  },
});

export default SplashScreen;
