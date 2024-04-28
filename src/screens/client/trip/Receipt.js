import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CardReceipt from "../../../components/CardReceipt";

const Receipt = ({navigation,route}) => {
  const { driverSelected,tripId } = route.params;

  return (
    <View style={styles.container}>
      <View style={[styles.topBar, styles.iconContainer]}>
        <Ionicons
          name="arrow-back"yellow
          size={24}
          color="black"
          style={{ marginTop: 10 }}
        />
      </View>
      <CardReceipt navigation={navigation} driverSelected={driverSelected} tripId={tripId}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display:"flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
  },
  topBar: {
    marginBottom: 20,
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 40,
    marginLeft: 10,
    marginTop: 10,
  },
});

export default Receipt;
