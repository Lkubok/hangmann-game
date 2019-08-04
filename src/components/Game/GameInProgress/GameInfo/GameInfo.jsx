import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../../../../reducers/selectors";
import "./GameInfo.scss";
import { closeGame, saveTime } from "../../../../actions/gameActions";
const { REACT_APP_GAME_TIME } = process.env;

export class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: this.props.startTime,
      timeLeft: this.props.stoppedTime
        ? this.props.stoppedTime
        : parseInt(this.props.startTime) + parseInt(REACT_APP_GAME_TIME)
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
    const { isFinished, lifes } = this.props;
    if (timeLeft < startTime || lifes === 0 || isFinished) {
      clearInterval(this.interval);
      this.props.closeGame();
    }
  }
  componentWillUnmount() {
    const { saveTime } = this.props;
    saveTime(this.state.timeLeft);
    clearInterval(this.interval);
  }
  showTime = () => {
    const { startTime, timeLeft } = this.state;
    const timeLeftValue = timeLeft - startTime;
    return timeLeftValue > 0 ? timeLeftValue / 1000 + "s" : "0s";
  };
  getStartDate = date => {
    const startTime = new Date(date);
    return `${startTime.getHours()} : ${startTime.getMinutes()} : ${startTime.getSeconds()}`;
  };
  render() {
    const { startTime, lifes, stateOfGame } = this.props;
    return (
      <div className="game-info">
        <div className="info-elem">
          <p className>
            Lifes left: <span>{lifes}</span>
          </p>
        </div>
        <div className="info-elem">
          <p className>
            Game Start Time: <span>{this.getStartDate(startTime)}</span>
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
  stateOfGame: selectors.getStateOfGame(state),
  isFinished: selectors.getIsFinished(state),
  stoppedTime: selectors.getTimeLeft(state)
});
const mapDispatchToProps = {
  closeGame,
  saveTime
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInfo);
