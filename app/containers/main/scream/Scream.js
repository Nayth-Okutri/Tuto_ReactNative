import React, { Component } from "react";
import colors from "../../../res/colors";
import {
  Text,
  View,
  StyleSheet,
  Vibration,
  TouchableOpacity,
} from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import LottieView from "lottie-react-native";

class Scream extends React.Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      scream: {
        body,
        createdAt,
        userImage,
        userHandle,
        screamId,
        likeCount,
        commentCount,
      },
    } = this.props;
    return (
      <Card>
        <View style={Styles.container}>
          <Card.Image
            source={{ uri: userImage }}
            style={{ width: 50, height: 50, borderRadius: 30 }}
          ></Card.Image>
          <View>
            <Text>{userHandle}</Text>
          </View>

          <View>
            <Text
              style={{
                color: colors.textFaded2,
                marginTop: 5,
                marginStart: 15,
                fontSize: 12,
              }}
            >
              {dayjs(createdAt).fromNow()}
            </Text>
          </View>
        </View>
        <Text style={{ marginBottom: 10 }}>{body}</Text>
        <View>
          <Icon name="favorite" color="#11cb5f" />
          <Text>{likeCount} Likes</Text>
          <LottieView source={require("./296-react-logo.json")} autoPlay loop />
        </View>
      </Card>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginBottom: 6,
    marginStart: 10,
    marginEnd: 10,
    alignItems: "center",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  personImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  personName: {
    color: colors.text,
    marginStart: 10,
    fontWeight: "bold",
  },
  placeName: {
    color: colors.text,
    marginStart: 10,
    fontSize: 12,
  },
  iconMore: {
    height: 15,
    width: 15,
  },
});

export default Scream;
