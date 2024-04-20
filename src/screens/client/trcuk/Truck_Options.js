// import React, {
//   useCallback,
//   useMemo,
//   useRef,
//   useState,
//   useEffect,
// } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
// import {
//   MaterialIcons,
//   Feather,
//   FontAwesome5,
//   FontAwesome6,
//   FontAwesome,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";

// const Truck_Options = () => {
//   const StartPoint = useMemo(() => ["38%", "50%", "80%"], []);
//   const navigation = useNavigation();
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [Latitude, setLatitude] = useState(null);
//   const [Longitude, setLongitude] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       try {
//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//         setLatitude(location.coords.latitude);
//         setLongitude(location.coords.longitude);
//       } catch (error) {
//         setErrorMsg("Error fetching location");
//       }
//     })();
//   }, []);

//   let initialRegion = {
//     latitude: Latitude || 36.7642,
//     longitude: Longitude || 3.1468,
//     latitudeDelta: 0.02,
//     longitudeDelta: 0.02,
//   };

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = `Latitude: ${Latitude}, Longitude: ${Longitude}`;
//   }
//   // renders
//   return (
//     <View style={styles.container}>
//       <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
//         {/* Add markers here if needed */}
//         {Latitude && Longitude && (
//           <Marker
//             coordinate={{ latitude: Latitude, longitude: Longitude }}
//             title="Marker Title"
//             description="Marker Description"
//           />
//         )}
//       </MapView>
//       <BottomSheet
//         snapPoints={StartPoint}
//         handleIndicatorStyle={{ backgroundColor: "orange" }}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <View
//             style={{ borderLeftColor: "orange", borderLeftWidth: 4 }}
//             className="flex-row w-80 h-20 bg-gray-100 rounded-xl mb-2 justify-between pr-4 items-center"
//           >
//             <View className="flex-column pl-10 py-2 justify-between">
//               <FontAwesome5 name="truck-loading" size={34} color="orange" />
//               <Text>Stander</Text>
//             </View>
//             <View className="mx-auto">
//               <Text className="text-lg text-black font-bold">793DA</Text>
//             </View>
//             <View className="bg-yellow-300 rounded-xl w-11 itmes-center justify-center h-6">
//               <Text className="text-md text-center font-bold text-white">
//                 4 min
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{ borderLeftColor: "orange", borderLeftWidth: 4 }}
//             className="flex-row w-80 h-20 bg-gray-100 rounded-xl mb-2 justify-between pr-4 items-center"
//           >
//             <View className="flex-column pl-10 py-2 justify-between">
//               <FontAwesome6 name="truck-plane" size={34} color="orange" />
//               <Text>Stander</Text>
//             </View>
//             <View className="mx-auto">
//               <Text className="text-lg text-black font-bold">800DA</Text>
//             </View>
//             <View className="bg-yellow-300 rounded-xl w-11 itmes-center justify-center h-6">
//               <Text className="text-md text-center font-bold text-white">
//                 4 min
//               </Text>
//             </View>
//           </View>
//           <View
//             style={{ borderLeftColor: "orange", borderLeftWidth: 4 }}
//             className="flex-row w-80 h-20 bg-gray-100 rounded-xl mb-2 justify-between pr-4 items-center"
//           >
//             <View className="flex-column pl-10 py-2 justify-between">
//               <MaterialCommunityIcons
//                 name="tow-truck"
//                 size={44}
//                 color="orange"
//               />
//               <Text>Stander</Text>
//             </View>
//             <View className="mx-auto">
//               <Text className="text-lg text-black font-bold">543DA</Text>
//             </View>
//             <View className="bg-yellow-300 rounded-xl w-11 itmes-center justify-center h-6">
//               <Text className="text-md text-center font-bold text-white">
//                 4 min
//               </Text>
//             </View>
//           </View>
//         </BottomSheetView>
//       </BottomSheet>
//       <View style={styles.shadowProp} className="bg-white h-20 pt-4">
//         <View className="w-80 h-10 bg-orange-400 rounded-xl items-center justify-center pt-4 ml-6">
//           <TouchableOpacity className="w-full h-10 items-center pt-1"
//           onPress={()=>{navigation.navigate('RideReady')}}
//           >
//             <Text className="text-center text-white font-bold text-md">
//               Order Now
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <Text
//             style={{ fontSize: 12 }}
//             className="text-gray-300 text-sm text-center"
//           >
//             I Accept the general conditions and the privacy policy
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eee",
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: 24,
//     paddingHorizontal: 12,
//   },
//   shadowProp: {
//     shadowColor: "#171717",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 5,
//   },
// });

// export default Truck_Options;

// import { useRoute } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import { FontAwesome5, FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";

// const Truck_Options = () => {
//   const route = useRoute();

