// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useRoute } from "@react-navigation/native";

// const RideReady = ({navigation}) => {
//   const route = useRoute();
//   // استرداد البيانات الممررة
//   const driverSelected = route.params?.driverSelected;
//   console.log("RideReady====>",driverSelected);
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.text1}>Slot 3</Text>
//         <Image source={require('../../../../assets/imageApp/car.png')} style={styles.icon} />
//         <Text style={styles.text2}>Your ride is ready!</Text>
//         <View style={styles.buttons}>
//           <TouchableOpacity style={styles.button}
//           onPress={() => {navigation.navigate("OnTrip")}}>
//             <Text style={styles.buttonText}>I'm Coming</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={() => {}}>
//             <Text style={styles.buttonText}>call</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: 'yellow',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',

//   },
//   text1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   icon: {
//     width: 75,
//     height: 75,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   text2: {
//     fontSize: 20,
//     margin:5
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 10,
//     gap:10
//   },
//   button: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//   },
// });

// export default RideReady;
// استيراد Expo Notifications
// import * as Notifications from 'expo-notifications';
// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useRoute } from "@react-navigation/native";

// // تعريف الدالة لإرسال الإشعار
// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'Your ride is ready!',
//     body: 'Your driver is waiting for you.',
//     data: { someData: 'goes here' },
//   };

//   await Notifications.scheduleNotificationAsync({
//     content: message,
//     trigger: null,
//   });
// }

// const RideReady = ({navigation}) => {
//   const route = useRoute();
//   // استرداد البيانات الممررة
//   const driverSelected = route.params?.driverSelected;
//   console.log("RideReady====>",driverSelected);

//   // استدعاء الدالة في المكان المناسب
//   async function handleOnPress() {
//     // طلب الأذونات
//     const { status } = await Notifications.requestPermissionsAsync();
//     if (status !== 'granted') {
//       alert('You need to enable push notifications!');
//       return;
//     }

//     // إرسال الإشعار
//     sendPushNotification(driverSelected.expo_push_token);
//     // التنقل إلى الشاشة التالية
//     navigation.navigate("OnTrip");
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.text1}>Slot 3</Text>
//         <Image source={require('../../../../assets/imageApp/car.png')} style={styles.icon} />
//         <Text style={styles.text2}>Your ride is ready!</Text>
//         <View style={styles.buttons}>
//           <TouchableOpacity style={styles.button}
//           onPress={handleOnPress}>
//             <Text style={styles.buttonText}>I'm Coming</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.button} onPress={() => {}}>
//             <Text style={styles.buttonText}>call</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: 'yellow',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',

//   },
//   text1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   icon: {
//     width: 75,
//     height: 75,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   text2: {
//     fontSize: 20,
//     margin:5
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 10,
//     gap:10
//   },
//   button: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//   },
// });

// export default RideReady;

// import * as Notifications from 'expo-notifications';
// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useRoute, useNavigation } from "@react-navigation/native";
// import { useSelector } from 'react-redux';

// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: 'default',
//     title: 'New ride request!',
//     body: 'You have a new ride request.',
//     data: { someData: 'goes here' },
//   };

//   await Notifications.scheduleNotificationAsync({
//     content: message,
//     trigger: null,
//   });
// }

// const RideReady = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const driverSelected = route.params?.driverSelected;

//   const [isVisible, setIsVisible] = useState(false); // حالة الأزرار
//   const [counter, setCounter] = useState(10); // مؤقت تنازلي
//   const userId = useSelector(state => state.user_id);
//   const username = useSelector(state => state.username);
//   // console.log("userId==",userId);
//   // console.log("username==",username);

//   useEffect(() => {
//     async function sendNotification() {
//       const { status } = await Notifications.requestPermissionsAsync();
//       if (status !== 'granted') {
//         alert('You need to enable push notifications!');
//         return;
//       }

//       await sendPushNotification(driverSelected.expo_push_token);

