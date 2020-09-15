import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../res/colors";
import homeNavigator from "./home/homeNavigator";
import searchNavigator from "./search/searchNavigator";
import profileNavigator from "./profile/profileNavigator";
import pokekoNavigator from "./pokeko/pokekoNavigator";
import { Avatar, Icon, withBadge } from "react-native-elements";
import Ionicons from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { Badge } from "react-native-paper";
export default function TabNavigator({ NavigateToStoryCamera }) {
  const Tab = createBottomTabNavigator();
  return (
    <React.Fragment>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Profile") {
              const BadgedIcon = withBadge(1)(Avatar);
              withBadge((props) => 3);

              return (
                <BadgedIcon type="ionicon" name="ios-chatbubbles">
                  <Avatar
                    rounded
                    source={{
                      uri:
                        "https://firebasestorage.googleapis.com/v0/b/socialape-5bd6b.appspot.com/o/11062052338.jpg?alt=media",
                    }}
                  />
                </BadgedIcon>
              );
            } else if (route.name === "Search") {
              return (
                <FontAwesome5Icon name={"search"} size={size} color={color} />
              );
            } else if (route.name === "Pokeko") {
              return (
                <FontAwesome5Icon
                  name={"table-tennis"}
                  size={size}
                  color={color}
                />
              );
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          showIcon: true,
          style: {
            backgroundColor: colors.bottomBackGround,
            borderTopColor: colors.seperatorLineColor,
          },
        }}
      >
        <Tab.Screen name="Home" component={homeNavigator} />
        <Tab.Screen name="Search" component={searchNavigator} />
        <Tab.Screen name="Pokeko" component={pokekoNavigator} />
        <Tab.Screen name="Profile" component={profileNavigator}></Tab.Screen>
      </Tab.Navigator>
    </React.Fragment>
  );
}
