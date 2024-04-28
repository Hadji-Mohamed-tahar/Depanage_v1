
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import axios from "axios";

const CardReceiptTrucker = ({ navigation, tripId, driverId }) => {
  const [tripData, setTripData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://192.168.244.231:3000/trip/${tripId}`);
        setTripData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [tripId]);

  const handleCashIn = async () => {
    try {
      const response = await axios.post("http://192.168.244.231:3000/pay", {
        trip_id: tripId,
        driver_id: driverId,
      });
      // console.log(response.data);
      // navigation.navigate("FeedbackTrucker");
      navigation.navigate("Trucker_vision");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View style={styles.cardReceiptContainer}>
        <View style={styles.checkmark}>
          <Text>✔</Text>
        </View>
        <Text>you are complete in Course</Text>
        {tripData && <Card tripData={tripData} />}
      </View>
      <View>
        <TouchableOpacity
          style={[styles.okButton, { width: "100%" }]}
          onPress={handleCashIn}
        >
          <Text>CASH IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Card = ({ tripData }) => {
  return (
    <View style={[styles.card, { width: Dimensions.get("window").width - 40 }]}>
      <View style={styles.cardRow}>
        <Text style={styles.name}>Total</Text>
        <Text style={styles.value}>{tripData.fare} DA</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.name}>costs</Text>
        <Text style={styles.value}>/</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.name}>your gain</Text>
        <Text style={styles.value}>/</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.name}>payment method</Text>
        <Text style={styles.value}>cach</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.name}>type de course</Text>
        <Text style={styles.value}>{tripData.carMake}</Text>
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
  },
  checkmark: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  okButton: {
    marginTop: 20,
    backgroundColor: "yellow",
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 20,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  name: {
    marginRight: 10,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
    textAlign: "right",
  },
});

export default CardReceiptTrucker;
