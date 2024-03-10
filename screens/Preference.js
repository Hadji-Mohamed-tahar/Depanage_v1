import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import CardPreference from "../components/CardPreference";

const Preference = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Image
          source={require("../assets/user.png")}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
        <Text style={{ fontSize: 20 }}>John Doe</Text>
        <Text style={{ fontSize: 16 }}>johndoe@example.com</Text>
      </View>
      <View style={styles.section2}>
        <CardPreference />
      </View>
      <View style={styles.section3}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonTEXT}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Preference;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  section1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section2: {
    flex: 1,
  },
  section3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  backButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonTEXT: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
