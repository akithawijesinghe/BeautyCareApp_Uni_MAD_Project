import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.bannerBox}>
        <Image
          source={require("../assets/banner.png")}
          style={styles.banner}
        />
      </View>

      <View style={styles.headerBox}>
        <Text style={styles.welcome}>
          Welcome to BeautyCare+
        </Text>

        <Text style={styles.subText}>
          Feel Beautiful, Feel Confident
        </Text>
      </View>

      <View style={styles.sectionRow}>
        <Text style={styles.sectionTitle}>
          Our Services
        </Text>

        <Text style={styles.seeAll}>
          See All
        </Text>
      </View>

      <View style={styles.cardRow}>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/facial.png")}
            style={styles.cardImg}
          />

          <View style={styles.cardTextBox}>
            <Text style={styles.cardTitle}>
              Facial Care
            </Text>

            <Text style={styles.cardSub}>
              Glow & Cleanse
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/makeup.png")}
            style={styles.cardImg}
          />

          <View style={styles.cardTextBox}>
            <Text style={styles.cardTitle}>
              Makeup
            </Text>

            <Text style={styles.cardSub}>
              Party & Bridal
            </Text>
          </View>
        </TouchableOpacity>

      </View>

      <View style={styles.cardRow}>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/hair.png")}
            style={styles.cardImg}
          />

          <View style={styles.cardTextBox}>
            <Text style={styles.cardTitle}>
              Hair Styling
            </Text>

            <Text style={styles.cardSub}>
              Modern Looks
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Image
            source={require("../assets/skin.png")}
            style={styles.cardImg}
          />

          <View style={styles.cardTextBox}>
            <Text style={styles.cardTitle}>
              Skin Care
            </Text>

            <Text style={styles.cardSub}>
              Smooth Skin
            </Text>
          </View>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fdecef",
  },

  bannerBox: {
    margin: 18,
    borderRadius: 22,
    overflow: "hidden",

    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  banner: {
    width: "100%",
    height: 145,
    resizeMode: "cover",
  },

  headerBox: {
    alignItems: "center",
    marginBottom: 25,
  },

  welcome: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#7F2145",
  },

  subText: {
    color: "#777",
    marginTop: 6,
    fontSize: 14,
  },

  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 22,
    marginBottom: 15,
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
  },

  seeAll: {
    fontSize: 14,
    color: "#7F2145",
    fontWeight: "600",
  },

  cardRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 22,
  },

  card: {
    backgroundColor: "#fff",
    width: "42%",
    borderRadius: 20,
    overflow: "hidden",

    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  cardImg: {
    width: "100%",
    height: 125,
  },

  cardTextBox: {
    paddingVertical: 10,
    alignItems: "center",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },

  cardSub: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },

  button: {
    backgroundColor: "#7F2145",
    marginHorizontal: 28,
    marginVertical: 30,
    paddingVertical: 17,
    borderRadius: 40,
    alignItems: "center",

    elevation: 7,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },

});
