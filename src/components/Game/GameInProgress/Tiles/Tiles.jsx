import React, { Component } from "react";
import { connect } from "react-redux";
import * as selectors from "../../../../reducers/selectors";
import "./Tiles.scss";

export class Tiles extends Component {
  renderTiles = () => {
    const { lettersToGuess } = this.props;
    return lettersToGuess.map(el => (
      <div className="letter-tile">{el === "encoded" ? "" : el}</div>
    ));
  };
  render() {
    return <div className="letter-box">{this.renderTiles()}</div>;
  }
}

const mapStateToProps = state => ({
  lettersToGuess: selectors.getLettersToGuess(state)
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tiles);
