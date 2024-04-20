import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignUp2 from "./SignUp2";

const SignUpTrucker2 = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <SignUp2 navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default SignUpTrucker2;
