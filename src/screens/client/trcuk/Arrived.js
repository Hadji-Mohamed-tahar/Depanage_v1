
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import CardArrived from "../../../components/CardArrived";

const Arrived = ({ navigation, route }) => {
  const { driverSelected } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={30} color="white" />
        <Text style={styles.headerText}>Arrived</Text>
      </View>
      <View style={styles.mapContainer}>
        <Text>Map</Text>
      </View>
      <View style={styles.additionalTextContainer}>
        <Text style={styles.additionalText}>Your ride has arrived</Text>
      </View>
      <BottomSheet isOpen>
        <CardArrived navigation={navigation} driverSelected={driverSelected} />
      </BottomSheet>
    </View>
  );
};

export default Arrived;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    marginTop: 40,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 999,
    textAlign: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginLeft: 90,
    textAlign: "center",
  },
  mapContainer: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  additionalTextContainer: {
    position: "absolute",
    top: "15%",
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    zIndex: 999,
  },
  additionalText: {
    textAlign: "center", 
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
