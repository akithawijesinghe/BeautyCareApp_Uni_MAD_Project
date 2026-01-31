import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const loginUser = async () => {

    const storedUser = await AsyncStorage.getItem("userData");

    if (!storedUser) {
      setMsg("No user registered");
      return;
    }

    const { username: u, password: p } = JSON.parse(storedUser);

    if (username === u && password === p) {

      setMsg("Login successful!");

      setTimeout(() => {
        navigation.replace("MainTabs");
      }, 800);

    } else {
      setMsg("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>

      {/* Background Circles */}
      <View style={styles.circleTop} />
      <View style={styles.circleBottom} />

      {/* Main Card */}
      <View style={styles.card}>

        <Text style={styles.title}>Welcome Back ✨</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

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
          onPress={loginUser}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        {msg !== "" && (
          <Text style={styles.msg}>{msg}</Text>
        )}

        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.link}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  /* Main Background */

  container: {
    flex: 1,
    backgroundColor: "#fdecef",
    justifyContent: "center",
    alignItems: "center",
  },

  /* Decorative Circles */

  circleTop: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#f8bbd0",
    top: -80,
    left: -80,

    opacity: 0.6,
    zIndex: 0,
  },

  circleBottom: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#f8bbd0",
    bottom: -120,
    right: -120,

    opacity: 0.6,
    zIndex: 0,
  },

  /* Card */

  card: {
    backgroundColor: "#fff",
    width: "85%",
    borderRadius: 28,
    padding: 28,
    alignItems: "center",

    zIndex: 5,   // ⭐ IMPORTANT: Bring card to front

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

  link: {
    marginTop: 20,
    color: "#7F2145",
    fontWeight: "600",
  },
});
