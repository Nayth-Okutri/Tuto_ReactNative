import React from "react";
import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import homeScreen from "./homeScreen";

export default function () {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={homeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
