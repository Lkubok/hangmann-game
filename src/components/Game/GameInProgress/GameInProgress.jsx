import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteGame,
  pressLetter,
  closeGame,
  clearGameParams
} from "../../../actions/gameActions";
import Tiles from "./Tiles";
import Keypad from "./Keypad";
import GameInfo from "./GameInfo";
import GameFinished from "./GameFinished/index";
import * as selectors from "../../../reducers/selectors";
import "./GameInProgress.scss";

export class GameInProgress extends Component {
  enteringRef = React.createRef();
  componentDidMount() {
    if (this.enteringRef.current) {
      this.enteringRef.current.focus();
    }
  }
  handleGameDelete = id => () => {
    const { userName, userEmail, userLevel, userLang } = this.props;
    this.props.deleteGame(id, userName, userEmail, userLevel, userLang);
  };
  handleKeyPress = e => {
    const { pressLetter, gameId, typed } = this.props;
    if (typed.includes(e.key)) {
      return;
    } else {
      pressLetter(e.key, gameId);
    }
  };

  render() {
    console.log("gameinproress ", this.props.typed);
    const { gameId, quoteAuthor, isFinished } = this.props;
    return (
      <>
        <div
          ref={this.enteringRef}
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
          <Keypad typed={this.props.typed} />
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
  userLang: selectors.getGameLang(state),
  typed: selectors.getTypedLetters(state),
  guessed: selectors.getGuessedLetters(state)
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
