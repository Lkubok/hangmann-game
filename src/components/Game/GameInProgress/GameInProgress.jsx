import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteGame,
  pressLetter,
  closeGame,
  clearGameParams
} from "../../../actions/gameActions";
import Tiles from "./Tiles";
import Keypad from "./Keypad/index";
import GameInfo from "./GameInfo";
import GameFinished from "./GameFinished/index";
import * as selectors from "../../../reducers/selectors";
import "./GameInProgress.scss";

export class GameInProgress extends Component {
  handleGameDelete = id => () => {
    const { userName, userEmail, userLevel, userLang } = this.props;
    this.props.deleteGame(id);
    this.props.clearGameParams(userName, userEmail, userLevel, userLang);
  };
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
          <Tiles />
          <div className="quote-author">
            <div className="quote-item">Quote by:</div>
            <div className="quote-item">{quoteAuthor}</div>
          </div>
          <Keypad />
          <button onClick={this.handleGameDelete(gameId)}>Leave game</button>
        </div>
        <GameInfo />
      </>
    );
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state),
  quoteAuthor: selectors.getQuoteAuthor(state),
  isFinished: selectors.getIsFinished(state),
  userName: selectors.getGameUserName(state),
  userEmail: selectors.getUserEmail(state),
  userLevel: selectors.getGameLevel(state),
  userLang: selectors.getGameLang(state)
});

const mapDispatchToProps = {
  deleteGame,
  pressLetter,
  closeGame,
  clearGameParams
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInProgress);
