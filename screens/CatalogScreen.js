import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export default function CatalogScreen() {

  const services = [
    {
      id: "1",
      title: "Facial Care",
      desc: "Deep cleansing & glow treatment",
      image: require("../assets/facial.png"),
    },
    {
      id: "2",
      title: "Makeup Artist",
      desc: "Bridal & party makeup",
      image: require("../assets/makeup.png"),
    },
    {
      id: "3",
      title: "Hair Styling",
      desc: "Haircut, coloring & styling",
      image: require("../assets/hair.png"),
    },
    {
      id: "4",
      title: "Spa Therapy",
      desc: "Relaxation & body massage",
      image: require("../assets/spa.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>

      <Image
        source={item.image}
        style={styles.image}
      />

      <View style={styles.textBox}>

        <Text style={styles.cardTitle}>
          {item.title}
        </Text>

        <Text style={styles.cardDesc}>
          {item.desc}
        </Text>

      </View>

      <MaterialIcons
        name="chevron-right"
        size={26}
        color="#999"
      />

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <View style={styles.headerBox}>
        <Text style={styles.header}>
          Service Catalog
        </Text>

        <Text style={styles.subHeader}>
          Explore our beauty services ✨
        </Text>
      </View>

      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fdecef",
    paddingHorizontal: 20,
  },

  headerBox: {
    marginTop: 15,
    marginBottom: 25,
  },

  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#7F2145",
  },

  subHeader: {
    fontSize: 14,
    color: "#777",
    marginTop: 4,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 22,
    marginBottom: 18,
    padding: 15,
    alignItems: "center",

    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 14,
  },

  textBox: {
    flex: 1,
    marginLeft: 15,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },

  cardDesc: {
    fontSize: 13,
    color: "#888",
    marginTop: 3,
  },

});
