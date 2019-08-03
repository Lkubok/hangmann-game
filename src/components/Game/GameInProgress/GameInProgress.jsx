import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteGame } from "../../../actions/gameActions";
import Tiles from "./Tiles";
import Keypad from "./Keypad/index";
import * as selectors from "../../../reducers/selectors";
import "./GameInProgress.scss";

export class GameInProgress extends Component {
  handleGameDelete = id => () => this.props.deleteGame(id);
  render() {
    const { gameId } = this.props;
    return (
      <>
        <button onClick={this.handleGameDelete(gameId)}>Leave game</button>
        <Tiles />
        <Keypad />
      </>
    );
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state)
});

const mapDispatchToProps = {
  deleteGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInProgress);
