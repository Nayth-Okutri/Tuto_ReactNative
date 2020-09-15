import React, { useRef, useState, PureComponent, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Dimensions, StyleSheet, CameraRoll } from "react-native";
import { RNCamera } from "react-native-camera";

import Popover, {
  PopoverMode,
  PopoverPlacement,
} from "react-native-popover-view";
import { ListItem, Avatar, Rating, AirbnbRating } from "react-native-elements";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "lightgreen",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export default function pokekoNavigator() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              Flip
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "center",
  },
  captureCircle: {
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 2,
    width: 80,
    height: 80,
    borderRadius: 60,
    alignItems: "center",
    borderColor: "white",
    marginBottom: 30,
  },
  captureButton: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
