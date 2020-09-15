import React, { Component } from "react";
import TabNavigator from "./TabNavigator";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default function MainNavigator({ navigation }) {
  //const Drawer = createDrawerNavigator();
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
