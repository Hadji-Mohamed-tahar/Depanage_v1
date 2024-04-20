// import {
//   Pressable,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Image,
// } from "react-native";
// import React, { useState } from "react";
// import { Feather, Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";

// const Email_Registre = () => {
//   const [isSelected, setSelected] = useState(false);
//   const [checked, setChecked] = useState(false);
//   const [backChecked, setBackChecked] = useState("bg-white");
//   const handlePress = () => {
//     setChecked(!checked);
//     setBackChecked(checked ? "bg-orange-500" : "bg-white");
//   };
//   return (
//     <View>
//       <View>
//         <View
//           style={{ width: 290 }}
//           className="flex-row px-3 mt-1 mb-6 mx-auto border-b space-x-4"
//         >
//           <View>
//             <Entypo name="email" size={24} color="gray" />
//           </View>
//           <View className="pb-2">
//             <TextInput placeholder="Email" />
//           </View>
//         </View>
//         <View
//           style={{ width: 290 }}
//           className="flex-row px-3 mt-4 mb-6 mx-auto border-b space-x-4"
//         >
//           <View>
//             <Feather name="phone" size={24} color="gray" />
//           </View>
//           <View className="pb-2">
//             <TextInput placeholder="+213 --- --- ---" />
//           </View>
//         </View>
//         <View
//           style={{ width: 290 }}
//           className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
//         >
//           <View>
//             <MaterialIcons name="password" size={24} color="gray" />
//           </View>
//           <View className="pb-2">
//             <TextInput placeholder="Password" />
//           </View>
//         </View>
//         <View
//           style={{ width: 290 }}
//           className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
//         >
//           <View>
//             <MaterialIcons name="password" size={24} color="gray" />
//           </View>
//           <View className="pb-2">
//             <TextInput placeholder="Password Confirmation" />
//           </View>
//         </View>
//         <View className="flex-row my-3 items-center justify-center space-x-3">
//           <Pressable
//             className={`w-6 h-6 items-center justify-center rounded-md border border-2 border-orange-500 ${backChecked}`}
//             onPress={handlePress}
//           >
//             {!checked && <AntDesign name="check" size={20} color="white" />}
//           </Pressable>
//           <Text className="text-gray-500">
//             Do you agree to all terms and conditoin
//           </Text>
//         </View>
//       </View>
//       <View>
//         {/* Button Phone */}
//         <View className="flex-row mx-auto">
//           <TouchableOpacity
//             disabled={true && checked}
//             style={{ backgroundColor: "#FF9B63" }}
//             className="w-80 rounded-xl p-4"
//           >
//             <Text className="text-white font-bold text-center">
//               Create Account
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Email_Registre;

import axios from "axios";
import {
  Pressable,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather, Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";

import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { Platform } from "react-native";

const Email_Registre = ({ navigation ,role}) => {
  const [isSelected, setSelected] = useState(false);
  const [checked, setChecked] = useState(false);
  const [backChecked, setBackChecked] = useState("bg-white");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [expoPushToken, setExpoPushToken] = useState(null);

  const handlePress = () => {
    setChecked(!checked);
    setBackChecked(checked ? "bg-orange-500" : "bg-white");
  };
  // async function registerForPushNotificationsAsync() {
  //   let token;
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!');
  //       return;
  //     }
  //     token = (await Notifications.getExpoPushTokenAsync({experienceId: '@mohamed9999/appOfficiel', projectId: '66e6f65b-4f63-4ebf-a286-f6f7fd3f4684'})).data;
  //   } else {
  //     alert('Must use physical device for Push Notifications');
  //   }

  //   if (Platform.OS === 'android') {
  //     Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     });
  //   }
  // console.log("token===> :",token);
  //   return token;
  // }

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      token = (
        await Notifications.getExpoPushTokenAsync({
          experienceId: "@mohamed9999/appOfficiel",
          projectId: "66e6f65b-4f63-4ebf-a286-f6f7fd3f4684",
        })
      ).data;
    } else {
      alert("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    setExpoPushToken(token);
  }

  // const handleRegister = async () => {
  //   try {
  //     const response = await axios.post(
  //       "http://192.168.244.231:3000/register",
  //       {
  //         name: "adel",
  //         email: email,
  //         password: password,
  //         phone_number: phoneNumber,
  //         user_type: "customer", // أو 'driver' حسب الحالة
  //         // expo_push_token: expoPushToken, // إذا كنت تستخدم Expo للإشعارات
  //       }
  //     );

  //     if (response.status === 201) {
  //       alert("User registered successfully");
  //     } else {
  //       alert("Registration failed");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleRegister = async () => {
    try {
      const response = await axios.post(
        "http://192.168.244.231:3000/register",
        {
          name: "adel",
          email: email,
          password: password,
          phone_number: phoneNumber,
          user_type: role, // أو 'driver' حسب الحالة
          expo_push_token: expoPushToken, // إرسال الرمز إلى الخادم
        }
      );

      if (response.status === 201) {
        alert("User registered successfully");
        if(role=="driver"){
          navigation.navigate("LoginTrucker2");
        }else{
          navigation.navigate("LoginClient");
        }
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <View>
      <View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-1 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <Entypo name="email" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput
              placeholder="Email"
              onChangeText={setEmail}
              value={email}
            />
          </View>
        </View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-4 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <Feather name="phone" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput
              placeholder="+213 --- --- ---"
              onChangeText={setPhoneNumber}
              value={phoneNumber}
            />
          </View>
        </View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <MaterialIcons name="password" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <MaterialIcons name="password" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput
              placeholder="Password Confirmation"
              onChangeText={setPasswordConfirmation}
              value={passwordConfirmation}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View className="flex-row my-3 items-center justify-center space-x-3">
          <Pressable
            className={`w-6 h-6 items-center justify-center rounded-md border border-2 border-orange-500 ${backChecked}`}
            onPress={handlePress}
          >
            {!checked && <AntDesign name="check" size={20} color="white" />}
          </Pressable>
          <Text className="text-gray-500">
            Do you agree to all terms and conditoin
          </Text>
        </View>
      </View>
      <View>
        {/* Button Phone */}
        <View className="flex-row mx-auto">
          <TouchableOpacity
            disabled={true && checked}
            style={{ backgroundColor: "#FF9B63" }}
            className="w-80 rounded-xl p-4"
            onPress={handleRegister}
          >
            <Text className="text-white font-bold text-center">
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Email_Registre;
