import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

/*function AboutScreen(props) {
  return (
    <View>
      <Text>A propos</Text>
      <Text>Lorem ipsum</Text>
    </View>
  );
}*/

export default class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>A propos</Text>
        <Text>Lorem ipsum</Text>
        <ActivityIndicator
          color="#FF0000"
          size="large"
          animating={true}
        ></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    //margin: 20,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    //flex: 1,
  },
});
