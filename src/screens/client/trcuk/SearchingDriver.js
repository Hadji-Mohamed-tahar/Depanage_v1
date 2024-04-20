// import { useRoute } from "@react-navigation/native";
// import React, { useEffect } from "react";
// import { View, Image, Text, StyleSheet } from "react-native";

// const SearchingDriver = ({navigation}) => {

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       navigation.navigate("Truck_Options")
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   //render
//   const route = useRoute();
//   // Access the fixed location data from the route params
//   const fixedLocation = route.params?.fixedLocation;
//   console.log(fixedLocation);
//   return (
//     <View style={styles.container}>
//       <View style={styles.contentIcon}>
//         <View style={styles.circles}>
//           <View style={styles.circle3} />
//           <View style={styles.circle2} />
//           <View style={styles.circle1} />
//           <Image
//             source={require("../../../../assets/imageApp/car.png")}
//             style={styles.icon}
//           />
//         </View>
//       </View>
//       <View style={styles.contentText}>
//         <Text style={styles.text}>Searching for a driver</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#3E4958",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   },
//   contentIcon: {},
//   contentText: {},
//   circles: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   circle1: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "white",
//     position: "absolute",
//   },
//   circle2: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "#f4eaea",
//     position: "relative",
//     position: "absolute",
//   },
//   circle3: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: "gray",
//     position: "absolute",
//   },
//   icon: {
//     position: "absolute",
//     width: 75,
//     height: 75,
//   },
//   text: {
//     fontSize: 24,
//     color: "white",
//     fontFamily: "Roboto",
//     bottom: 0,
//     right: 0,
//   },
// });

// export default SearchingDriver;

// import { useRoute } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import { View, Image, Text, StyleSheet } from "react-native";
// import axios from 'axios';

// const SearchingDriver = ({navigation}) => {
//   const [drivers, setDrivers] = useState([]);
//   const route = useRoute();

//   useEffect(() => {

//     // Access the fixed location data from the route params
//     const fixedLocation = route.params?.fixedLocation;

//     // Make an API call to the backend to get nearby drivers
//     axios.get(`http://192.168.244.231:3000/api/drivers/nearby?location=${fixedLocation?.name}`)
//       .then(res => setDrivers(res.data))
//       .catch(error => console.error(error))
//       .finally(() => {
//         console.log("data ==>",drivers);
//         navigation.navigate("Truck_Options")
//       }); // Navigate to the next page after the API call completes
//   }, []);

//   // Render
//   return (
//     <View style={styles.container}>
//       <View style={styles.contentIcon}>
//         <View style={styles.circles}>
//           <View style={styles.circle3} />
//           <View style={styles.circle2} />
//           <View style={styles.circle1} />
//           <Image
//             source={require("../../../../assets/imageApp/car.png")}
//             style={styles.icon}
//           />
//         </View>
//       </View>
//       <View style={styles.contentText}>
//         <Text style={styles.text}>Searching for a driver</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#3E4958",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   },
//   contentIcon: {},
//   contentText: {},
//   circles: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   circle1: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "white",
//     position: "absolute",
//   },
//   circle2: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "#f4eaea",
//     position: "relative",
//     position: "absolute",
//   },
//   circle3: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: "gray",
//     position: "absolute",
//   },
//   icon: {
//     position: "absolute",
//     width: 75,
//     height: 75,
//   },
//   text: {
//     fontSize: 24,
//     color: "white",
//     fontFamily: "Roboto",
//     bottom: 0,
//     right: 0,
//   },
// });

// export default SearchingDriver;

// import { useRoute } from "@react-navigation/native";
// import React, { useEffect, useState } from "react";
// import { View, Image, Text, StyleSheet } from "react-native";
// import axios from "axios";

// const SearchingDriver = ({ navigation }) => {
//   const [drivers, setDrivers] = useState([]);
//   const route = useRoute();

//   useEffect(() => {
//     // Access the fixed location data from the route params
//     const currentLocation = route.params?.currentLocation;
//     const destinationLocation = route.params?.destinationLocation;
//     const totalDistance = route.params?.totalDistance;

//     // Make an API call to the backend to get nearby drivers
//     console.log(currentLocation);
//     axios.get(`http://192.168.244.231:3000/api/drivers/nearby?location=${currentLocation?.city_name}&distance=${totalDistance}`)

//       .then((res) => {
//         setDrivers(res.data);
//         console.log("SearchingDriver :", res.data);
//       })
//       .catch((error) => console.error(error))
//       .finally(() => {
//         navigation.navigate("Truck_Options", { drivers: drivers });
//       }); // Navigate to the next page after the API call completes
//   }, []);

//   // Render
//   return (
//     <View style={styles.container}>
//       <View style={styles.contentIcon}>
//         <View style={styles.circles}>
//           <View style={styles.circle3} />
//           <View style={styles.circle2} />
//           <View style={styles.circle1} />
//           <Image
//             source={require("../../../../assets/imageApp/car.png")}
//             style={styles.icon}
//           />
//         </View>
//       </View>
//       <View style={styles.contentText}>
//         <Text style={styles.text}>Searching for a driver</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#3E4958",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//   },
//   contentIcon: {},
//   contentText: {},
//   circles: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   circle1: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: "white",
//     position: "absolute",
//   },
//   circle2: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     backgroundColor: "#f4eaea",
//     position: "relative",
//     position: "absolute",
//   },
//   circle3: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     backgroundColor: "gray",
//     position: "absolute",
//   },
//   icon: {
//     position: "absolute",
//     width: 75,
//     height: 75,
//   },
//   text: {
//     fontSize: 24,
//     color: "white",
//     fontFamily: "Roboto",
//     bottom: 0,
//     right: 0,
//   },
// });

// export default SearchingDriver;

import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import axios from "axios";

const SearchingDriver = ({ navigation }) => {
  const route = useRoute();
  useEffect(() => {
    const currentLocation = route.params?.currentLocation;
    const destinationLocation = route.params?.destinationLocation;
    const totalDistance = route.params?.totalDistance; 
  
    axios.get(`http://192.168.244.231:3000/api/drivers/nearby`, {
      params: {
        location: currentLocation?.city_name,
        distance: totalDistance
      }
    })
      .then(res => {
        console.log("*****SearchingDriving****");

        navigation.navigate('Truck_Options', { 
          drivers: res.data, 
          currentLocation: currentLocation, 
          destinationLocation: destinationLocation, 
          totalDistance: totalDistance 
        }); 
      })
      .catch(error => console.error(error));
  }, []);

  

  // Render
  return (
    <View style={styles.container}>
      <View style={styles.contentIcon}>
        <View style={styles.circles}>
          <View style={styles.circle3} />
          <View style={styles.circle2} />
          <View style={styles.circle1} />
          <Image
            source={require("../../../../assets/imageApp/car.png")}
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.contentText}>
        <Text style={styles.text}>Searching for a driver</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E4958",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  contentIcon: {},
  contentText: {},
  circles: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  circle1: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "white",
    position: "absolute",
  },
  circle2: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#f4eaea",
    position: "relative",
    position: "absolute",
  },
  circle3: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "gray",
    position: "absolute",
  },
  icon: {
    position: "absolute",
    width: 75,
    height: 75,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontFamily: "Roboto",
    bottom: 0,
    right: 0,
  },
});

export default SearchingDriver;
