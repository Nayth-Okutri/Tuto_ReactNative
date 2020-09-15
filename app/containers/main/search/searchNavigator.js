import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Dimensions } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SearchBar } from "react-native-elements";
export default class searchNavigator extends React.Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    return (
      <View style={{ marginHorizontal: 5, marginVertical: 100 }}>
        <TextInput
          style={{
            height: 35,
            width: Dimensions.get("screen").width - 10,
            fontWeight: "bold",
            borderRadius: 10,
            paddingStart: 20,
            fontSize: 16,
            color: "white",
          }}
          placeholder="Search"
        />
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
          round={true}
        />
      </View>
    );
  }
}
