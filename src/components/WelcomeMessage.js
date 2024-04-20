import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const WelcomeMessage = () => {
  const username = useSelector((state) => state.username);

  return (
    <View className="w-full mb-8 mt-10 items-start space-y-3">
      <View>
        <View className="flex-row space-x-3">
          <Text className="text-4xl text-orange-900 font-bold">
            Wellcome {username}
          </Text>
          <Image
            className="w-10 h-10"
            source={require("../../assets/imageApp/waving-hand.png")}
          />
        </View>
        <Text className="text-md text-gray-400 mr-3">
          We're here to make your life Easy
        </Text>
      </View>
    </View>
  );
};

export default WelcomeMessage;
