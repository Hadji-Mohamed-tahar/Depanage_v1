import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Preference from "./screens/Preference";
import SearchingDriver from "./screens/SearchingDriver";
import RideReady from "./screens/RideReady";
import RideHistory from "./screens/RideHistory";
import Menu from "./screens/Menu";
import Receipt from "./screens/Receipt";
import Feedback from "./screens/Feedback";
import Arrived from "./screens/Arrived";
import OnTrip from "./screens/OnTrip";
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBar: false, // Consider using StatusBar.currentHeight for custom behavior
        }}
      >
        {/* <Stack.Screen name="Preference" component={Preference} /> */}
        {/* <Stack.Screen name="SearchingDriver" component={SearchingDriver} /> */}
        {/* <Stack.Screen name="RideReady" component={RideReady} /> */}
        {/* <Stack.Screen name="RideHistory" component={RideHistory} /> */}
        {/* <Stack.Screen name="Menu" component={Menu} /> */}
        {/* <Stack.Screen name="Receipt" component={Receipt} /> */}
        <Stack.Screen name="Feedback" component={Feedback} />
        {/* <Stack.Screen name="Arrived" component={Arrived} /> */}
        {/* <Stack.Screen name="OnTrip" component={OnTrip} /> */}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
