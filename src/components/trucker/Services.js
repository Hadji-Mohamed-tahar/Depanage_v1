
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import React, { useState } from "react";
// import { FontAwesome } from "@expo/vector-icons";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const Services = ({ navigation }) => {
//   const [online, setOnline] = useState(false); // تعيين الحالة الافتراضية إلى offline
//   const userId = useSelector((state) => state.user_id);

//   const makeOffLine = () => {
//     setOnline(false);
//     updateAvailability(false);
//   };
//   const makeOnline = () => {
//     setOnline(true);
//     updateAvailability(true);
//   };

//   const updateAvailability = (is_available) => {
//     axios
//       .post("http://192.168.244.231:3000/availability", {
//         driver_id: userId,
//         is_available: is_available,
//       })
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <View>
//       <View style={styles.shadow} className="bg-white rounded-lg p-2">
//         <Text className="text-black text-xl font-bold">Net Profit :</Text>
//         <Text className="text-black font-bold text-2xl">0 DA</Text>
//       </View>
//       <View className="flex-row my-4 mr-10">
//         <Text className="text-lg text-orange-900 font-bold">
//           You are out of the servise :
//         </Text>
//       </View>
//       <View style={{ width: "100%" }} className="flex-row space-x-3">
//         <TouchableOpacity
//           style={{
//             width: "43%",
//             height: 100,
//             shadowColor: "#000",
//             shadowOffset: { width: 10, height: 3 },
//             shadowOpacity: 0.25,
//             shadowRadius: 3.84,
//             elevation: 5,
//           }}
//           className="bg-white items-center justify-center rounded-md flex-column space-y-1"
//           onPress={() => {
//             makeOnline();
//           }}
//         >
//           <FontAwesome
//             name="power-off"
//             size={44}
//             color={online ? "green" : "gray"}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             width: "43%",
//             height: 100,
//             shadowColor: "#000",
//             shadowOffset: { width: 10, height: 3 },
//             shadowOpacity: 0.25,
//             shadowRadius: 3.84,
//             elevation: 5,
//           }}
//           className="bg-white items-center justify-center rounded-md flex-column space-y-1"
//           onPress={() => {
//             makeOffLine();
//           }}
//         >
//           <FontAwesome
//             name="power-off"
//             size={44}
//             color={!online ? "red" : "gray"}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   shadow: {
//     shadowColor: "#000",
//     shadowOffset: { width: 10, height: 3 },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
// });
// export default Services;


import * as Notifications from 'expo-notifications';
import React, { useState, useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { useSelector } from "react-redux";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Services = ({ navigation }) => {
  const [online, setOnline] = useState(false); // تعيين الحالة الافتراضية إلى offline
  const userId = useSelector((state) => state.user_id);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      const { title, body } = notification.request.content;
      console.log(`Received notification: ${title} - ${body}`);

      // تحديث الحالة أو تنفيذ أي عمل تريده هنا
      // على سبيل المثال، يمكنك التنقل إلى صفحة "Requsete_course" هنا
      navigation.navigate("Requsete_course");
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const makeOffLine = () => {
    setOnline(false);
    updateAvailability(false);
  };
  const makeOnline = () => {
    setOnline(true);
    updateAvailability(true);
  };

  const updateAvailability = (is_available) => {
    axios
      .post("http://192.168.244.231:3000/availability", {
        driver_id: userId,
        is_available: is_available,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View>
      <View style={styles.shadow} className="bg-white rounded-lg p-2">
        <Text className="text-black text-xl font-bold">Net Profit :</Text>
        <Text className="text-black font-bold text-2xl">0 DA</Text>
      </View>
      <View className="flex-row my-4 mr-10">
        <Text className="text-lg text-orange-900 font-bold">
          You are out of the servise :
        </Text>
      </View>
      <View style={{ width: "100%" }} className="flex-row space-x-3">
        <TouchableOpacity
          style={{
            width: "43%",
            height: 100,
            shadowColor: "#000",
            shadowOffset: { width: 10, height: 3 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          className="bg-white items-center justify-center rounded-md flex-column space-y-1"
          onPress={() => {
            makeOnline();
          }}
        >
          <FontAwesome
            name="power-off"
            size={44}
            color={online ? "green" : "gray"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "43%",
            height: 100,
            shadowColor: "#000",
            shadowOffset: { width: 10, height: 3 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
          className="bg-white items-center justify-center rounded-md flex-column space-y-1"
          onPress={() => {
            makeOffLine();
          }}
        >
          <FontAwesome
            name="power-off"
            size={44}
            color={!online ? "red" : "gray"}
          />
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
    elevation: 5,
  },
});

export default Services;
