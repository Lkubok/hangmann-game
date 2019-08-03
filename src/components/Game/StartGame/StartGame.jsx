import React, { Component } from "react";
import { connect } from "react-redux";
import { launchNewGame } from "../../../actions/gameActions";
import * as selectors from "../../../reducers/selectors";
import Loading from "../../EditQuote/Loading";

import "./StartGame.scss";

export class StartGame extends Component {
  renderLoading() {
    return this.props.isRequesting ? (
      <Loading />
    ) : (
      <div className="loading-holder">
        {" "}
        Start new game with Click on start button
      </div>
    );
  }
  render() {
    return (
      <>
        <button
          onClick={this.props.launchNewGame}
          disabled={this.props.isRequesting}
        >
          Start New Game
        </button>
        {this.renderLoading()}
      </>
    );
  }
}
const mapStateToProps = state => ({
  isRequesting: selectors.getIsRequesting(state)
});

const mapDispatchToProps = {
  launchNewGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartGame);
