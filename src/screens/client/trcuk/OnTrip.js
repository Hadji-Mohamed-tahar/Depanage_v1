

import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "react-native-simple-bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import CardOnTrip from "../../../components/CardOnTrip";
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native';

const OnTrip = ({ route }) => {
  const navigation = useNavigation();
  const { driverSelected } = route.params;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // navigation.navigate("Arrived");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      const data = notification.request.content.data;
      if (data && data.notificationType === "endTrip") {
        const { tripId } = data;
        navigation.navigate("Receipt", { driverSelected: driverSelected, tripId: tripId });
      }
    });
  
    return () => subscription.remove();
  }, []);
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Ionicons name="menu" size={30} color="white" />
          <Text style={styles.headerText}>En Rout</Text>
        </View>
        <View style={styles.greyBackground}>
          {/* No map component */}
        </View>
      </View>
      <BottomSheet isOpen>
        <CardOnTrip driverSelected={driverSelected} />
      </BottomSheet>
    </View>
  );
};

export default OnTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 40,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 999,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10,
    color: "white",
  },
  greyBackground: {
    flex: 1,
    backgroundColor: "gray",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
