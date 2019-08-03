import React, { Component } from "react";
import { connect } from "react-redux";
import { launchNewGame } from "../../../actions/gameActions";

import "./StartGame.scss";

export class StartGame extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.launchNewGame}>Start New Game</button>
      </>
    );
  }
}

const mapDispatchToProps = {
  launchNewGame
};

export default connect(
  null,
  mapDispatchToProps
)(StartGame);
