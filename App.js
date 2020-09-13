import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
//import WelcomeScreen from "./app/screens/WelcomeScreen";
import AboutScreen from "./app/screens/AboutScreen";
import SearchScreen from "./app/screens/SearchScreen";
//import ViewImageScreen from "./app/screens/ViewImageScreen";
import colors from "./app/config/colors";
import AppNavigator from "./app/AppNavigator";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <WelcomeScreen />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return <NavigationContainer>{<AppNavigator />}</NavigationContainer>;
}

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("./app/assets/object.jpg")}
      />
    </View>
  );
}
function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("./app/assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("./app/assets/icon.png")} style={styles.logo} />
        <Text>Prototype Pocket Appli</Text>
      </View>
      <View style={styles.loginButton}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  closeIcon: {
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default App;
/*
const Tabs = TabNavigator({
  SearchScreen: { screen: SearchScreen },
  AboutScreen: { screen: AboutScreen },
});
*/
/*
const Tabs = TabNavigator({
  SearchScreen: { screen: SearchScreen },
  AboutScreen: { screen: AboutScreen },
});
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
      <View style={styles.container}>
        <Tabs />
      </View>
      </NavigationContainer>
    );
  }
}*/

/*export default function App() {
  console.log("App Started");
  console.log(Dimensions.get("screen"));
  //console.log(useDimensions());

  const handlePress = () => console.log("lol");
  //console.log(require("./app/assets/icon.png"));
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});*/
