import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";

import Phone_Registre from "../../../components/auth/Phone_Registre";
import Email_Registre from "../../../components/auth/Email_Registre";

const SignUp2 = ({ navigation }) => {
  const [click, setClick] = useState(false);
  const [backColor, setBackColor] = useState("");
  const [backColorN, setBackColorN] = useState("bg-white");
  const handlePressPhone = () => {
    setClick(true);
    setBackColor(click ? "bg-white" : "");
    setBackColorN(click ? "" : "bg-white");
  };
  const handlePressEmail = () => {
    setClick(false);
    setBackColorN(click ? "" : "bg-white");
    setBackColor(click ? "bg-white" : "");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
      <View className="flex-1 items-start justify-start w-full h-screen bg-white pt-14 mt-14">
        <Text
          style={{ fontSize: 20 }}
          className="text-black font-bold pl-9 mb-1"
        >
          Sign Up Account
        </Text>
        <Text style={{ fontSize: 15 }} className="text-gray-400 font-bold pl-9">
          Hello, welcome back to our account
        </Text>
        {/* Phone or Email */}
        <View
          style={{ width: 300, height: 56, backgroundColor: "#EDEDED" }}
          className="rounded-xl mt-9 mb-4 mx-auto flex-row p-2"
        >
          <View>
            <TouchableOpacity
              style={{ width: 140, height: 40 }}
              className={`${backColor} justify-center rounded-xl shadow-md `}
              onPress={handlePressPhone}
            >
              <Text
                style={{ color: "#4F4F4F" }}
                className="text-center font-bold"
              >
                Phone Number
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ width: 140, height: 40 }}
              className={`${backColorN} justify-center ml-1 rounded-xl`}
              onPress={handlePressEmail}
            >
              <Text
                style={{ color: "#4F4F4F" }}
                className="text-center font-bold"
              >
                Email
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Phone  */}
        <View className="mx-auto">
          {click ? <Phone_Registre /> : <Email_Registre navigation={navigation} role="driver"/>}
        </View>
        {/* Or  */}
        <View className="flex-row w-full space-x-3 items-center justify-center mt-10">
          <View style={{ width: 130 }} className="border-b">
            <Text className="text-white">Or</Text>
          </View>
          <Text className="mt-1">Or</Text>
          <View style={{ width: 130 }} className="border-b">
            <Text className="text-white">Or</Text>
          </View>
        </View>
        {/* or google */}
        <View className="flex-row mt-6  mx-auto">
          <TouchableOpacity className="flex-row space-x-10 shadow-lg items-center border border-gray-200 w-80 rounded-xl bg-white px-8 py-4">
            <Image
              source={require("../../../../assets/imageApp/google.png")}
              className="w-6 h-6"
            />
            {/* <AntDesign name="google" size={24} color="white" /> */}
            <Text className="font-bold text-black text-center">
              Sign Up With Google
            </Text>
          </TouchableOpacity>
        </View>
        {/* Not registre yet */}
        <View className="mx-14 mt-4 flex-row space-x-2">
          <Text className="text-gray-400">Do You have Account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("LoginTrucker2")}>
            <Text className="text-orange-500">Login Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp2;