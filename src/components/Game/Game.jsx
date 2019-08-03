import React, { Component } from "react";
import * as selectors from "../../reducers/selectors";
import { connect } from "react-redux";
import StartGame from "./StartGame/index";
import GameInProgress from "./GameInProgress";
export class Game extends Component {
  render() {
    return this.props.gameId ? <GameInProgress /> : <StartGame />;
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state),
  isFinished: selectors
});
export default connect(mapStateToProps)(Game);
