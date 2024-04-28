
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardHistory from "../components/CardHistory";

const CardReceipt = ({ navigation, driverSelected ,tripId}) => {
  return (
    <View>
      <View style={styles.cardReceiptContainer}>
        <View style={styles.checkmark}>
          <Text>✔</Text>
        </View>
        <Text>Your trip has ended</Text>
        {/* <CardHistory /> */}
        <Text style={styles.cost}>Total : {driverSelected.cost} DA</Text>
        <Text style={styles.subtext}>Thank you for riding with us!</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.okButton, { width: "100%" }]}
          onPress={() => {
            navigation.navigate("Feedback",{
              driverSelected:driverSelected,
              tripId:tripId
            });
          }}
        >
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardReceiptContainer: {
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 40,
    paddingVertical: 40,
    padding:30,
    borderRadius:10
  },
  checkmark: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  okButton: {
    marginTop: 20,
    backgroundColor: "yellow",
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  cost: {
    fontWeight: "bold",
    fontSize: 18,
    marginVertical: 10,
  },
  subtext: {
    color: "#888",
    fontSize: 14,
  },
  buttonText: {
    fontWeight: "bold",
  },
});

export default CardReceipt;

