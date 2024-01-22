// import React from "react";
// import { ImageBackground, View, Image, Text, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { useFonts } from "expo-font";
// import GridHomeMenu from "../components/GridHomeMenu";

// const Purchase = () => {
//   const [fontsLoaded] = useFonts({
//     "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
//   });

//   if (!fontsLoaded) {
//     return (
//       <View style={styles.menuContainer}>
//         <View style={styles.gridContainer}>
//           <GridHomeMenu
//             imageSource={require("../images/transfer-item.png")}
//             labelText={"Transfer"}
//           />
//           <GridHomeMenu
//             imageSource={require("../images/payment-item.png")}
//             labelText={"Payment"}
//           />
//           <GridHomeMenu
//             imageSource={require("../images/purchase-item.png")}
//             labelText={"Purchase"}
//           />
//           <GridHomeMenu
//             imageSource={require("../images/investment-item.png")}
//             labelText={"Investment"}
//           />
//         </View>
//         <View style={styles.gridContainer}>
//           <GridHomeMenu
//             imageSource={require("../images/life-goals-item.png")}
//             labelText={"Life Goals"}
//           />
//           <GridHomeMenu
//             imageSource={require("../images/digital-loan-item.png")}
//             labelText={"Digital Loan"}
//           />
//           <GridHomeMenu
//             imageSource={require("../images/dikado-item.png")}
//             labelText={"DiKado"}
//           />
//           <GridHomeMenu
//             imageSource={require("../images/another-menu-item.png")}
//             labelText={"Another Menu"}
//           />
//         </View>
//       </View>
//     ); // Font belum dimuat, return null atau komponen loading
//   }

//   return (
//     <View style={styles.container}>
//       {/* App Bar Image */}
//       <Image
//         source={require("../images/bar_purchase.png")}
//         style={styles.PurchaseImage}
//       />

//       {/* App Bar */}
//       <View style={styles.appBarContainer}>
//         {/* Left Icon (Back Arrow) */}
//         <Ionicons
//           name="arrow-back"
//           size={24}
//           color="#FFFFFF"
//           style={styles.backArrow}
//         />

//         {/* Title (Purchase) */}
//         <Text style={styles.title}>Purchase</Text>
//       </View>

//       {/* Content */}
//       <View style={styles.contentContainer}>
//         {/* Your main content goes here */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5", // Background color set to white
//   },
//   PurchaseImage: {
//     width: 390,
//     height: 88,
//     resizeMode: "cover", // Sesuaikan ukuran gambar agar sesuai dengan dimensi yang ditentukan
//   },
//   appBarContainer: {
//     position: "absolute",
//     top: 55,
//     left: 0,
//     right: 0,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center", // Pusatkan elemen di dalam App Bar
//     fontSize: 20,
//   },
//   backArrow: {
//     position: "absolute",
//     left: 16,
//   },
//   title: {
//     color: "#FFFFFF",
//     fontSize: 20,
//     fontFamily: "Inter-SemiBold", // Menggunakan jenis font Inter Semi Bold
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 16, // Tambahkan padding atau sesuaikan sesuai kebutuhan konten Anda
//     marginTop: 88, // Sesuaikan dengan tinggi gambar App Bar
//   },
// });

// export default Purchase;

import React from "react";
import { View, ImageBackground, Image, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import GridHomeMenu from "../components/GridHomeMenu";

const Purchase = () => {
  const [fontsLoaded] = useFonts({
    "Inter-SemiBold": require("../fonts/Inter/static/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <ImageBackground
        source={require("../images/background-container.png")}
        style={styles.backgroundGradient}
      >
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
            <GridHomeMenu
              imageSource={require("../images/purchase-item.png")}
              labelText={"Purchase"}
            />
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
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      {/* App Bar Image */}
      <Image
        source={require("../images/bar_purchase.png")}
        style={styles.PurchaseImage}
      />

      {/* App Bar */}
      <View style={styles.appBarContainer}>
        {/* Left Icon (Back Arrow) */}
        <Ionicons
          name="arrow-back"
          size={24}
          color="#FFFFFF"
          style={styles.backArrow}
        />

        {/* Title (Purchase) */}
        <Text style={styles.title}>Purchase</Text>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Your main content goes here */}
        <View style={styles.gridContainer}>
          <GridHomeMenu
            imageSource={require("../images/transfer-item.png")}
            labelText={"Transfer"}
          />
          <GridHomeMenu
            imageSource={require("../images/payment-item.png")}
            labelText={"Payment"}
          />
          <GridHomeMenu
            imageSource={require("../images/purchase-item.png")}
            labelText={"Purchase"}
          />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Background color set to white
  },
  PurchaseImage: {
    width: 390,
    height: 88,
    resizeMode: "cover", // Sesuaikan ukuran gambar agar sesuai dengan dimensi yang ditentukan
  },
  appBarContainer: {
    position: "absolute",
    top: 55,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Pusatkan elemen di dalam App Bar
    fontSize: 20,
  },
  backArrow: {
    position: "absolute",
    left: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Inter-SemiBold", // Menggunakan jenis font Inter Semi Bold
  },
  contentContainer: {
    flex: 1,
    padding: 16, // Tambahkan padding atau sesuaikan sesuai kebutuhan konten Anda
    marginTop: 88, // Sesuaikan dengan tinggi gambar App Bar
  },
  gridContainer: {
    // Add any styles needed for your grid container
    // You may want to use flex properties or other styles to arrange the GridHomeMenu components
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

export default Purchase;
