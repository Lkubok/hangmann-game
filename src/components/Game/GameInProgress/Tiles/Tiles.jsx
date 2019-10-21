import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../../../../reducers/selectors";
import PropTypes from "prop-types";
import "./Tiles.scss";

export class Tiles extends Component {
  renderTiles = () => {
    const { lettersToGuess } = this.props;
    return lettersToGuess.map((el, index) => (
      <div
        key={index}
        className={
          el === "encoded"
            ? "tile tile-to-guess"
            : [
                " ",
                "?",
                "!",
                ",",
                ".",
                ":",
                ";",
                "-",
                "+",
                "'",
                "`",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "0"
              ].includes(el)
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

Tiles.propTypes = {
  lettersToGuess: PropTypes.array,
  typed: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tiles);
