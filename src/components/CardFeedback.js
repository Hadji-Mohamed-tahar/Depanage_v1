
import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { useSelector } from "react-redux";

const CardFeedback = ({ navigation, driverSelected,tripId }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const user_id = useSelector((state) => state.user_id);

  const handleRating = (stars) => {
    setRating(stars);
  };

  const submitFeedback = () => {
    if (!rating || !feedback) {
      alert("Please provide both rating and feedback.");
      return;
    }
    axios.post("http://192.168.244.231:3000/driver_ratings", {
      driver_id: driverSelected.id,
      rating: rating,
      feedback: feedback,
      rated_by: user_id, 
      trip_id: tripId, 
    })
      .then((response) => {
        console.log(response.data);
        // Handle success or show a success message
        navigation.navigate("HomeClient");
      })
      .catch((error) => {
        console.error(error);
        // Handle errors or show an error message
      });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.userContainer}>
        <Image
          style={styles.userImage}
          source={require('../../assets/imageApp/user.jpg')}
        />
        <Text style={styles.userName}>{driverSelected.name}</Text>
      </View>
      
      <View style={styles.ratingContainer}>
        <View style={styles.starIcons}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleRating(star)}>
              <Ionicons
                name={star <= rating ? "star" : "star-outline"}
                size={24}
                color={star <= rating ? "gold" : "gray"}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Text> Great !</Text>
      </View>
      
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add your comment"
          multiline={true}
          value={feedback}
          onChangeText={(text) => setFeedback(text)}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.okButton} onPress={submitFeedback}>
          <Text style={styles.okButtonText}>Rate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
  userContainer: {
    alignItems: "center",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  starIcons: {
    flexDirection: "row",
    marginBottom: 5,
  },
  commentContainer: {
    marginTop: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  okButton: {
    backgroundColor: "#FBD50E",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  okButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CardFeedback;
