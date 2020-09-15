import React, { Component } from "react";
import MainNavigator from "./containers/main/MainNavigator";

import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
import colors from "./res/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { createStackNavigator } from "@react-navigation/stack";
import AppIcon from "./res/images/icon.png";
import { loginUser } from "./redux/actions/userActions";
import LoginScreen from "./login";
import * as SecureStore from "expo-secure-store";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

axios.defaults.baseURL =
  "https://europe-west1-socialape-5bd6b.cloudfunctions.net/api";

const getToken = async () => {
  return await SecureStore.getItemAsync("FBIdToken");
};

const getData = async () => {
  try {
    const token = await AsyncStorage.getItem("FBIdToken");
    console.log(`token read : ${token}`);
    if (token !== null) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(logoutUser());
      } else {
        store.dispatch({ type: SET_AUTHENTICATED });

        axios.defaults.headers.common["Authorization"] = token;
        store.dispatch(getUserData());
      }
    }
  } catch (e) {
    // error reading value
  }
};

class AppNavigator extends Component {
  getData = async () => {
    const token = getToken()
      .then((token) => {
        console.log(`token read : ${token}`);
        if (token !== null) {
          const decodedToken = jwtDecode(token);
          if (decodedToken.exp * 1000 < Date.now()) {
            store.dispatch(logoutUser());
          } else {
            store.dispatch({ type: SET_AUTHENTICATED });
            axios.defaults.headers.common["Authorization"] = token;
            store.dispatch(getUserData());
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    //this.getData();
    const { authenticated } = this.props;
    console.log(`startup page : ${authenticated}`);
    const Stack = createStackNavigator();
    return authenticated ? (
      <MainNavigator />
    ) : (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "#fff",
            headerTransparent: true,
            title: "",
          }}
        />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

LoginScreen.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

AppNavigator.propTypes = {
  user: PropTypes.object,
};
export default connect(mapStateToProps)(AppNavigator);
