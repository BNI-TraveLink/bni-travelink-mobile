import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

const GridItem = ({ imageSource, labelText }) => {
  return (
    <View style={styles.gridItem}>
      <ImageBackground
        source={require("../images/Rectangle4.png")}
        style={styles.gridIconContainer}
      >
        <View style={styles.gridIconContainer}>
          <Image source={imageSource} style={styles.gridIcon} />
        </View>
      </ImageBackground>
      <Text style={styles.gridText}>{labelText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    width: 70,
    marginBottom: 15,
    marginTop:45
  },

  gridIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 23,
    marginBottom: 5,
    alignItems:"center",
    justifyContent:"center",
  },

  gridIcon: {
    width: 40,
    height: 40,
    objectFit: 'contain',
  },

  gridText: {
    fontSize: 14,
    color: "#005E6A",
    textAlign:"center"
  },
});

export default GridItem;
