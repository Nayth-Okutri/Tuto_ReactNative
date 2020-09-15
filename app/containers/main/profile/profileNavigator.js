import React, { useRef, useState, Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  CameraRoll,
  Image,
} from "react-native";
import Popover, {
  PopoverMode,
  PopoverPlacement,
} from "react-native-popover-view";
import { ListItem, Avatar, Rating, AirbnbRating } from "react-native-elements";

import { TouchableOpacity } from "react-native-gesture-handler";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class profileNavigator extends React.Component {
  render() {
    const list = [
      {
        name: "Friend 1",
        avatar_url:
          "https://firebasestorage.googleapis.com/v0/b/socialape-5bd6b.appspot.com/o/20172153848.jpg?alt=media",
        subtitle: "Club President",
      },
      {
        name: "Friend 2",
        avatar_url:
          "https://firebasestorage.googleapis.com/v0/b/socialape-5bd6b.appspot.com/o/11062052338.jpg?alt=media",
        subtitle: "Player",
      },
    ];
    const {
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated,
      },
    } = this.props;
    console.log(this.props.user);
    return (
      <View style={{ marginTop: 100 }}>
        <View style={Styles.container}>
          <TouchableOpacity>
            <Image source={{ uri: imageUrl }} style={Styles.prfilePicture} />
          </TouchableOpacity>
          <View style={{ marginBottom: 5 }}>
            <Text style={{ color: "black", fontWeight: "bold" }}>{handle}</Text>
          </View>
          <View style={Styles.container2}>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ color: "black" }}>{bio}</Text>
            </View>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ color: "black" }}>{website}</Text>
            </View>
            <View style={{ marginBottom: 5 }}>
              <Text style={{ color: "black" }}>{location}</Text>
            </View>
          </View>
        </View>

        {list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))}
        <AirbnbRating
          count={11}
          reviews={[
            "Terrible",
            "Bad",
            "Meh",
            "OK",
            "Good",
            "Hmm...",
            "Very Good",
            "Wow",
            "Amazing",
            "Unbelievable",
            "Jesus",
          ]}
          defaultRating={11}
          size={20}
        />
      </View>
    );
  }
}

profileNavigator.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(profileNavigator);

const Styles = StyleSheet.create({
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 20,
  },
  prfilePicture: {
    height: 80,
    width: 80,
    borderRadius: 100,
    marginLeft: 20,
  },
  numberContainer: {
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    fontSize: 15,
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    marginEnd: 20,
  },
  text: {
    color: "white",
    //fontWeight: 'bold',
    alignSelf: "center",
  },
  container3: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
  },
});
