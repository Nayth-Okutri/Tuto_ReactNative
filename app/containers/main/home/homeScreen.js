import React from "react";
import { FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import { getScreams } from "../../../redux/actions/dataActions";
import PropTypes from "prop-types";
import Scream from "../scream/Scream";
import colors from "../../../res/colors";
class homeScreen extends React.Component {
  componentDidMount() {
    this.props.getScreams();
  }

  render() {
    const { screams } = this.props.data;
    console.log(screams);
    let recentScreamsMarkup = screams.map((scream) => (
      <Scream key={scream.screamId} scream={scream} />
    ));
    return (
      <FlatList
        data={screams}
        renderItem={({ item, index }) => (
          <Scream key={item.screamId} scream={item} />
        )}
      />
    );
  }
}

homeScreen.propTypes = {
  getScreams: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});
export default connect(mapStateToProps, { getScreams })(homeScreen);
