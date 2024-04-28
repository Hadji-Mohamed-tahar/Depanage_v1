// import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
// import React from "react";
// import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";

// const Email = ({navigation}) => {
//   return (
//     <View>
//       <View>
//         <View
//           style={{ width: 290 }}
//           className="flex-row px-3 mt-11 mb-6 mx-auto border-b space-x-4"
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
//           className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
//         >
//           <View>
//             <MaterialIcons name="password" size={24} color="black" />
//           </View>
//           <View className="pb-2">
//             <TextInput placeholder="Password" />
//           </View>
//         </View>
//       </View>
//       <View>
//         {/* Button Phone */}
//         <View className="flex-row mx-auto">
//           <TouchableOpacity
//             style={{ backgroundColor: "#FF9B63" }}
//             className="w-80 rounded-xl p-4"
//             onPress={()=>navigation.navigate("HomeClient")}
//           >
//             <Text className="text-white font-bold text-center">
//               Login
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Email;

import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo, AntDesign, MaterialIcons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "../../actions/actions"; 

const Email = ({ navigation ,role}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [expoPushToken, setExpoPushToken] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      console.log(expoPushToken);
      const response = await axios.post("http://192.168.244.231:3000/login", {
        email: email,
        password: password,
        expo_push_token: expoPushToken, // إرسال الرمز إلى الخادم
      });

      if (response.status === 200) {
        alert("Login successful");
         // حفظ user_id و username في Redux
      dispatch(loginSuccess(response.data.user_id, response.data.username));
      
        if(role=="driver"){
          navigation.navigate("Trucker_vision");
        }else{
          navigation.navigate("HomeClient");
        }
      } else {
        alert("Email or password is incorrect");
      }
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return (
    <View>
      <View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-11 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <Entypo name="email" size={24} color="gray" />
          </View>
          <View className="pb-2">
            <TextInput
              placeholder="yyyyyyyy"
              onChangeText={setEmail}
              value={email}
            />
          </View>
        </View>
        <View
          style={{ width: 290 }}
          className="flex-row px-3 mt-2 mb-6 mx-auto border-b space-x-4"
        >
          <View>
            <MaterialIcons name="password" size={24} color="black" />
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
      </View>
      <View>
        {/* Button Phone */}
        <View className="flex-row mx-auto">
          <TouchableOpacity
            style={{ backgroundColor: "#FF9B63" }}
            className="w-80 rounded-xl p-4"
            onPress={handleLogin}
          >
            <Text className="text-white font-bold text-center">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Email;
