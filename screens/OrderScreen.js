import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function OrderScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.headerBox}>
        <Text style={styles.title}>Book Your Service</Text>
        <Text style={styles.subtitle}>
          Select a service to continue ✨
        </Text>
      </View>

      <View style={styles.grid}>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/facial.png")}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Facial</Text>
          <Text style={styles.cardDesc}>Glow Treatment</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/makeup.png")}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Makeup</Text>
          <Text style={styles.cardDesc}>Party & Bridal</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/hair.png")}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Hair</Text>
          <Text style={styles.cardDesc}>Styling & Color</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/spa.png")}
            style={styles.image}
          />
          <Text style={styles.cardTitle}>Spa</Text>
          <Text style={styles.cardDesc}>Relax Therapy</Text>
        </TouchableOpacity>

      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue Booking</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fdecef",
    paddingHorizontal: 20,
  },

  headerBox: {
    marginTop: 20,
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7F2145",
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginTop: 5,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#fff",
    width: "47%",
    borderRadius: 22,
    alignItems: "center",
    padding: 15,
    marginBottom: 20,

    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginBottom: 10,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#333",
  },

  cardDesc: {
    fontSize: 12,
    color: "#888",
    marginTop: 3,
  },

  button: {
    backgroundColor: "#7F2145",
    height: 55,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 40,

    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },

});
