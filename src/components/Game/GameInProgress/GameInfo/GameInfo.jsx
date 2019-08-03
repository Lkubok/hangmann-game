import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../../../../reducers/selectors";
import "./GameInfo.scss";
import { closeGame } from "../../../../actions/gameActions";
const { REACT_APP_GAME_TIME } = process.env;

export class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: this.props.startTime,
      timeLeft: parseInt(this.props.startTime) + parseInt(REACT_APP_GAME_TIME)
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => {
        return { timeLeft: prevState.timeLeft - 1000 };
      });
    }, 1000);
  }
  componentDidUpdate() {
    const { startTime, timeLeft } = this.state;
    const { lifes } = this.props;
    if (timeLeft < startTime || lifes === 0) {
      clearInterval(this.interval);
      this.props.closeGame();
    }
  }
  showTime = () => {
    const { startTime, timeLeft } = this.state;
    const timeLeftValue = timeLeft - startTime;
    return timeLeftValue > 0 ? timeLeftValue / 1000 + "s" : "0s";
  };
  render() {
    const {
      startTime,
      lifes,
      typedLetters,
      lettersToGuess,
      stateOfGame,
      guessedLetters
    } = this.props;
    return (
      <div className="game-info">
        <div className="info-elem">
          <p className>
            Lifes left: <span>{lifes}</span>
          </p>
        </div>
        <div className="info-elem">
          <p className>
            Game Start Time: <span>{startTime}</span>
          </p>
        </div>
        <div className="info-elem">
          <p className>
            State Of Game: <span>{stateOfGame}</span>
          </p>
        </div>
        <div className="info-elem">
          <p className>
            Time Left: <span>{this.showTime()}</span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lifes: selectors.getLifes(state),
  startTime: selectors.getStartTime(state),
  stateOfGame: selectors.getStateOfGame(state)
});
const mapDispatchToProps = {
  closeGame
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInfo);

/* 

export const getLettersToGuess = state => state.gameReducer.lettersToGuess;
export const getQuoteAuthor = state => state.gameReducer.quoteAuthor;
export const getTypedLetters = state => state.gameReducer.typedLetters;
export const getLifes = state => state.gameReducer.lifes;
export const getStateOfGame = state => state.gameReducer.getStateOfGame;
export const getGuessedLetters = state => state.gameReducer.guessedLetters;
export const getStartTime = state => state.gameReducer.guessedLetters;
export const getIsFinished = state => state.gameReducer.isFinished;
 */
