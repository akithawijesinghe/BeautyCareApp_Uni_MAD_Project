import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Decorative Circles */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      {/* Main Card */}
      <View style={styles.card}>

        {/* Logo */}
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        />

        {/* App Name */}
        <Text style={styles.title}>BeautyCare+</Text>

        {/* Tagline */}
        <Text style={styles.subtitle}>
          Feel Beautiful. Feel Confident ✨
        </Text>

        {/* Description */}
        <Text style={styles.desc}>
          Book beauty services easily and
          manage your care in one place.
        </Text>

        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.buttonText}>
            Get Started →
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
    backgroundColor: "#fdeff4",
    justifyContent: "center",
    alignItems: "center",
  },

  /* Decorative Shapes */
  circle1: {
    position: "absolute",
    width: 200,
    height: 200,
    backgroundColor: "#f8bbd0",
    borderRadius: 100,
    top: -60,
    left: -60,
    opacity: 0.6,
  },

  circle2: {
    position: "absolute",
    width: 250,
    height: 250,
    backgroundColor: "#f48fb1",
    borderRadius: 125,
    bottom: -80,
    right: -80,
    opacity: 0.4,
  },

  /* Card */
  card: {
    backgroundColor: "#fff",
    width: "88%",
    borderRadius: 25,
    padding: 35,
    alignItems: "center",

    elevation: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },

  /* Logo */
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 15,
  },

  /* Title */
  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#7F2145",
    marginBottom: 5,
  },

  /* Subtitle */
  subtitle: {
    fontSize: 17,
    color: "#555",
    marginBottom: 12,
  },

  /* Description */
  desc: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 20,
  },

  /* Button */
  button: {
    backgroundColor: "#7F2145",
    paddingVertical: 15,
    paddingHorizontal: 55,
    borderRadius: 35,

    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