//   // استرداد البيانات الممررة
//   const drivers = route.params?.drivers;
//   console.log("driver ====>:",drivers);

//   // Render
//   return (
//     <View style={styles.container}>
//       {/* {drivers.map(renderDriver)} */}
//       <View style={styles.shadowProp} className="bg-white h-20 pt-4">
//         <View className="w-80 h-10 bg-orange-400 rounded-xl items-center justify-center pt-4 ml-6">
//           <TouchableOpacity className="w-full h-10 items-center pt-1">
//             <Text className="text-center text-white font-bold text-md">
//               Order Now
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <Text
//             style={{ fontSize: 12 }}
//             className="text-gray-300 text-sm text-center"
//           >
//             I Accept the general conditions and the privacy policy
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eee",
//   },
//   shadowProp: {
//     shadowColor: "#171717",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 5,
//   },
// });

// export default Truck_Options;

// import { useNavigation, useRoute } from "@react-navigation/native";
// import React, { useEffect, useMemo, useState } from "react";
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// import {
//   FontAwesome5,
//   FontAwesome6,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// const Truck_Options = () => {
//   const StartPoint = useMemo(() => ["38%", "50%", "80%"], []);
//   const navigation = useNavigation();
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [Latitude, setLatitude] = useState(null);
//   const [Longitude, setLongitude] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       try {
//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//         setLatitude(location.coords.latitude);
//         setLongitude(location.coords.longitude);
//       } catch (error) {
//         setErrorMsg("Error fetching location");
//       }
//     })();
//   }, []);

//   let initialRegion = {
//     latitude: Latitude || 36.7642,
//     longitude: Longitude || 3.1468,
//     latitudeDelta: 0.02,
//     longitudeDelta: 0.02,
//   };

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = `Latitude: ${Latitude}, Longitude: ${Longitude}`;
//   }
//   const route = useRoute();

//   // استرداد البيانات الممررة
//   const drivers = route.params?.drivers;
//   console.log("driver ====>:", drivers);

//   // Function to render each driver
//   const renderDriver = (driver, index) => (
//     <View key={index} style={styles.driverContainer}>
//       <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <FontAwesome5 name="truck-loading" size={34} color="orange" />
//           <Text style={styles.carNameText}> {driver.make} {driver.model}</Text>
//         </View>
//         <View style={styles.priceContainer}>
//           <Text style={styles.priceText}>{driver.cost} DA</Text>
//         </View>
//         <Text style={styles.driverNameText}>{driver.name}</Text>
//       </View>
//     </View>
//   );

//   // Render
//   return (
//     <View style={styles.container}>
//       <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
//         {/* Add markers here if needed */}
//         {Latitude && Longitude && (
//           <Marker
//             coordinate={{ latitude: Latitude, longitude: Longitude }}
//             title="Marker Title"
//             description="Marker Description"
//           />
//         )}
//       </MapView>
//       <BottomSheet
//         snapPoints={StartPoint}
//         handleIndicatorStyle={{ backgroundColor: "orange" }}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           {drivers.map(renderDriver)}
//         </BottomSheetView>
//       </BottomSheet>
//       <View style={styles.shadowProp} className="bg-white h-20 pt-4">
//         <View className="w-80 h-10 bg-orange-400 rounded-xl items-center justify-center pt-4 ml-6">
//           <TouchableOpacity className="w-full h-10 items-center pt-1">
//             <Text className="text-center text-white font-bold text-md">
//               Order Now
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <Text
//             style={{ fontSize: 12 }}
//             className="text-gray-300 text-sm text-center"
//           >
//             I Accept the general conditions and the privacy policy
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eee",
//   },
//   driverContainer: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//   },
//   carNameText: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   priceContainer: {
//     backgroundColor: '#f0ad4e',
//     borderRadius: 5,
//     paddingVertical: 2,
//     paddingHorizontal: 5,
//   },
//   priceText: {
//     fontSize: 18,
//     color: '#fff',
//   },
//   driverNameText: {
//     fontSize: 18,
//   },
//   shadowProp: {
//     shadowColor: "#171717",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 5,
//   },
// });
// export default Truck_Options;

// import { useNavigation, useRoute } from "@react-navigation/native";
// import React, { useEffect, useMemo, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";
// import {
//   FontAwesome5,
//   FontAwesome6,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import MapView, { Marker } from "react-native-maps";
// import * as Location from "expo-location";
// import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

// const Truck_Options = () => {
//   const StartPoint = useMemo(() => ["38%", "50%", "80%"], []);
//   const navigation = useNavigation();
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [Latitude, setLatitude] = useState(null);
//   const [Longitude, setLongitude] = useState(null);

//   useEffect(() => {
//     (async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== "granted") {
//         setErrorMsg("Permission to access location was denied");
//         return;
//       }

