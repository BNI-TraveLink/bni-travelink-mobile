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
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

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

  const navigation = useNavigation(); // Inisialisasi objek navigasi

  const handleLogin = () => {
    const hardcodedEmail = "atika";
    const hardcodedPassword = "123456";

    setEmail("");
    setPassword("");
    setErrorText("");

    const isPasswordValid = password.length >= 6 && /^\d+$/.test(password);

    if (
      email === hardcodedEmail &&
      isPasswordValid &&
      password === hardcodedPassword
    ) {
      console.log("Login successful!");
      setIsLoggedIn(true);
      setModalVisible(false);

      // Navigasi ke halaman Home setelah login berhasil
      navigation.navigate("Home");
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
                    style={[
                      styles.input,
                      { color: "#005E6A", fontSize: 17, fontWeight: "600" },
                    ]}
                    placeholder="Enter your User ID"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>MPIN</Text>
                  <View style={styles.passwordInputContainer}>
                    <TextInput
                      style={[
                        styles.input,
                        { color: "#005E6A", fontSize: 17, fontWeight: "600" },
                      ]}
                      placeholder="Enter your MPIN"
                      secureTextEntry={!showPassword}
                      value={password}
                      onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity
                      style={[
                        styles.showPasswordToggle,
                        {
                          marginTop: -8,
                        },
                      ]}
                      onPress={toggleShowPassword}
                    >
                      <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={24}
                        color="#00A2B7"
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
                      size={19}
                      color="#005E6A"
                    />
                    <Text
                      style={[
                        styles.checkboxLabel,
                        { fontFamily: "Inter-Medium" },
                      ]}
                    >
                      Save User ID
                    </Text>
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
    return <View></View>;
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
    borderRadius: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#005E6A",
    fontFamily: "Inter-Regular",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 8,
    overflow: "hidden",
    // Set the background color to gray
    paddingHorizontal: 10, // Add padding to align text with the input
  },
  label: {
    paddingHorizontal: 10,
    fontSize: 17,
    alignSelf: "flex-start",
    marginBottom: 5,
    color: "#F15A23",
  },
  input: {
    height: 50,
    paddingHorizontal: 12,
    borderRadius: 20,
    width: "100%",
    shadowColor: "#000", // Warna bayangan
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5, // Kekuatan bayangan (0-1)
    shadowRadius: 3.84, // Jarak bayangan dari elemen
    elevation: 2, // Elevation memberikan efek bayangan pada Android
    backgroundColor: "#D9D9D9", // Warna latar belakang sesuai kebutuhan
    padding: 10, // Atur padding sesuai kebutuhan
    marginBottom: 10, // Atur margin bawah sesuai kebutuhan
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
    backgroundColor: "#F15A23",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 70,
    marginTop: 2,
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
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    marginTop: -10,
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxLabel: {
    marginLeft: 10,
    color: "#005E6A",
    fontSize: 13,
  },
  forgotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  forgotText: {
    color: "#005E6A",
    fontSize: 12,
  },
  errorText: {
    paddingHorizontal: 12,
    color: "red",
    marginBottom: 10,
  },
});

export default FormLogin;
