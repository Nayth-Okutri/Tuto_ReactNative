import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TextInput,
} from "react-native";

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: "Paris" };
  }
  setCity(city) {
    this.setState({ city });
  }

  render() {
    return (
      <View style={styles.view}>
        <TextInput
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setCity(text)}
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={this.state.city}
        />
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
