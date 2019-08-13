import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../../../../reducers/selectors";
import "./Tiles.scss";

export class Tiles extends Component {
  renderTiles = () => {
    const { lettersToGuess } = this.props;
    console.log("tiles", this.props.typed);
    return lettersToGuess.map((el, index) => (
      <div
        key={index}
        className={
          el === "encoded"
            ? "tile tile-to-guess"
            : [" ", "?", "!", ",", ".", ":", ";", "-", "+", "'", "`"].includes(
                el
              )
            ? "tile tile-space"
            : "tile tile-guessed"
        }
      >
        {el === "encoded" ? "" : el}
      </div>
    ));
  };
  render() {
    return <div className="letter-box">{this.renderTiles()}</div>;
  }
}

const mapStateToProps = state => ({
  lettersToGuess: selectors.getLettersToGuess(state),
  typed: selectors.getTypedLetters(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tiles);
