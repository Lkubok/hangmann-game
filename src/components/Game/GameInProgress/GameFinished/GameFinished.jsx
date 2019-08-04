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
  componentDidMount() {
    //SEND HERE STATS FROM GAME TO BACKEND
  }
  render() {
    return (
      <div className="game-finished">
        GAME FINISHED
        <button onClick={this.handlePlayAgain}>Play again</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userName: selectors.getGameUserName(state),
  userEmail: selectors.getUserEmail(state),
  userLevel: selectors.getGameLevel(state),
  userLang: selectors.getGameLang(state)
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
