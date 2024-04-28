
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const Truck_Options = () => {
  const StartPoint = useMemo(() => ["38%", "50%", "80%"], []);
  const navigation = useNavigation();
  const route = useRoute();

  const drivers = route.params?.drivers;
  const currentLocation = route.params?.currentLocation;
  const destinationLocation = route.params?.destinationLocation;
  const totalDistance = route.params?.totalDistance;

  const [selectedDriver, setSelectedDriver] = useState(null);

  // Function to render each driver
  const renderDriver = (driver, index) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.driverContainer,
        driver === selectedDriver ? styles.selectedDriver : null,
      ]}
      onPress={() =>
        setSelectedDriver((prevDriver) =>
          prevDriver === driver ? null : driver
        )
      }
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="truck-loading" size={34} color="orange" />
          <Text style={styles.carNameText}>
            {driver.make} {driver.model}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>{driver.cost} DA</Text>
        </View>
        <Text style={styles.driverNameText}>{driver.name}</Text>
      </View>
    </TouchableOpacity>
  );

  // Render
  return (
    <View style={styles.container}>
      <BottomSheet
        snapPoints={StartPoint}
        handleIndicatorStyle={{ backgroundColor: "orange" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          {drivers.map(renderDriver)}
          <View style={[styles.shadowProp, { marginTop: 20, marginBottom: 20 }]} className="bg-white h-20 pt-4">
            <View className="w-80 h-10 bg-orange-400 rounded-xl items-center justify-center pt-4 ml-6">
              <TouchableOpacity
                className="w-full h-10 items-center pt-1"
                onPress={() => {
                  if (selectedDriver) {
                    navigation.navigate("RideReady", {
                      driverSelected: selectedDriver,
                      currentLocation: currentLocation,
                      destinationLocation: destinationLocation,
                      totalDistance: totalDistance,
                    });
                  } else {
                    alert("Please select a driver first.");
                  }
                }}
              >
                <Text className="text-center text-white font-bold text-md">
                  Order Now
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{ fontSize: 12 }}
                className="text-gray-300 text-sm text-center"
              >
                I Accept the general conditions and the privacy policy
              </Text>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  driverContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  carNameText: {
    fontSize: 16,
    marginLeft: 10,
  },
  priceContainer: {
    backgroundColor: "#f0ad4e",
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
  priceText: {
    fontSize: 18,
    color: "#fff",
  },
  driverNameText: {
    fontSize: 18,
  },
  selectedDriver: {
    backgroundColor: "#ddd",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Truck_Options;
