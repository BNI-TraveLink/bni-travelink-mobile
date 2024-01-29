import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const fontTheme = {
  regular: "Inter-Regular",
  medium: "Inter-Medium",
  semiBold: "Inter-SemiBold",
};
const TicketDetails = () => {
  const [fontsLoaded] = useFonts({
    [fontTheme.regular]: require("../fonts/Inter/static/Inter-Regular.ttf"),
    [fontTheme.medium]: require("../fonts/Inter/static/Inter-Medium.ttf"),
  });

  // const [fontsLoaded] = useFonts({
  //   "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
  //   "Inter-Regular": require("../fonts/Inter/static/Inter-Regular.ttf"),
  // });
  const navigation = useNavigation();

  if (!fontsLoaded) {
    // You can return an empty View or null for now, as we are only interested in the app bar
    return null;
  }

  const handleBack = () => {
    // Handle logic when the Pay button is pressed
    // For now, let's navigate to a new page named "PaymentSuccess"
    navigation.navigate("Receipt");
  };
  //   const handlePay = () => {
  //     // Handle logic when the Pay button is pressed
  //     // For now, let's navigate to a new page named "PaymentSuccess"
  //     navigation.navigate("Receipt");
  //   };

  return (
    <View style={styles.container}>
      {/* App Bar Image */}
      <Image
        source={require("../images/bar_purchase.png")}
        style={styles.PurchaseImage}
      />

      {/* App Bar */}
      <View style={styles.appBarContainer}>
        <TouchableOpacity onPress={handleBack}>
          {/* Left Icon (Back Arrow) */}
          <Image
            source={require("../images/ion_arrow-back.png")}
            style={styles.backArrowImage}
          />
        </TouchableOpacity>

        {/* Title (Purchase) */}
        <Text style={styles.title}>Ticket Details</Text>
        <TouchableOpacity>
          {/* Left Icon (Back Arrow) */}
          <Image
            source={require("../images/ic_round-home.png")}
            style={styles.homeImage}
          />
        </TouchableOpacity>
      </View>

      {/* Image in the middle below App Bar */}
      {/* <View style={styles.centeredImageContainer}> */}
      {/* White background for payment confirmation data with shadow */}
      <View style={styles.paymentContainer}>
        <Image
          source={require("../images/logo_krl.png")}
          style={styles.krlImage}
        />
        <View style={styles.paymentConfirmationRow}>
          <Text style={styles.paymentConfirmationLabel}>Status</Text>
          <Text
            style={[
              styles.paymentConfirmationValue,
              styles.rightAlign,
              styles.interSemiBold,
              { maxWidth: 200, color: "#2AC111" },
            ]}
          >
            Successful
          </Text>
        </View>
        <View style={styles.paymentConfirmationRow}>
          <Text style={styles.paymentConfirmationLabel}>Transaction Date</Text>
          <Text
            style={[
              styles.paymentConfirmationValue,
              styles.rightAlign,
              styles.interRegular,
            ]}
          >
            15 Feb 2024 09:35:41 WIB
          </Text>
        </View>
        <View style={styles.paymentConfirmationRow}>
          <Text style={styles.paymentConfirmationLabel}>Order ID</Text>
          <Text
            style={[
              styles.paymentConfirmationValue,
              styles.rightAlign,
              styles.interRegular,
            ]}
          >
            0001
          </Text>
        </View>
      </View>
      {/* </View> */}

      {/* Image in the middle below App Bar */}
      <View style={styles.orderdetailContainer}>
        {/* White background for payment confirmation data with shadow */}
        <View style={styles.orderContainer}>
          <Text style={styles.orderText}>Order Details</Text>
        </View>

        <View style={styles.location}></View>
        <View style={styles.commuterline}>
          <View style={styles.orderDetailsRow}>
            <Text style={styles.orderDetailsLabel}>Commuter Line</Text>
            <Text
              style={[
                styles.orderDetailsValue,
                styles.rightAlign,
                styles.interRegular,
              ]}
            >
              5 Tickets
            </Text>
          </View>
        </View>
        <View style={styles.locationContainer}>
          <Image
            source={require("../images/location.png")}
            style={styles.locationImage}
          />
          <Text style={styles.fromText}>Jakarta Kota</Text>
          <Text style={styles.toText}>Tanjung Barat</Text>
          <Text style={styles.validText}>Valid until 15 Feb 2024, 23.59</Text>
        </View>
      </View>
      {/* White background at the bottom with a button */}
      <View style={styles.bottomWhiteBackground}>
        <TouchableOpacity
          style={styles.buttonContainer}
          //   onPress={handlePay} // Menambahkan onPress event untuk menangani pembayaran
        >
          <Text style={styles.buttonText}>Open E-Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  PurchaseImage: {
    width: "100%",
    height: 88,
    resizeMode: "cover",
  },
  appBarContainer: {
    position: "absolute",
    top: 50,
    left: 15,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    position: "absolute",
    left: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: fontTheme.semiBold,
    marginRight: 140,
  },
  homeImage: {
    // position: "absolute",
    marginTop: -5,
    marginLeft: -50,

    width: 30,
    height: 30,
  },
  centeredImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredImage: {
    width: 57.83,
    height: 58,
    top: 150,
    marginBottom: 20,
    resizeMode: "cover",
  },

  paymentContainer: {
    backgroundColor: "#FFFFFF",
    width: 394,
    height: 156,
    marginTop: 30,
    marginLeft: 0,
    marginRight: 10,
    marginBottom: 275,
  },
  paymentConfirmationRow: {
    top: 60,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  paymentConfirmationLabel: {
    fontSize: 14,
    textAlign: "left",
    color: "#005E6A",
  },
  paymentConfirmationValue: {
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
  },
  rightAlign: {
    textAlign: "right",
  },
  interSemiBold: {
    fontFamily: fontTheme.semiBold,
  },
  interRegular: {
    fontFamily: fontTheme.regular,
  },

  icon: {
    marginLeft: 5,
    marginBottom: 14,
  },
  backArrowImage: {
    width: 30,
    height: 30,
    marginRight: 100,
  },
  VectorImage: {
    width: 13.33,
    height: 17.5,
    // marginBottom: 15,
    marginLeft: 70,
    marginRight: 10,
  },

  bottomWhiteBackground: {
    width: 390,
    height: 98,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 362,
    height: 49,
    backgroundColor: "#F15A23", // Adjust the color as needed
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    paddingHorizontal: 100,
    top: 4,
    fontWeight: "500",
  },

  orderdetailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  orderContainer: {
    backgroundColor: "#FFFFFF",
    width: 394,
    height: 572,
    marginTop: -150,
    marginLeft: 0,
    marginRight: 10,
    marginBottom: 0,
  },
  krlImage: {
    position: "absolute",
    width: 109.17,
    height: 40,
    top: 10,
    marginLeft: 145,
    resizeMode: "cover",
  },
  orderText: {
    fontSize: 20,
    marginLeft: 145,
    marginTop: 15,
    fontWeight: "600",
    color: "#005E6A",
  },
  location: {
    position: "absolute",
    backgroundColor: "rgba(0, 162, 183, 0.07)",
    width: 362,
    height: 163,
    top: -235,
    marginTop: 30,
    marginLeft: 0,
    marginRight: 10,
    // marginBottom: 675,
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 5,
  },
  commuterline: {
    backgroundColor: "#00A2B7",
    position: "absolute",
    width: 362,
    height: 34,
    top: -210,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 10,
  },
  orderDetailsLabel: {
    top: 10,
    marginLeft: 15,
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  orderDetailsValue: {
    top: -3,
    marginRight: 20,
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "600",
  },
  locationImage: {
    top: 52,
    width: 20,
    height: 79,
    marginLeft: 25,
  },
  fromText: {
    color: "#005E6A",
    fontSize: 14,
    fontWeight: "600",
    top: -22,
    marginLeft: 132,
    marginBottom: 16,
  },
  toText: {
    color: "#005E6A",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 140,
    top: 6,
  },
  validText: {
    color: "#F15A23",
    fontSize: 10,
    fontWeight: "500",
    marginLeft: 194,
    marginTop: 15,
  },
  locationContainer: {
    top: -210,
    left: -130,
    right: 180,
    position: "absolute",
    alignItems: "center",
    marginBottom: 0,
  },
});

export default TicketDetails;
