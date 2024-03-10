import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import CardHistory from "../components/CardHistory";

const RideHistory = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { marginTop: 25 }]}>
        <Text style={styles.headerText}>Ride history</Text>
        <TouchableOpacity style={styles.backButton}>
        <Feather name="arrow-right-circle" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* <View style={[styles.card]}>
        <Text style={styles.date}>March 8, 2023</Text>
        <View style={styles.line} />
        <View style={styles.row}>
          <Text style={styles.time}>10:00 AM</Text>
          <View style={styles.circle} />
          <Text style={styles.location}>New York City</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.row}>
          <Text style={styles.time}>11:00 AM</Text>
          <View style={styles.circle} />
          <Text style={styles.location}>Los Angeles</Text>
        </View>
      </View> */}
      <CardHistory />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  backButton: {
    width: 30,
    height: 30,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "yellow",
  },
  date: {
    fontSize: 18,
    fontWeight: "bold",
  },
  line: {
    height: 1,
    backgroundColor: "black",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  time: {
    fontSize: 16,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    marginHorizontal: 10,
  },
  location: {
    fontSize: 16,
  },
  verticalLine: {
    width: 1,
    height: 50,
    backgroundColor: "black",
    marginHorizontal: 10,
  },
});

export default RideHistory;
