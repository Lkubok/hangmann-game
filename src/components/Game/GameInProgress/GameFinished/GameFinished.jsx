import React, { Component } from "react";
import { connect } from "react-redux";
import "./GameFinished.scss";
import { clearGameParams } from "../../../../actions/gameActions";
export class GameFinished extends Component {
  handlePlayAgain = () => {
    this.props.clearGameParams();
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
const mapStateToProps = state => ({});

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
