import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../../../../reducers/selectors";
import "./GameInfo.scss";
import { closeGame, saveTime } from "../../../../actions/gameActions";
import PropTypes from "prop-types";
const { REACT_APP_GAME_TIME } = process.env;

export class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      startTime: props.startTime,
      timeLeft: props.stoppedTime
        ? props.stoppedTime
        : parseInt(props.startTime) + parseInt(REACT_APP_GAME_TIME)
    };
  }
  componentDidMount() {
    this.launchInterval();
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
  launchInterval() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timeLeft: prevState.timeLeft - 1000 }));
    }, 1000);
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
          <p>
            Lifes left: <span>{lifes}</span>
          </p>
        </div>
        <div className="info-elem">
          <p>
            Game Start Time: <span>{this.getStartDate(startTime)}</span>
          </p>
        </div>
        <div className="info-elem">
          <p>
            State Of Game: <span>{stateOfGame}</span>
          </p>
        </div>
        <div className="info-elem">
          <p>
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

GameInfo.propTypes = {
  lifes: PropTypes.number.isRequired,
  startTime: PropTypes.number.isRequired,
  stateOfGame: PropTypes.string.isRequired,
  isFinished: PropTypes.bool.isRequired,
  stoppedTime: PropTypes.string,
  closeGame: PropTypes.func.isRequired,
  saveTime: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInfo);
