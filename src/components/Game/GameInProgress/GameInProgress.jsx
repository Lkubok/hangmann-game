import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteGame,
  pressLetter,
  closeGame
} from "../../../actions/gameActions";
import Tiles from "./Tiles";
import Keypad from "./Keypad/index";
import GameInfo from "./GameInfo";
import GameFinished from "./GameFinished/index";
import * as selectors from "../../../reducers/selectors";
import "./GameInProgress.scss";

export class GameInProgress extends Component {
  handleGameDelete = id => () => this.props.deleteGame(id);
  handleKeyPress = e => this.props.pressLetter(e.key, this.props.gameId);
  render() {
    const { gameId, quoteAuthor, isFinished } = this.props;
    return (
      <>
        <div
          className="game-container"
          onKeyPress={this.handleKeyPress}
          tabIndex="0"
        >
          {isFinished ? <GameFinished /> : null}
          <button onClick={this.handleGameDelete(gameId)}>Leave game</button>
          <Tiles />
          <div className="quote-author">quote by:{quoteAuthor}</div>
          <Keypad />
        </div>
        <GameInfo />
      </>
    );
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state),
  quoteAuthor: selectors.getQuoteAuthor(state),
  isFinished: selectors.getIsFinished(state)
});

const mapDispatchToProps = {
  deleteGame,
  pressLetter,
  closeGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInProgress);
