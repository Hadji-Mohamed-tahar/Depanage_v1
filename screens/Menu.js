import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from "react-native";

const Drawer = () => {
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={() => (
        <View style={styles.container}>
          <View style={styles.section1}>
            <Image
              source={require("../assets/car.png")}
              style={styles.profilePicture}
            />
            <Text style={styles.username}>Username</Text>
            <Text style={styles.email}>username@example.com</Text>
          </View>
          <View style={styles.section2}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Ride history</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Account information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Preferences</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Support</Text>
            </TouchableOpacity>
            <View style={styles.loginButton}>
              <TouchableOpacity style={styles.loginButtonText}>
                <Text style={styles.loginButtonText}>LOG IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Main content</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 10,
  },
  section1: {
    flex: 0.3,
    // alignItems: 'center',
    justifyContent: "center",
    padding: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
  section2: {
    flex: 0.7,
    padding: 20,
  },
  button: {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Drawer;
