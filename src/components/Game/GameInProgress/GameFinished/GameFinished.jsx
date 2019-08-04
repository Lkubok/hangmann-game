import React, { Component } from "react";
import GameSending from "./GameSending";
import { connect } from "react-redux";
import * as selectors from "../../../../reducers/selectors";
import "./GameFinished.scss";
import {
  clearGameParams,
  sendGameStat,
  fetchSingleQuote
} from "../../../../actions/gameActions";

const { REACT_APP_API_HOST } = process.env;

export class GameFinished extends Component {
  handlePlayAgain = () => {
    const { userName, userEmail, userLevel, userLang } = this.props;
    this.props.clearGameParams(userName, userEmail, userLevel, userLang);
  };
  searchedQuote = () => {
    return this.props.searchedQuote;
  };

  componentDidMount() {
    const { gameId } = this.props;
    const idToFetch = gameId.slice(0, 24);
    this.props.fetchSingleQuote(REACT_APP_API_HOST, idToFetch);
  }
  render() {
    console.log("searchedQuote", this.props.searchedQuote);
    const { isGuessed } = this.props;
    return (
      <div
        className={
          isGuessed
            ? "game-finished game-finished-win"
            : "game-finished game-finished-dead"
        }
      >
        <h2>game finished</h2>
        {isGuessed ? <h3>Congratulations !</h3> : <h3>You are dead ;( </h3>}
        {isGuessed ? null : <h4>searched quote was:</h4>}
        {isGuessed ? null : <h5>{this.searchedQuote()}</h5>}
        <button className="btn-restart" onClick={this.handlePlayAgain}>
          Play again
        </button>
        {this.props.searchedQuote === "" ? null : <GameSending />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userName: selectors.getGameUserName(state),
  userEmail: selectors.getUserEmail(state),
  userLevel: selectors.getGameLevel(state),
  userLang: selectors.getGameLang(state),
  isGuessed: selectors.isGuessed(state),
  gameStatus: selectors.getStateOfGame(state),
  gameId: selectors.getGameId(state),
  searchedQuote: selectors.getSearchedQuote(state),
  scoreToSend: selectors.getScoreToSend(state),
  startTime: selectors.getStartTime(state)
});

const mapDispatchToProps = {
  clearGameParams,
  fetchSingleQuote,
  sendGameStat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameFinished);
