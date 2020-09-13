import React, { Component } from "react";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

export default function MainNavigator({ navigation }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        component={TabNavigator}
        options={{ title: "", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
