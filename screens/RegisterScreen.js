import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const registerUser = async () => {

    if (username === "" || password === "") {
      setMsg("All fields are required");
      return;
    }

    const user = { username, password };

    await AsyncStorage.setItem("userData", JSON.stringify(user));

    setMsg("Registration successful!");

    setTimeout(() => {
      navigation.replace("Login");
    }, 1000);
  };

  return (
    <View style={styles.container}>


      <View style={styles.circleLeft} />
      <View style={styles.circleRight} />
      <View style={styles.circleSmall} />


      <View style={styles.card}>

        <Text style={styles.title}>Create Account ✨</Text>
        <Text style={styles.subtitle}>
          Join BeautyCare+ today
        </Text>


        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />


        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />


        <TouchableOpacity
          style={styles.button}
          onPress={registerUser}
        >
          <Text style={styles.buttonText}>REGISTER</Text>
        </TouchableOpacity>


        {msg !== "" && (
          <Text style={styles.msg}>{msg}</Text>
        )}


        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>
            Already have an account? Login
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    backgroundColor: "#fdecef",
    justifyContent: "center",
    alignItems: "center",
  },



  circleLeft: {
    position: "absolute",
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#f8bbd0",
    top: -80,
    left: -120,
  },

  circleRight: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#f48fb1",
    bottom: -70,
    right: -90,
  },

  circleSmall: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#fce4ec",
    top: 120,
    right: -40,
  },



  card: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 28,
    padding: 28,
    alignItems: "center",

    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },



  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7F2145",
  },

  subtitle: {
    color: "#777",
    marginBottom: 25,
  },


  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 14,
    padding: 13,
    marginBottom: 15,
    fontSize: 16,
  },



  button: {
    backgroundColor: "#7F2145",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },



  msg: {
    marginTop: 10,
    color: "green",
    fontWeight: "600",
  },

  loginText: {
    marginTop: 20,
    color: "#7F2145",
    fontWeight: "600",
  },

});
