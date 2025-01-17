import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Services = ({navigation}) => {
  return (
    <View>
      <View className="flex-row my-4 mr-10">
        <Text className="text-lg text-orange-900 font-bold">
          Chose what you need :
        </Text>
      </View>
      <View style={{ width: "100%"}} className="flex-row space-x-3">
        <TouchableOpacity
          style={{ width: "30%", height: 100 }}
          className="bg-orange-100 items-center justify-center rounded-md flex-column space-y-1"
          onPress={()=>navigation.navigate("Truck_Search")}
        >
          <Image
            className="w-12 h-12 mx-auto"
            source={require("../../assets/imageApp/truck.png")}
          />

          <Text className="font-bold">Truck</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "30%", height: 100 }}
          className="bg-orange-100 items-center justify-center rounded-md flex-column space-y-1"
          onPress={()=>navigation.navigate("Mechanic_Search")}
        >
          <Image
            className="w-12 h-12 mx-auto"
            source={require("../../assets/imageApp/mechanic.png")}
          />
          <Text className="font-bold">Mechanic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: "30%", height: 100 }}
          className="bg-orange-100 items-center justify-center rounded-md flex-column space-y-1"
          onPress={()=>navigation.navigate("Wash_Search")}
        >
          <Image
            className="w-12 h-12 mx-auto"
            source={require("../../assets/imageApp/car-service.png")}
          />
          <Text className="font-bold">Car Wash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadow: 5,
  },
});

export default Services;
