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
import PropTypes from "prop-types";

const { REACT_APP_API_HOST } = process.env;

export class GameFinished extends Component {
  componentDidMount() {
    const { gameId } = this.props;
    const idToFetch = gameId.slice(0, 24);
    this.props.fetchSingleQuote(REACT_APP_API_HOST, idToFetch);
  }
  handlePlayAgain = () => {
    const {
      clearGameParams,
      userName,
      userEmail,
      userLevel,
      userLang
    } = this.props;
    clearGameParams(userName, userEmail, userLevel, userLang);
  };
  searchedQuote = () => {
    return this.props.searchedQuote;
  };
  render() {
    const { isGuessed, searchedQuote } = this.props;
    return (
      <div
        className={
          isGuessed
            ? "game-finished game-finished-win"
            : "game-finished game-finished-dead"
        }
      >
        {isGuessed ? (
          <>
            <h2>game finished</h2>
            <h3>Congratulations !</h3>
          </>
        ) : (
          <>
            {" "}
            <h2>game over !</h2>
            <h3>You are dead ;( </h3>
            <h4>searched quote was:</h4>
            <h5>{this.searchedQuote()}</h5>
          </>
        )}
        <button className="btn-restart" onClick={this.handlePlayAgain}>
          Play again
        </button>
        {searchedQuote && <GameSending />}
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
  startTime: selectors.getStartTime(state),
  isFinished: selectors.getIsFinished(state)
});

const mapDispatchToProps = {
  clearGameParams,
  fetchSingleQuote,
  sendGameStat
};

GameFinished.propTypes = {
  userName: PropTypes.string,
  userEmail: PropTypes.string,
  userLevel: PropTypes.string,
  userLang: PropTypes.string,
  isGuessed: PropTypes.bool,
  gameStatus: PropTypes.string,
  gameId: PropTypes.string,
  searchedQuote: PropTypes.string,
  scoreToSend: PropTypes.object,
  startTime: PropTypes.number,
  isFinished: PropTypes.bool,
  clearGameParams: PropTypes.func,
  fetchSingleQuote: PropTypes.func,
  sendGameStat: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameFinished);
