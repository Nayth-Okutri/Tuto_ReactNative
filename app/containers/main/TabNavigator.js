import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../res/colors";
import homeNavigator from "./home/homeNavigator";
import searchNavigator from "./search/searchNavigator";
import profileNavigator from "./profile/profileNavigator";

export default function TabNavigator({ NavigateToStoryCamera }) {
  const Tab = createBottomTabNavigator();
  return (
    <React.Fragment>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
          showIcon: true,
          style: {
            backgroundColor: colors.bottomBackGround,
            borderTopColor: colors.seperatorLineColor,
          },
        }}
      >
        <Tab.Screen name="Home" component={homeNavigator} />
        <Tab.Screen name="Search" component={searchNavigator} />
        <Tab.Screen name="Profile" component={profileNavigator} />
      </Tab.Navigator>
    </React.Fragment>
  );
}
