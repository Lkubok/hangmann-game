import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../../../../reducers/selectors";
import "./GameFinished.scss";
import { clearGameParams } from "../../../../actions/gameActions";
export class GameFinished extends Component {
  handlePlayAgain = () => {
    const { userName, userEmail, userLevel, userLang } = this.props;
    this.props.clearGameParams(userName, userEmail, userLevel, userLang);
  };
  searchedQuote = () => {
    return "saa";
  };
  componentDidMount() {
    //SEND HERE STATS FROM GAME TO BACKEND
  }
  render() {
    const { isGuessed } = this.props;
    console.log(isGuessed);
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
        {isGuessed ? null : <h4>searched quote:</h4>}
        {isGuessed ? null : <h5>{this.searchedQuote()}</h5>}
        <button className="btn-restart" onClick={this.handlePlayAgain}>
          Play again
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userName: selectors.getGameUserName(state),
  userEmail: selectors.getUserEmail(state),
  userLevel: selectors.getGameLevel(state),
  userLang: selectors.getGameLang(state),
  isGuessed: selectors.isGuessed(state)
});

const mapDispatchToProps = {
  clearGameParams
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameFinished);

//MAKE SOME VARIABLES THINGS

//RED SCREEN WHEN DEAD

//BUTTONS TO START NEW GAME

//WHEN DIDMOUNT SEND TO BACKEND STATS

//CODE WHEN IS FINISHED AND QUOTE IS NOT GUESSED  FROM STATE OF GAME -> WIN CONDITION
