import React, { Component } from "react";
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

import { connect } from "react-redux";
import colors from "./res/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { createStackNavigator } from "@react-navigation/stack";
import AppIcon from "./res/images/icon.png";
import { loginUser } from "./redux/actions/userActions";
class LoginScreen extends Component {
  _signInAsync = async () => {
    setValidate(true);
  };
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  handleSubmit = (event) => {
    //event.preventDefault();
    this.setState({ loading: true });
    const userData = {
      email: this.state.email !== "" ? this.state.email : "user@mail.com",
      password: this.state.password !== "" ? this.state.password : "123456",
    };
    console.log(userData);
    this.props.loginUser(userData);
  };

  handleChangeEmail = (value) => {
    this.setState({ email: value });
  };
  handleChangePassword = (value) => {
    this.setState({ password: value });
    console.log(this.state);
  };
  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.logoContainer}>
          <Image source={AppIcon} style={{ height: 70, width: 200 }} />
        </View>
        <View style={Styles.userNameContainer}>
          <TextInput
            id="email"
            name="email"
            type="email"
            label="Email"
            style={Styles.userNameInput}
            placeholder="Phone number, username or email"
            placeholderTextColor={colors.textFaded2}
            //value={this.state.email}
            onChangeText={(text) => this.handleChangeEmail(text)}
          />
        </View>
        <View style={Styles.passwordContainer}>
          <TextInput
            id="password"
            name="password"
            type="password"
            label="Password"
            secureTextEntry={true}
            style={Styles.passwordInput}
            placeholder="Password"
            placeholderTextColor={colors.textFaded2}
            onChangeText={(text) => this.handleChangePassword(text)}
          />
        </View>
        <View style={Styles.forgotPasswordContainer}>
          <TouchableOpacity>
            <Text style={Styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={Styles.loginContainer}
          onPress={this.handleSubmit}
        >
          <Text style={Styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <View
          style={{
            //flex: 0.1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <View
            style={{ flex: 1, height: 1, backgroundColor: "#262626" }}
          ></View>
          <Text style={{ marginLeft: 40, marginRight: 40, color: "#969696" }}>
            OR
          </Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#262626",
            }}
          ></View>
        </View>
        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={{ alignItems: "center", marginStart: 10 }}>
            <Text style={{ color: "#008bef" }}>Log In With Facebook</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 50 }}>
          <View
            style={{
              flex: 1,
              backgroundColor: "#262626",
              height: 1,
            }}
          ></View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#969696" }}>Don't have an account ?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#008bef" }}> Sign Up.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  userNameContainer: {
    borderColor: "#262626",
    backgroundColor: colors.loginInputBackground,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  userNameInput: {
    marginStart: 10,
    color: "white",
  },
  passwordContainer: {
    borderColor: "#262626",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    //alignItems: 'center',
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: colors.loginInputBackground,
    marginBottom: 20,
  },
  passwordInput: { marginStart: 10, color: "white" },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginEnd: 20,
  },
  forgotPasswordText: {
    color: "#0088f8",
  },
  loginContainer: {
    alignItems: "center",
    height: 40,
    marginTop: 30,
    backgroundColor: "#0088f8",
    justifyContent: "center",
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 5,
  },
  loginText: {
    color: "#fff",
  },
});
LoginScreen.propTypes = {
  loginUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});
const mapActionsToProps = {
  loginUser,
};
export default connect(mapStateToProps, mapActionsToProps)(LoginScreen);
