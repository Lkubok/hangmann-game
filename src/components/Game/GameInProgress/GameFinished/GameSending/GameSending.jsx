import React, { Component } from "react";
import * as selectors from "../../../../../reducers/selectors";
import { connect } from "react-redux";
import "./GameSending.scss";
import {
  clearGameParams,
  sendGameStat,
  fetchSingleQuote
} from "../../../../../actions/gameActions";
const { REACT_APP_API_HOST } = process.env;

export class GameSending extends Component {
  componentDidMount() {
    const { sendGameStat, scoreToSend, gameId, startTime } = this.props;
    const idToFetch = gameId.slice(0, 24);
    this.props.fetchSingleQuote(REACT_APP_API_HOST, idToFetch);
    const score = {
      ...scoreToSend,
      gameTime: `${Date.now() - startTime}`
    };
    sendGameStat(score);
  }
  render() {
    return <h6 className="database-info">game stored in database</h6>;
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
)(GameSending);
