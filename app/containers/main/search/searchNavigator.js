import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
export default function searchNavigator() {
  const Stack = createStackNavigator();
  return (
    <View style={{ marginHorizontal: 5, marginVertical: 10 }}>
      <TextInput
        style={{
          height: 35,
          width: Dimensions.get("screen").width - 10,
          fontWeight: "bold",
          borderRadius: 10,
          paddingStart: 20,
          fontSize: 16,
          color: "white",
        }}
        placeholder="Search"
      />
    </View>
  );
}
