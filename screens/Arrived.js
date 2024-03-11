import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";
import CardFeedback from "../components/CardFeedback";
import { Ionicons } from "@expo/vector-icons";
import CardArrived from "../components/CardArrived";

const Arrived = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons name="menu" size={30} color="white" />
          <Text style={styles.headerText}>Arrived</Text>
        </View>
        <View style={styles.greyBackground}>
          <Text>Map</Text>
        </View>
      </View>
      <BottomSheet isOpen>
        <CardArrived />
      </BottomSheet>
    </View>
  );
};

export default Arrived;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 40,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 999,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10,
    color: "white",
  },
  greyBackground: {
    flex: 1,
    backgroundColor: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