//       try {
//         let location = await Location.getCurrentPositionAsync({});
//         setLocation(location);
//         setLatitude(location.coords.latitude);
//         setLongitude(location.coords.longitude);
//       } catch (error) {
//         setErrorMsg("Error fetching location");
//       }
//     })();
//   }, []);

//   let initialRegion = {
//     latitude: Latitude || 36.7642,
//     longitude: Longitude || 3.1468,
//     latitudeDelta: 0.02,
//     longitudeDelta: 0.02,
//   };

//   let text = "Waiting..";
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = `Latitude: ${Latitude}, Longitude: ${Longitude}`;
//   }

//   //render
//   const route = useRoute();
//   const [selectedDriver, setSelectedDriver] = useState(null);
//   // استرداد البيانات الممررة
//   const drivers = route.params?.drivers;
//   console.log("driver ====>:", drivers);
//   // Function to render each driver
//   const renderDriver = (driver, index) => (
//     <TouchableOpacity
//       key={index}
//       style={[
//         styles.driverContainer,
//         driver === selectedDriver ? styles.selectedDriver : null,
//       ]}
//       onPress={() =>
//         setSelectedDriver((prevDriver) =>
//           prevDriver === driver ? null : driver
//         )
//       }
//     >
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <View style={{ flexDirection: "row", alignItems: "center" }}>
//           <FontAwesome5 name="truck-loading" size={34} color="orange" />
//           <Text style={styles.carNameText}>
//             {" "}
//             {driver.make} {driver.model}
//           </Text>
//         </View>
//         <View style={styles.priceContainer}>
//           <Text style={styles.priceText}>{driver.cost} DA</Text>
//         </View>
//         <Text style={styles.driverNameText}>{driver.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   // Render
//   return (
//     <View style={styles.container}>
//       <MapView style={{ flex: 1 }} initialRegion={initialRegion}>
//         {/* Add markers here if needed */}
//         {Latitude && Longitude && (
//           <Marker
//             coordinate={{ latitude: Latitude, longitude: Longitude }}
//             title="Marker Title"
//             description="Marker Description"
//           />
//         )}
//       </MapView>
//       <BottomSheet
//         snapPoints={StartPoint}
//         handleIndicatorStyle={{ backgroundColor: "orange" }}
//       >
//         <BottomSheetView style={styles.contentContainer}>
//           <FlatList
//             data={drivers}
//             renderItem={({ item }) => renderDriver(item)}
//             keyExtractor={(item) => item.id}
//           />
//         </BottomSheetView>
//       </BottomSheet>
//       <View style={styles.shadowProp} className="bg-white h-20 pt-4">
//         <View className="w-80 h-10 bg-orange-400 rounded-xl items-center justify-center pt-4 ml-6">
//           <TouchableOpacity
//             className="w-full h-10 items-center pt-1"
//             onPress={() => {
//               if (selectedDriver) {
//                 console.log(selectedDriver);
//                 navigation.navigate("RideReady", {
//                   driverSelected: selectedDriver,
//                 });
//               } else {
//                 alert("Please select a driver first.");
//               }
//             }}
//           >
//             <Text className="text-center text-white font-bold text-md">
//               Order Now
//             </Text>
//           </TouchableOpacity>
//         </View>
//         <View>
//           <Text
//             style={{ fontSize: 12 }}
//             className="text-gray-300 text-sm text-center"
//           >
//             I Accept the general conditions and the privacy policy
//           </Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#eee",
//   },
//   driverContainer: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: "#fff",
//     borderRadius: 5,
//   },
//   carNameText: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   priceContainer: {
//     backgroundColor: "#f0ad4e",
//     borderRadius: 5,
//     paddingVertical: 2,
//     paddingHorizontal: 5,
//   },
//   priceText: {
//     fontSize: 18,
//     color: "#fff",
//   },
//   driverNameText: {
//     fontSize: 18,
//   },
//   shadowProp: {
//     shadowColor: "#171717",
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   selectedDriver: {
//     backgroundColor: "#ddd",
//   },
// });
// export default Truck_Options;

import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome5,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const Truck_Options = () => {
  const StartPoint = useMemo(() => ["38%", "50%", "80%"], []);
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);

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
  const route = useRoute();

  // استرداد البيانات الممررة
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
            {" "}
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
          {drivers.map(renderDriver)}
        </BottomSheetView>
      </BottomSheet>
      <View style={styles.shadowProp} className="bg-white h-20 pt-4">
        <View className="w-80 h-10 bg-orange-400 rounded-xl items-center justify-center pt-4 ml-6">
          <TouchableOpacity
            className="w-full h-10 items-center pt-1"
            onPress={() => {
              if (selectedDriver) {
                console.log("Truck_Options");
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
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
