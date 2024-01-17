import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

const FormLogin = ({ modalVisible, setModalVisible }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberUser, setRememberUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorText, setErrorText] = useState(""); // Tambahkan state errorText

  const [fontsLoaded] = useFonts({
    InterRegular: require("../fonts/Inter/static/Inter-Regular.ttf"),
  });

  const handleLogin = () => {
    const hardcodedEmail = "atika";
    const hardcodedPassword = "123";

    setEmail("");
    setPassword("");
    setErrorText("");

    if (email === hardcodedEmail && password === hardcodedPassword) {
      console.log("Login successful!");
      setIsLoggedIn(true);
      setModalVisible(false);
    } else {
      console.log("Login failed. Check your email and password.");
      setModalVisible(true);
      setIsLoggedIn(false);
      setErrorText("Username or Password is Incorrect"); // Set pesan kesalahan
      console.log("Error Text:", errorText); // Tambahkan log ini
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Tambahan: Reset state jika diperlukan
    setEmail("");
    setPassword("");
    setErrorText("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleRememberUser = () => {
    setRememberUser(!rememberUser);
  };

  if (fontsLoaded) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {!isLoggedIn ? (
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
            ></TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleLogout}>
              <Text
                style={[styles.openModalText, { fontFamily: "InterRegular" }]}
              >
                Log Out
              </Text>
            </TouchableOpacity>
          )}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={[styles.title, { fontFamily: "InterRegular" }]}>
                  Welcome!
                </Text>
                {errorText ? (
                  <Text style={styles.errorText}>{errorText}</Text>
                ) : null}
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>User ID</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your User ID"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>MPIN</Text>
                  <View style={styles.passwordInputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Enter your MPIN"
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity
                      style={styles.showPasswordToggle}
                      onPress={toggleShowPassword}
                    >
                      <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={24}
                        color="#fefefe"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.checkboxContainer}>
                  <TouchableOpacity
                    style={styles.checkbox}
                    onPress={toggleRememberUser}
                  >
                    <Ionicons
                      name={rememberUser ? "checkbox" : "checkbox-outline"}
                      size={24}
                      color="#005E6A"
                    />
                    <Text style={styles.checkboxLabel}>Save User ID</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    handleLogin();
                    if (isLoggedIn) {
                      setModalVisible(false);
                    }
                  }}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeModalButton}
                  onPress={() => {
                    setModalVisible(false);
                    setErrorText(""); // Reset pesan kesalahan saat menutup modal
                  }}
                >
                  <Ionicons name="close" size={24} color="#005E6A" />
                </TouchableOpacity>
                <View style={styles.forgotContainer}>
                  <TouchableOpacity
                    onPress={() => console.log("Forgot User ID?")}
                  >
                    <Text style={styles.forgotText}>Forgot User ID?</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log("Forgot MPIN?")}>
                    <Text style={styles.forgotText}>Forgot MPIN?</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
          {isLoggedIn ? (
            <View style={styles.container}>
              <Text>Welcome, User!</Text>
            </View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#005E6A",
    fontFamily: "Inter-Regular",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    overflow: "hidden",
    // Set the background color to gray
    paddingHorizontal: 10, // Add padding to align text with the input
  },
  label: {
    fontSize: 18,
    alignSelf: "flex-start",
    marginBottom: 5,
    color: "#F15A23",
  },
  input: {
    height: 50,
    paddingHorizontal: 12,
    backgroundColor: "#ccc",
    borderRadius: 10,
    width: "100%",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#DDD",
  },
  showPasswordToggle: {
    marginLeft: "auto",
    paddingRight: 10,
  },
  button: {
    backgroundColor: "#005E6A",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 70,
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  closeModalButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 10,
    color: "#005E6A",
  },
  forgotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  forgotText: {
    color: "#005E6A",
    fontSize: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default FormLogin;
