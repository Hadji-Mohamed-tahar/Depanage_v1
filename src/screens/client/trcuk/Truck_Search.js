
import React, {
  useMemo,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const Truck_Search = () => {
  const StartPoint = useMemo(() => ["38%", "50%", "80%"], []);
  const navigation = useNavigation();

  // Define the fixed location data
  const currentLocation = {
    latitude: 37.783333,
    longitude: -122.416667,
    city_name: "عين الخضراء",
  };
  const destinationLocation = {
    latitude: 40.7128, 
    longitude: -74.006,
    city_name: "نيويورك", 
  };
  const totalDistance = 5.2;
  const handleDone = () => {
    // console.log("Truck_Search");
    navigation.navigate("SearchingDriver", {
      currentLocation,
      destinationLocation,
      totalDistance,
    });
  };
  return (
    <View style={styles.container}>
      <BottomSheet
        snapPoints={StartPoint}
        handleIndicatorStyle={{ backgroundColor: "orange" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View
            style={styles.shadowProp}
            className="w-80 mx-auto h-20 flex-column bg-white rounded-xl px-3"
          >
            <View
              style={{ borderBottomColor: "gray", width: "100%" }}
              className=" border-b-2 mx-auto h-10 flex-row items-center space-x-2"
            >
              <MaterialIcons name="my-location" size={24} color="orange" />
              <TextInput
                placeholder="My Location"
                value="Msila , Magra , Ouled Mansor"
              />
            </View>
            <View className=" w-80 mx-auto h-10 flex-row items-center space-x-3">
              <FontAwesome5 name="location-arrow" size={20} color="orange" />
              <TextInput placeholder="Destination" />
            </View>
          </View>

          <Text
            style={{ marginLeft: -180 }}
            className="text-gray-500 mt-6 mb-2 text-lg"
          >
            Recent Research
          </Text>

          <View className="w-full mx-14 items-center">
            <TouchableOpacity
              className="w-full h-12 rounded-xl bg-orange-800 py-2 px-4"
              onPress={handleDone}
            >
              <Text className="text-center font-bold text-white text-lg">
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    paddingHorizontal: 12,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default Truck_Search;