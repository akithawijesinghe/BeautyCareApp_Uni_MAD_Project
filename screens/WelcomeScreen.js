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


      <View style={styles.circle1} />
      <View style={styles.circle2} />


      <View style={styles.card}>


        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
        />


        <Text style={styles.title}>BeautyCare+</Text>


        <Text style={styles.subtitle}>
          Feel Beautiful. Feel Confident ✨
        </Text>


        <Text style={styles.desc}>
          Book beauty services easily and
          manage your care in one place.
        </Text>


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


  container: {
    flex: 1,
    backgroundColor: "#fdeff4",
    justifyContent: "center",
    alignItems: "center",
  },


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


  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 15,
  },


  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#7F2145",
    marginBottom: 5,
  },


  subtitle: {
    fontSize: 17,
    color: "#555",
    marginBottom: 12,
  },


  desc: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 20,
  },


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