//       // إذا لم يتم الرد خلال دقيقة واحدة، أظهر الأزرار
//       const timer = setTimeout(() => {
//         setIsVisible(true);
//       }, 10000);

//       return () => clearTimeout(timer); // تنظيف المؤقت
//     }

//     sendNotification();
//   }, []);

//   // تحديث المؤقت كل ثانية
//   useEffect(() => {
//     const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
//     return () => clearInterval(timer);
//   }, [counter]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.text1}>Slot 3</Text>
//         <Text style={styles.text1}>Time remaining: {counter} seconds</Text>
//         <Image source={require('../../../../assets/imageApp/car.png')} style={styles.icon} />
//         <Text style={styles.text2}>Your ride is ready!</Text>
//         {isVisible && (
//           <View style={styles.buttons}>
//             {/* <TouchableOpacity style={styles.button}
//             onPress={() => {navigation.navigate("OnTrip")}}>
//               <Text style={styles.buttonText}>I'm Coming</Text>
//             </TouchableOpacity> */}
//             <TouchableOpacity style={styles.button} onPress={() => {navigation.goBack();}}>
//               <Text style={styles.buttonText}>Choose another driver</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={async () => {
//               setIsVisible(false);
//               setCounter(10);
//               await sendPushNotification(driverSelected.expo_push_token);
//             }}>
//               <Text style={styles.buttonText}>Resend request</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: 'yellow',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',

//   },
//   text1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   icon: {
//     width: 75,
//     height: 75,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   text2: {
//     fontSize: 20,
//     margin:5
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 10,
//     gap:10
//   },
//   button: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//   },
// });

// export default RideReady;

// import * as Notifications from 'expo-notifications';
// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useRoute, useNavigation } from "@react-navigation/native";
// import { useSelector } from 'react-redux';
// import axios from 'axios';

// // تعيين معالج الإشعارات
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// const RideReady = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
// const driverSelected = route.params?.driverSelected;
//   const currentLocation = route.params?.currentLocation;
//   const destinationLocation = route.params?.destinationLocation;
//   const totalDistance = route.params?.totalDistance;
//   const [isVisible, setIsVisible] = useState(true); // حالة الأزرار
//   const [counter, setCounter] = useState(10); // مؤقت تنازلي
//   const [rideRequested, setRideRequested] = useState(false); // حالة الطلب
//   const userId = useSelector(state => state.user_id);
//   const username = useSelector(state => state.username);

//   // هذه الدالة ستتم استدعاؤها عندما يتم تلقي إشعار
//   function handleNotification(notification) {
//     const { title, body } = notification.request.content;
//     console.log(`Received notification: ${title} - ${body}`);
//   }

//   // إضافة المستمع
//   Notifications.addNotificationReceivedListener(handleNotification);

//   async function sendPushNotification(expoPushToken) {
//     const message = {
//       to: expoPushToken,
//       sound: 'default',
//       title: 'New ride request!',
//       body: 'You have a new ride request.',
//       data: { someData: 'goes here' },
//     };

//     await Notifications.scheduleNotificationAsync({
//       content: message,
//       trigger: null,
//     });
//   }

//   const handleRequestRide = async () => {
//     try {
//       const response = await axios.post("http://192.168.244.231:3000/request_trip",
//       {
//           customer_id: userId,
//           pickup_location: {
//             latitude: currentLocation.latitude,
//             longitude: currentLocation.longitude,
//             city_name: currentLocation.city_name,
//           },
//           destination: {
//             latitude: destinationLocation.latitude,
//             longitude: destinationLocation.longitude,
//             city_name: destinationLocation.city_name,
//           },
//           driver_id: driverSelected.id,
//           totalDistance: totalDistance,
//         }
//       );

//       if (response.status === 200) {
//         alert("تم إنشاء الرحلة والطلب بنجاح");
//         setRideRequested(true); // تحديث حالة الطلب
//         // يمكنك الانتقال إلى الشاشة التالية هنا

