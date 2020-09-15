//User reducer Types
import {
  SET_USER,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  MARK_NOTIFICATIONS_READ,
} from "../types";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
import * as SecureStore from "expo-secure-store";

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  console.log("logging in");
  axios
    .post("/login", userData)
    .then((res) => {
      console.log(res.data.token);
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      //history.push("/");
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const signupUser = (newUserData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/signup", newUserData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      //history.push("/");
    })
    .catch((err) => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};
export const logoutUser = () => (dispatch) => {
  AsyncStorage.setItem("FBIdToken", "");
  delete axios.defaults.headers.common["Authorization"];

  dispatch({ type: SET_UNAUTHENTICATED });
};
export const getUserData = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  console.log("getUserData");
  axios
    .get("/user")
    .then((res) => {
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch((err) => console.log(`getUserData : err ${err}`));
};

export const uploadImage = (formData) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user/image", formData)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};

export const editUserDetails = (userDetails) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("/user", userDetails)
    .then(() => {
      dispatch(getUserData());
    })
    .catch((err) => console.log(err));
};
export const markNotificationsRead = (notificationIds) => (dispatch) => {
  axios
    .post(`/notifications`, notificationIds)
    .then((res) => {
      dispatch({ type: MARK_NOTIFICATIONS_READ });
    })
    .catch((err) => console.log(err));
};
const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  console.log(token);
  setToken(FBIdToken);
  //this.storeData(FBIdToken);
  axios.defaults.headers.common["Authorization"] = FBIdToken;
};
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("FBIdToken", value);
  } catch (e) {
    // saving error
  }
};
const setToken = async (token) => {
  await SecureStore.setItemAsync("FBIdToken", token);
};
