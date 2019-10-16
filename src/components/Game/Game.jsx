import React, { Component } from "react";
import * as selectors from "../../reducers/selectors";
import { connect } from "react-redux";
import StartGame from "./StartGame/index";
import GameInProgress from "./GameInProgress";
import PropTypes from "prop-types";

export class Game extends Component {
  render() {
    return this.props.gameId ? <GameInProgress /> : <StartGame />;
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state)
});

Game.propTypes = {
  gameId: PropTypes.string
};

export default connect(mapStateToProps)(Game);