//         // إرسال الإشعار بعد إنشاء الرحلة والطلب بنجاح
//         await sendPushNotification(driverSelected.expo_push_token);
//       } else {
//         alert("حدث خطأ أثناء إنشاء الرحلة والطلب");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // تحديث المؤقت كل ثانية
//   useEffect(() => {
//     if (counter === 0) {
//       setIsVisible(true);
//     } else {
//       const timer = setInterval(() => setCounter(counter - 1), 1000);
//       return () => clearInterval(timer);
//     }
//   }, [counter]);
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.text1}>Slot 3</Text>
//         {rideRequested && <Text style={styles.text1}>Time remaining: {counter} seconds</Text>}
//         <Image source={require('../../../../assets/imageApp/car.png')} style={styles.icon} />
//         <Text style={styles.text2}>Your ride is ready!</Text>
//         {isVisible && (
//           <View style={styles.buttons}>
//             {!rideRequested && <TouchableOpacity style={styles.button} onPress={handleRequestRide}>
//               <Text style={styles.buttonText}>Request Ride</Text>
//             </TouchableOpacity>}
//             {rideRequested && <TouchableOpacity style={styles.button} onPress={() => {navigation.goBack();}}>
//               <Text style={styles.buttonText}>Choose another driver</Text>
//             </TouchableOpacity>}
//             {rideRequested && <TouchableOpacity style={styles.button} onPress={async () => {
//               setIsVisible(false);
//               setCounter(10);
//               await sendPushNotification(driverSelected.expo_push_token);
//             }}>
//               <Text style={styles.buttonText}>Resend request</Text>
//             </TouchableOpacity>}
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   card: {
//     backgroundColor: 'yellow',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',

//   },
//   text1: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   icon: {
//     width: 75,
//     height: 75,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   text2: {
//     fontSize: 20,
//     margin:5
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 10,
//     gap:10
//   },
//   button: {
//     backgroundColor: 'white',
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//   },
// });

// export default RideReady;

// import * as Notifications from "expo-notifications";
// import React, { useEffect, useState } from "react";
// import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { useRoute, useNavigation } from "@react-navigation/native";
// import { useSelector } from "react-redux";
// import axios from "axios";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// const RideReady = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const driverSelected = route.params?.driverSelected;
//   const currentLocation = route.params?.currentLocation;
//   const destinationLocation = route.params?.destinationLocation;
//   const totalDistance = route.params?.totalDistance;

//   const [isVisible, setIsVisible] = useState(true);
//   const [counter, setCounter] = useState(10);
//   const [rideRequested, setRideRequested] = useState(false);
//   const userId = useSelector((state) => state.user_id);
//   const username = useSelector((state) => state.username);
//   const [tripId, setTripId] = useState(null);

//   function handleNotification(notification) {
//     const { title, body } = notification.request.content;
//     // console.log(`Received notification: ${title} - ${body}`);
//   }

//   Notifications.addNotificationReceivedListener(handleNotification);

//   async function sendPushNotification(expoPushToken) {
//     const message = {
//       to: expoPushToken,
//       sound: "default",
//       title: "New ride request!",
//       body: "You have a new ride request.",
//       data: { someData: "goes here" },
//     };

//     await Notifications.scheduleNotificationAsync({
//       content: message,
//       trigger: null,
//     });
//   }

//   const handleRequestRide = async () => {
//     try {
//       const response = await axios.post(
//         "http://192.168.244.231:3000/request_trip",
//         {
//           customer_id: userId,
//           pickup_location: {
//             latitude: currentLocation.latitude,
//             longitude: currentLocation.longitude,
//             city_name: currentLocation.city_name,
//           },
//           destination: {
//             latitude: destinationLocation.latitude,
//             longitude: destinationLocation.longitude,
//             city_name: destinationLocation.city_name,
//           },
//           driver_id: driverSelected.id,
//           totalDistance: totalDistance,
//         }
//       );

//       if (response.status === 200) {
//         alert("تم إنشاء الرحلة والطلب بنجاح");
//         setRideRequested(true);
//         setIsVisible(false);
//         setTripId(response.data.trip_id);
//         await sendPushNotification(driverSelected.expo_push_token);
//       } else {
//         alert("حدث خطأ أثناء إنشاء الرحلة والطلب");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (rideRequested && counter === 0) {
//       setIsVisible(true);
//     } else if (rideRequested) {
//       const timer = setInterval(() => setCounter(counter - 1), 1000);
//       return () => clearInterval(timer);
//     }
//   }, [counter, rideRequested]);

//   // دالة للتحقق من حالة الرحلة
//   const checkTripStatus = async () => {
//     try {
//       const response = await axios.get("http://192.168.244.231:3000/check_trip_status", {
//         params: {
//           trip_id: tripId, // معرف الرحلة التي تم إنشاؤها عند طلب الرحلة
//         },
//       });

//       if (response.status === 200) {
//         const tripStatus = response.data.trip_status;
//         // تحقق من حالة الرحلة هنا وقم بتحديث الواجهة الرسومية وفقًا لذلك
//         alert(`your trip is :${tripStatus}`)
//         console.log("حالة الرحلة",tripStatus);
//         navigation.navigate("OnTrip")
//       } else {
//         console.error("حدث خطأ أثناء التحقق من حالة الرحلة");
//       }
//     } catch (error) {
//       alert("حدث خطا")
//       console.error(error);
//     }
//   };

//   // بدء التحقق من حالة الرحلة بمجرد طلب الرحلة
//   useEffect(() => {
//     if (rideRequested) {
//       const intervalId = setInterval(checkTripStatus, 10000); // كل 10 ثواني
//       return () => clearInterval(intervalId); // تنظيف عند فك التحميل
//     }
//   }, [rideRequested]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.text1}>Slot 3</Text>
//         {rideRequested && (
//           <Text style={styles.text1}>Time remaining: {counter} seconds</Text>
//         )}
//         <Image
//           source={require("../../../../assets/imageApp/car.png")}
//           style={styles.icon}
//         />
//         <Text style={styles.text2}>Your ride is ready!</Text>
//         {isVisible && (
//           <View style={styles.buttons}>
//             {!rideRequested && (
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={handleRequestRide}
//               >
//                 <Text style={styles.buttonText}>Request Ride</Text>
//               </TouchableOpacity>
//             )}
//             {rideRequested && (
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => {
//                   navigation.goBack();
//                 }}
//               >
//                 <Text style={styles.buttonText}>Choose another driver</Text>
//               </TouchableOpacity>
//             )}
//             {rideRequested && (
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={async () => {
//                   setIsVisible(false);
//                   setCounter(10);
//                   await sendPushNotification(driverSelected.expo_push_token);
//                 }}
//               >
//                 <Text style={styles.buttonText}>Resend request</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   card: {
//     backgroundColor: "yellow",
//     padding: 20,
//     borderRadius: 10,
//     alignItems: "center",
//   },
//   text1: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   icon: {
//     width: 75,
//     height: 75,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   text2: {
//     fontSize: 20,
//     margin: 5,
//   },
//   buttons: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     marginTop: 10,
//     gap: 10,
//   },
//   button: {
//     backgroundColor: "white",
//     padding: 10,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 16,
//   },
// });

// export default RideReady;

import * as Notifications from "expo-notifications";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import axios from "axios";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const RideReady = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const driverSelected = route.params?.driverSelected;
  const currentLocation = route.params?.currentLocation;
  const destinationLocation = route.params?.destinationLocation;
  const totalDistance = route.params?.totalDistance;

  const [isVisible, setIsVisible] = useState(true);
  const [counter, setCounter] = useState(10);
  const [rideRequested, setRideRequested] = useState(false);
  const [tripId, setTripId] = useState(null);
  const userId = useSelector((state) => state.user_id);
  const username = useSelector((state) => state.username);
  function handleNotification(notification) {
    const { title, body } = notification.request.content;
    // console.log(`Received notification: ${title} - ${body}`);
  }

  Notifications.addNotificationReceivedListener(handleNotification);

  async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "New ride request!",
      body: "You have a new ride request.",
      data: { someData: "goes here" },
    };

    await Notifications.scheduleNotificationAsync({
      content: message,
      trigger: null,
    });
  }

  //request trip function
  const handleRequestRide = async () => {
    try {
      const response = await axios.post(
        "http://192.168.244.231:3000/request_trip",
        {
          customer_id: userId,
          pickup_location: {
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            city_name: currentLocation.city_name,
          },
          destination: {
            latitude: destinationLocation.latitude,
            longitude: destinationLocation.longitude,
            city_name: destinationLocation.city_name,
          },
          driver_id: driverSelected.id,
          totalDistance: totalDistance,
        }
      );

      if (response.status === 200) {
        alert("تم إنشاء الرحلة والطلب بنجاح");
        setRideRequested(true);
        setIsVisible(false);
        console.log(response.data.trip_id);
        setTripId(response.data.trip_id);
        console.log("in PAGE RideRedy Token:",driverSelected.expo_push_token);
        await sendPushNotification(driverSelected.expo_push_token);
      } else {
        alert("حدث خطأ أثناء إنشاء الرحلة والطلب");
      }
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء إنشاء الرحلة والطلب");
    }
  };

  useEffect(() => {
    if (rideRequested && counter === 0) {
      setIsVisible(true);
    } else if (rideRequested) {
      const timer = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [counter, rideRequested]);

  // دالة للتحقق من حالة الرحلة
  const checkTripStatus = async () => {
    try {
      const response = await axios.get(
        "http://192.168.244.231:3000/check_trip_status",
        {
          params: {
            trip_id: tripId, // معرف الرحلة التي تم إنشاؤها عند طلب الرحلة
          },
        }
      );

      if (response.status === 200) {
        const tripStatus = response.data.trip_status;
        // تحقق من حالة الرحلة هنا وقم بتحديث الواجهة الرسومية وفقًا لذلك
        alert(`your trip is : ${tripStatus}`);
        if (tripStatus === "accepted") {
          console.log("تم قبول الرحلة من قبل السائق");
          navigation.navigate("OnTrip");
        }
      } else if (response.status === 400) {
        console.error("trip_id is required");
      } else if (response.status === 404) {
        console.error("Trip not found");
      } else {
        console.error("An error occurred while checking the trip status");
      }
    } catch (error) {
      console.log("tripId==>", tripId);
      console.error("this errore in ==>", error);
    }
  };

  // بدء التحقق من حالة الرحلة بمجرد طلب الرحلة
  useEffect(() => {
    if (rideRequested && tripId) {
      const intervalId = setInterval(checkTripStatus, 10000); // كل 10 ثواني
      return () => clearInterval(intervalId); // تنظيف عند فك التحميل
    }
  }, [rideRequested, tripId]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text1}>Slot 3</Text>
        {rideRequested && (
          <Text style={styles.text1}>Time remaining: {counter} seconds</Text>
        )}
        <Image
          source={require("../../../../assets/imageApp/car.png")}
          style={styles.icon}
        />
        <Text style={styles.text2}>Your ride is ready!</Text>
        {isVisible && (
          <View style={styles.buttons}>
            {!rideRequested && (
              <TouchableOpacity
                style={styles.button}
                onPress={handleRequestRide}
              >
                <Text style={styles.buttonText}>Request Ride</Text>
              </TouchableOpacity>
            )}
            {rideRequested && (
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Text style={styles.buttonText}>Choose another driver</Text>
              </TouchableOpacity>
            )}
            {rideRequested && (
              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  setIsVisible(false);
                  setCounter(10);
                  await sendPushNotification(driverSelected.expo_push_token);
                }}
              >
                <Text style={styles.buttonText}>Resend request</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "yellow",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    width: 75,
    height: 75,
    marginTop: 10,
    marginBottom: 10,
  },
  text2: {
    fontSize: 20,
    margin: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    gap: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default RideReady;
