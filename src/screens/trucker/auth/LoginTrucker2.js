import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login2 from "./Login2";

const LoginTrucker2 = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Login2 navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  );
};

export default LoginTrucker2;
