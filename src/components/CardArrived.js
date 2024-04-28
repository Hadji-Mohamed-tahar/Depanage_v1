

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const CardArrived = ({ navigation, driverSelected }) => {
  const sendNotificationToDriver = async () => {
    const driverExpoPushToken =driverSelected.expo_push_token; 

    const notificationData = {
      to: driverExpoPushToken,
      sound: 'default',
      title: 'تأكيد ركوب الزبون',
      body: 'الزبون قد ركب في سيارتك.',
      data: {
        notificationType: 'rideConfirmation', 
      },
    };

    try {
      const response = await axios.post('https://exp.host/--/api/v2/push/send', notificationData);
      // console.log('تم إرسال الإشعار بنجاح:', response.data);
      navigation.navigate('OnTrip',{driverSelected:driverSelected})
    } catch (error) {
      console.error('حدث خطأ أثناء إرسال الإشعار:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.textContainer}>
          {/* <Text style={styles.textContainer1}>HF784C</Text> */}
          <Text style={styles.textContainer2}>{driverSelected.make}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require("../../assets/imageApp/car.png")} />
          <Text>{driverSelected.model}</Text>
        </View>
      </View>
      <View style={styles.secondRow}>
        {/* استدعاء الدالة sendNotificationToDriver عند الضغط على الزر "Ried" */}
        <TouchableOpacity style={styles.button} onPress={sendNotificationToDriver}>
          <Text style={styles.buttonText}>Ried</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circularButton}
        //  onPress={() => { navigation.navigate("Receipt") }}
         >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.greyBackground}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20, // Adjusted margin
    // backgroundColor: "pink",
  },
  firstRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  textContainer1: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "#D5DDE0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    color: "#3E4958",
  },
  textContainer2: {
    color: "#3E4958",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  secondRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
    width: "100%",
    // alignItems: "center",
  },
  button: {
    width: "70%",
    backgroundColor: "#FBD50E",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  circularButton: {
    width: 60,
    height: 60,
    borderRadius: 25,
    backgroundColor: "lightgrey",
    justifyContent: "center",
    alignItems: "center",
  },
  greyBackground: {
    flex: 1,
    backgroundColor: "#EDEDED",
    width: "100%",
    marginBottom: 20, // Adjusted margin
  },
});

export default CardArrived;
