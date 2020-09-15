import React from "react";
import {
  FlatList,
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";
import { getScreams } from "../../../redux/actions/dataActions";
import PropTypes from "prop-types";
import Scream from "../scream/Scream";
import colors from "../../../res/colors";
import Carousel from "react-native-snap-carousel";
import { scrollInterpolator, animatedStyles } from "../../..//utils/animations";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ListItem } from "react-native-elements";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 4) / 4);

class homeScreen extends React.Component {
  state = {
    index: 0,
  };

  componentDidMount() {
    this.props.getScreams();
  }
  _renderItem({ item, index }) {
    return (
      <View>
        <Scream key={item.screamId} scream={item} />
      </View>
    );
  }
  render() {
    const { screams } = this.props.data;
    const notifications = this.props.notifications;
    console.log("FIREBASE reached");
    let recentScreamsMarkup = screams.map((scream) => (
      <Scream key={scream.screamId} scream={scream} />
    ));
    dayjs.extend(relativeTime);
    return (
      <View>
        <Carousel
          ref={(c) => (this.carousel = c)}
          data={screams}
          layout={"stack"}
          layoutCardOffset={`10`}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
        />
        <ScrollView style={styles.counter}>
          {notifications.map((not, i) => {
            const verb = not.type === "like" ? "liked" : "commented on";
            const time = dayjs(not.createdAt).fromNow();
            return (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{not.sender}</ListItem.Title>
                  <ListItem.Subtitle>
                    {not.sender} {verb} your scream {time}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
          {notifications.map((not, i) => {
            const verb = not.type === "like" ? "liked" : "commented on";
            const time = dayjs(not.createdAt).fromNow();
            return (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{not.sender}</ListItem.Title>
                  <ListItem.Subtitle>
                    {not.sender} {verb} your scream {time}
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </ScrollView>
      </View>

      /*<FlatList
        data={screams}
        renderItem={({ item, index }) => (
          <Scream key={item.screamId} scream={item} />
        )}
      />*/
    );
  }
}
const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 15,
    marginBottom: 0,
    height: ITEM_HEIGHT,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  counter: {
    marginTop: 0,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
homeScreen.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  notifications: state.user.notifications,
});
export default connect(mapStateToProps, { getScreams })(homeScreen);
