
import {
  View,
  Text,
  Image,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { FontAwesome6, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { runSpring } from "react-native-redash";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 100;
const SWIPE_CANCELING = -100;

const Requsete_course = ({ route }) => {
  const navigation = useNavigation();
  const DriverId = useSelector((state) => state.user_id);
  const {
    tripId,
    user_id,
    username,
    currentLocation,
    destinationLocation,
    cost,
    totalDistance,
  } = route.params;
  const [swipe, setSwipe] = useState(false);
  const translateX = useRef(new Animated.Value(0)).current;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    {
      useNativeDriver: true,
    }
  );

  const onHandlerStateChange = async (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      if (event.nativeEvent.translationX > SWIPE_THRESHOLD) {
        Animated.timing(translateX, {
          toValue: width,
          duration: 200,
          useNativeDriver: true,
        }).start(async () => {
          // console.log("Accepted");
          setSwipe(true);
          try {
            const response = await axios.post(
              "http://192.168.244.231:3000/accept_trip",
              {
                trip_id: tripId,
                driver_id: DriverId,
              }
            );
            // console.log(response.data);
          } catch (error) {
            console.error(error);
          }

          setTimeout(() => {
            navigation.navigate("Truck_Req", {
              tripId:tripId,
              DriverId:DriverId,
              username: username,
              totalDistance: totalDistance,
              currentLocation: currentLocation,
              destinationLocation: destinationLocation,
              user_id: user_id,
            });
          }, 3000);
        });
      } else if (event.nativeEvent.translationX < SWIPE_CANCELING) {
        Animated.timing(translateX, {
          toValue: -width,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          navigation.navigate("Trucker_vision");
        });
      }
    }
  };

  useEffect(() => {
    fadeInText();
  }, []);

  const fadeInText = () => {
    this.textRef.fadeIn(2000).then(() => {
      fadeInText();
    });
  };

  return (
    <View>
      <View
        style={styles.shadow}
        className="w-80 h-40 bg-white rounded-md flex-column mx-auto mt-44 p-2 items-center justify-between"
      >
        <Image
          source={require("../../../assets/imageApp/user.jpg")}
          className="w-20 h-20 rounded-2xl"
        />
        <View className="flex-column items-center">
          <Text className="font-bold text-gray-700">{username}</Text>
          <Text className="font-bold text-2xl">{cost} DA</Text>
        </View>
      </View>
      <View
        style={styles.shadow}
        className="w-80 h-26 bg-white rounded-md flex-column mx-auto mt-14 p-2 items-start justify-between"
      >
        <View className="flex-row items-center space-x-2">
          <MaterialIcons name="location-searching" size={24} color="orange" />
          <Text className="font-bold">{currentLocation.city_name}</Text>
        </View>
        <View style={styles.lines} className="my-1"></View>
        <View className="flex-row items-center space-x-2">
          <FontAwesome6 name="location-crosshairs" size={24} color="orange" />
          <Text className="font-bold">{destinationLocation.city_name}</Text>
        </View>
      </View>
      <View className={`w-full h-14 pt-1 mt-8 ${swipe ? "bg-green-100" : ""}`}>
        {swipe ? (
          <View className="flex-row items-center justify-center space-x-2">
            <Image
              source={require("../../../assets/imageApp/confetti.png")}
              className="w-10 h-10"
            />
            <Text className="text-md text-green-600 font-bold text-center">
              Congratulation , Happy Truck Adel
            </Text>
          </View>
        ) : null}
      </View>
      <View className={`w-full h-14 ${swipe ? "" : "bg-orange-100"} mt-14`}>
        <View style={styles.container}>
          <PanGestureHandler
            onGestureEvent={onGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
          >
            <Animated.View
              className="flex-row items-center space-x-12"
              style={[styles.box, { transform: [{ translateX }] }]}
            >
              <AntDesign
                name="closecircle"
                size={28}
                color={swipe ? "green" : "orange"}
              />
              <Animatable.View
                animation="fadeIn"
                duration={1000}
                ref={(ref) => (this.textRef = ref)}
              >
                <Text className="text-center font-bold text-lg text-gray-600">
                  Swipe
                </Text>
              </Animatable.View>
              <AntDesign
                name="checkcircle"
                size={28}
                color={swipe ? "green" : "orange"}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lines: {
    width: 10,
    height: 40,
    marginLeft: 10,
    borderLeftColor: "orange",
    borderLeftWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 250,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Requsete_course;
