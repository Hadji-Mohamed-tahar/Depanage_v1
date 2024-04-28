
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
import { useNavigation, useRoute } from "@react-navigation/native";
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
import * as Notifications from "expo-notifications";
import axios from "axios";

const Truck_Req = () => {
  const StartPoint = useMemo(() => ["42%"], []);
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);

  const route = useRoute();
  // استرداد البيانات من الصفحة السابقة
  const {
    DriverId,
    tripId,
    username,
    totalDistance,
    currentLocation,
    destinationLocation,
    user_id,
  } = route.params;

  const sendNotification = async () => {
    // استرداد الرمز المميز expoPushToken للمستخدم
    const response = await axios.get(
      `http://192.168.244.231:3000/api/user/${user_id}`
    );
    const expoPushToken = response.data;
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "Driver has arrived",
      body: "Your driver has arrived at your location.",
      data: {
        notificationType: "driverArrived",
      },
    };

    try {
      await axios.post("https://exp.host/--/api/v2/push/send", message);
      // console.log("Notification sent successfully");
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

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

      // تسجيل متلقي الإشعارات
      Notifications.addNotificationReceivedListener((notification) => {
        if (
          notification.request.content.data.notificationType ===
          "rideConfirmation"
        ) {
          // console.log("truck_Req============");
          navigation.navigate("Start_Truck", {
            tripId: tripId,
            DriverId: DriverId,
            username: username,
            user_id: user_id,
            currentLocation: currentLocation,
            destinationLocation: destinationLocation,
            totalDistance: totalDistance,
          });
        }
      });
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

  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
        {/* Add markers here if needed */}
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
          {/* Show Header */}
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
          {/* Show client information */}
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
                  <Text className="text-gray-800">Espece</Text>
                </View>
              </View>
            </View>
            <View>
              <Text className="text-blue-400">{totalDistance} km</Text>
            </View>
          </View>
          {/* show on map */}
          <View style={{ marginLeft: -130 }}>
            <TouchableOpacity className="flex-row space-x-3 mt-2 items-center">
              <FontAwesome name="map-pin" size={24} color="orange" />
              <Text className="font-bold">{currentLocation.city_name}</Text>
            </TouchableOpacity>
          </View>
          {/* Options for Trucker */}
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
          {/* Repport Your  Clinet */}
          <TouchableOpacity
            className="w-full h-12 rounded-xl bg-black py-2 px-4"
            onPress={sendNotification}
          >
            <Text className="text-center font-bold text-white text-lg">
              Repport Your Clinet
            </Text>
          </TouchableOpacity>
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
});

export default Truck_Req;
