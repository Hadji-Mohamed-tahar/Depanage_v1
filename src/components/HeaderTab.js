import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useContext, useState } from "react";
import { MenuContext } from "./Menu";
const HeaderTap = () => {
  const [isSetPhoto, setIsSetPhoto] = useState(true);
  const toggleMenu = useContext(MenuContext);

  return (
    <View>
      <View
        style={[{ width: "100%", height: 70 }, styles.shadowTop]}
        className="bg-orange-50 mt-12 justify-between rounded-lg px-4 flex-row"
      >
        <View className="justify-center mr-1">
          <TouchableOpacity className="items-center justify-center" onPress={toggleMenu}>
            <View
              // style={styles.shadow}
              className="items-center justify-center w-10 h-10 bg-white rounded-lg"
            >
              <Image
                source={require("../../assets/imageApp/menu.png")}
                className="w-10 h-10"
              />
            </View>
          </TouchableOpacity>
        </View>
        <View className="justify-center">
          <Text className="text-orange-900 text-lg font-bold">Location</Text>
          <Text className="text-sm text-gray-500">
            Laghouat , Laghouat  Algeria
          </Text>
        </View>
        {/* Default case in Registre */}
        <View className="justify-center">
          <TouchableOpacity className="items-center justify-center">
            {isSetPhoto ? (
              <View
                style={[styles.user, styles.shadow]}
                className="items-center justify-center"
              >
                <Image
                  source={require("../../assets/imageApp/user.jpg")}
                  style={[styles.user, styles.shadow]}
                  className="w-12 h-12 "
                />
              </View>
            ) : (
              <View
                style={[styles.user, styles.shadow]}
                className="bg-yellow-500 border-2 border-white w-12 h-12 items-center justify-center"
              >
                <Text className="text-2xl text-black font-bold">A</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadowTop: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    // elevation: 5,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 10, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // elevation: 5,
  },
  user: {
    borderRadius: 40,
  },
});

export default HeaderTap;
