import React, { Component } from "react";
import MainNavigator from "./containers/main/MainNavigator";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios";
axios.defaults.baseURL =
  "https://europe-west1-socialape-5bd6b.cloudfunctions.net/api";

class AppNavigator extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export default AppNavigator;
