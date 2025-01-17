
import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  MaterialIcons,
  Feather,
  FontAwesome5,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import axios from "axios";

const Start_Truck = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {
    DriverId,
    tripId,
    username,
    user_id,
    currentLocation,
    destinationLocation,
    totalDistance,
  } = route.params;

  const StartPoint = useMemo(() => ["54%"], []);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);
  const [getToLocation, setGetToLocation] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [Time, setTime] = useState(0);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setLatitude(location.coords.latitude);
        setLongitude(location.coords.longitude);
      } catch (error) {
        setErrorMsg("Error fetching location");
      }
    })();
  }, []);

  let initialRegion = {
    latitude: Latitude || 36.7642,
    longitude: Longitude || 3.1468,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = `Latitude: ${Latitude}, Longitude: ${Longitude}`;
  }
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const startTrip = async () => {
    try {
      const response = await axios.post(
        "http://192.168.244.231:3000/start_trip",
        {
          trip_id: tripId,
          driver_id: DriverId,
          location: {
            name: currentLocation.city_name,
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          },
        }
      );
      // console.log("Start_Truck");
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const endTrip = async () => {
    try {
      const response = await axios.post(
        "http://192.168.244.231:3000/end_trip",
        {
          trip_id: tripId,
          driver_id: DriverId,
        }
      );
      // console.log(response.data);
      sendEndTripNotification();
      navigation.navigate("ReceiptTrucker", {
        trip_id: tripId,
        driver_id: DriverId,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const sendEndTripNotification = async () => {
    const response = await axios.get(
      `http://192.168.244.231:3000/api/user/${user_id}`
    );
    const expoPushToken = response.data;

    const message = {
      to: expoPushToken,
      sound: "default",
      title: "تم انهاء الرحلة",
      body: "لقد تم انهاء الرحلة بنجاح.",
      data: {
        notificationType: "endTrip",
        tripId:tripId,
      },
    };

    try {
      await axios.post("https://exp.host/--/api/v2/push/send", message);
      // console.log("تم إرسال الإشعار بنجاح");
    } catch (error) {
      console.error("حدث خطأ أثناء إرسال الإشعار:", error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        {Latitude && Longitude && (
          <Marker
            coordinate={{ latitude: Latitude, longitude: Longitude }}
            title="Marker Title"
            description="Marker Description"
          />
        )}
      </MapView>
      <BottomSheet
        snapPoints={StartPoint}
        handleIndicatorStyle={{ backgroundColor: "orange" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View
            style={styles.lines}
            className="flex-row items-center space-x-60 pb-2"
          >
            <Image
              source={require("../../../../assets/imageApp/truck.png")}
              className="w-14 h-14"
            />
            <AntDesign name="questioncircleo" size={24} color="black" />
          </View>
          <View className="flex-row items-center justify-between space-x-4 m-2">
            <View>
              <FontAwesome name="user-circle" size={44} color="gray" />
            </View>
            <View className="flex-column mr-10">
              <Text className="font-bold">{username}</Text>
              <View className="flex-row space-x-2 m-1 items-center">
                <FontAwesome name="star" size={18} color="gold" />
                <Text className="text-yellow-400">4.8</Text>
                <View className="bg-gray-200 rounded-md p-1 w-16">
                  <Text className="text-gray-800">Especes</Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="text-blue-400">{totalDistance}KM</Text>
            </View>
          </View>
          <View style={{ marginLeft: -230 }}>
            <TouchableOpacity className="flex-row space-x-3 mt-2 items-center">
              <Text className="font-bold">Location</Text>
            </TouchableOpacity>
          </View>
          <View
            style={styles.shadow}
            className="w-80 h-26 bg-white rounded-md flex-column mx-auto mt-1 p-2 items-start justify-between"
          >
            <View className="flex-row items-center space-x-2">
              <MaterialIcons
                name="location-searching"
                size={24}
                color={`${!getToLocation ? "orange" : "gray"}`}
              />
              <Text
                className={`font-bold  ${
                  !getToLocation ? "text-orange-400" : "text-gray-400"
                }`}
              >
                {currentLocation.city_name}
              </Text>
            </View>
            <View style={styles.liness} className="mb-1"></View>
            <View className="flex-row items-center space-x-2">
              <FontAwesome
                name="location-arrow"
                size={24}
                color={`${!getToLocation ? "black" : "orange"}`}
              />
              <Text
                className={`font-bold  ${
                  !getToLocation ? "" : "text-orange-400"
                }`}
              >
                {destinationLocation.city_name}
              </Text>
            </View>
          </View>
          <View className="flex-row mx-auto items-center space-x-2 my-4">
            <TouchableOpacity
              style={{ width: 160 }}
              className="flex-row h-12 items-center space-x-2 justify-center rounded-md bg-blue-500 p-2"
            >
              <FontAwesome5 name="location-arrow" size={24} color="white" />
              <Text className="font-bold text-white">Use GPS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: 160 }}
              className="flex-row w-28 h-12 space-x-2 items-center justify-center rounded-md bg-green-500 p-2"
            >
              <FontAwesome name="phone" size={24} color="white" />
              <Text className="font-bold text-white">Call</Text>
            </TouchableOpacity>
          </View>
          <View className="w-full mx-14 items-center">
            {isVisible ? (
              <TouchableOpacity
                className="w-full h-12 rounded-xl bg-orange-400 py-2 px-4"
                onPress={() => {
                  setGetToLocation(true);
                  startTrip();
                  setIsVisible(false); // Change isVisible to false after starting the trip
                }}
              >
                <Text className="text-center font-bold text-white text-lg">
                  Start Your Truck
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                className="w-full h-12 rounded-xl bg-orange-400 py-2 px-4"
                onPress={() => {
                  // console.log("Arrived at destination");
                  endTrip(); // اتصال endTrip() عند الضغط على الزر
                }}
              >
                <Text className="text-center font-bold text-white text-lg">
                  Arrive distination
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 5,
    paddingHorizontal: 12,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  lines: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  liness: {
    width: 10,
    height: 20,
    marginLeft: 10,
    borderLeftColor: "gray",
    borderLeftWidth: 1,
  },
});

export default Start_Truck;
