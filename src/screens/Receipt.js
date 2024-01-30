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
const Receipt = () => {
  const [fontsLoaded] = useFonts({
    [fontTheme.regular]: require("../fonts/Inter/static/Inter-Regular.ttf"),
    [fontTheme.medium]: require("../fonts/Inter/static/Inter-Medium.ttf"),
  });

  const navigation = useNavigation();

  if (!fontsLoaded) {
    // You can return an empty View or null for now, as we are only interested in the app bar
    return null;
  }

  const handleTicketDetails = () => {
    // Handle logic when the Pay button is pressed
    // For now, let's navigate to a new page named "PaymentSuccess"
    navigation.navigate("TicketDetails");
  };
  const handleHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {/* App Bar Image */}
      <Image
        source={require("../images/bar_purchase.png")}
        style={styles.PurchaseImage}
      />

      {/* App Bar */}
      <View style={styles.appBarContainer}>
        {/* Title (Purchase) */}
        <Text style={styles.title}>Status</Text>
        <TouchableOpacity onPress={handleHome}>
          {/* Left Icon (Back Arrow) */}
          <Image
            source={require("../images/ic_round-home.png")}
            style={styles.homeImage}
          />
        </TouchableOpacity>
      </View>

      {/* Image in the middle below App Bar */}
      <View style={styles.centeredImageContainer}>
        <Image
          source={require("../images/box-fitur-utama.png")}
          style={styles.boxfiturImage}
        />

        <Image
          source={require("../images/clarity_success-standard-solid.png")}
          style={styles.successImage}
        />
        <Text style={styles.transactionsuccessText}>
          Transaction Successful
        </Text>
        <View style={styles.paymentContainer}>
          <View style={styles.paymentConfirmationRow}>
            <Text style={styles.paymentConfirmationLabel}>Type of Service</Text>
            <Text
              style={[
                styles.paymentConfirmationValue,
                styles.rightAlign,
                styles.interSemiBold,
                { maxWidth: 200 },
              ]}
            >
              Commuter Line
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
          <View style={styles.paymentConfirmationRow}>
            <Text style={styles.paymentConfirmationLabel}>Journal ID</Text>
            <Text
              style={[
                styles.paymentConfirmationValue,
                styles.rightAlign,
                styles.interRegular,
              ]}
            >
              930081
            </Text>
          </View>
          <View style={styles.paymentConfirmationRow}>
            <Text style={styles.paymentConfirmationLabel}>
              Transaction Date
            </Text>
            <Text
              style={[
                styles.paymentConfirmationValue,
                styles.rightAlign,
                styles.interRegular,
              ]}
            >
              15 Feb 2023
            </Text>
          </View>
          <View style={styles.paymentConfirmationRow}>
            <Text style={styles.paymentConfirmationLabel}>
              Transaction Time
            </Text>
            <Text
              style={[
                styles.paymentConfirmationValue,
                styles.rightAlign,
                styles.interRegular,
              ]}
            >
              09:35:41 WIB
            </Text>
          </View>
          <View style={styles.paymentConfirmationRow}>
            <Text style={styles.paymentConfirmationLabel}>Account</Text>
            <Text
              style={[
                styles.paymentConfirmationValue,
                styles.rightAlign,
                styles.interRegular,
              ]}
            >
              1946061123
            </Text>
          </View>
          <View style={styles.paymentConfirmationRow}>
            <Text style={styles.paymentConfirmationLabel}>Price</Text>
            <Text
              style={[
                styles.paymentConfirmationValue,
                styles.rightAlign,
                styles.interRegular,
              ]}
            >
              Rp 15.000
            </Text>
          </View>
          <View style={styles.paymentConfirmationRow}>
            <Text style={styles.paymentConfirmationLabel}>Admin Fee</Text>
            <Text
              style={[
                styles.paymentConfirmationValue,
                styles.rightAlign,
                styles.interRegular,
              ]}
            >
              0
            </Text>
          </View>
          <View style={styles.paymentConfirmationRow}>
            <View style={styles.blueOverlay}></View>
            <Text style={styles.paymentConfirmationLabel}>Total Payment</Text>

            <Text
              style={[
                styles.paymentConfirmationValue,
                styles.rightAlign,
                styles.interRegular,
              ]}
            >
              Rp 15.000
            </Text>
          </View>
        </View>
        {/* Additional Image */}
      </View>

      {/* White background at the bottom with a button */}
      <View style={styles.bottomWhiteBackground}>
        <View style={styles.buttonContainerRow}>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.downloadText}>Download</Text>
            <Image
              source={require("../images/material-symbols_download.png")}
              style={styles.downloadImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.shareText}>Share</Text>
            <Image
              source={require("../images/material-symbols_share.png")}
              style={styles.shareImage}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonbottomContainer}
          onPress={handleTicketDetails} // Menambahkan onPress event untuk menangani pembayaran
        >
          <Text style={styles.buttonbottomText}>Ticket Details</Text>
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
    top: 55,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  backArrow: {
    position: "absolute",
    left: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: fontTheme.semiBold,
    // marginRight: 20,
    marginLeft: 150,
  },
  centeredImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

  bottomWhiteBackground: {
    width: 390,
    height: 147,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",

    alignItems: "center",
  },
  buttonbottomContainer: {
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
  buttonbottomText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Inter-SemiBold",
    paddingHorizontal: 103,
    top: 4,
    fontWeight: "bold",
  },
  homeImage: {
    // position: "absolute",
    marginTop: -5,
    marginLeft: 120,
    width: 30,
    height: 30,
  },
  boxfiturImage: {
    marginTop: 428,
    marginBottom: 50,
    marginLeft: 15,
    marginRight: 15,
    paddingHorizontal: 31,
    width: 362,
    height: 545,
  },
  successImage: {
    position: "absolute",
    width: 70,
    height: 70,
    // marginBottom: 200,
    top: 45,
  },
  transactionsuccessText: {
    position: "absolute",
    color: "#005E6A",
    fontSize: 16,
    fontWeight: "600",
    top: 120,
  },
  paymentConfirmationRow: {
    // position: "absolute",

    paddingTop: 13,
    bottom: 462,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
  },
  paymentConfirmationLabel: {
    // position: "absolute",
    marginLeft: 120,
    right: 100,
    fontSize: 14,
    textAlign: "left",
    color: "#005E6A",
    paddingHorizontal: 17,
    fontWeight: "500",
  },
  paymentConfirmationValue: {
    // position: "absolute",
    marginRight: 40,
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
  },
  buttonContainerRow: {
    flexDirection: "row",
    // justifyContent: "space-between",
    // width: "100%",
    marginBottom: 20,
    left: -8,
    // paddingHorizontal: 10,
  },
  buttonContainer: {
    width: 173,
    height: 40,
    // width: 362,
    // height: 49,
    backgroundColor: "#FFFFFF", // Adjust the color as needed
    borderColor: "#FE7624", // Border color (blue)
    borderWidth: 2, // Border width
    paddingVertical: 10,
    // paddingHorizontal: 20,
    borderRadius: 20,
    marginLeft: 15,
  },
  downloadText: {
    color: "#F15A23",
    fontSize: 16,
    marginLeft: 60,
  },
  shareText: {
    color: "#F15A23",
    fontSize: 16,
    marginLeft: 70,
  },
  downloadImage: {
    width: 30,
    height: 30,
    bottom: 23,
    left: 10,
  },
  shareImage: {
    width: 25,
    height: 25,
    bottom: 21,
    left: 10,
  },
  blueOverlay: {
    width: 304,
    height: 23,
    position: "absolute",
    backgroundColor: "rgba(197, 229, 235, 1)", // Adjust the color and opacity as needed
    top: 10,
    bottom: 0,
    left: 35,
    right: 0,
    borderRadius: 0,
  },
});

export default Receipt;
