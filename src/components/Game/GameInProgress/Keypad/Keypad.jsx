import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import { connect } from "react-redux";
import { pressLetter } from "../../../../actions/gameActions";
import "react-simple-keyboard/build/css/index.css";
import * as selectors from "../../../../reducers/selectors";
import "./Keypad.scss";

class Keypad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typed: [],
      untyped: []
    };
  }
  onKeyPress = button => {
    this.forceUpdate();
    const { pressLetter, gameId, typed } = this.props;
    pressLetter(button, gameId, typed);
    /*     this.setState(prevState => {
      prevState.typed.push(button);
    }); */
  };
  listTypedButtons = () => {
    return this.props.typed.join(" ");
  };
  componentDidUpdate() {}

  render() {
    return (
      <div className="keyboard">
        <Keyboard
          key={this.listTypedButtons()}
          onKeyPress={button => this.onKeyPress(button)}
          layout={{
            default: [
              "q w e r t y u i o p",
              "a s d f g h j k l",
              "z x c v b n m"
            ]
          }}
          buttonTheme={[
            {
              class: "key-button key-button-typed",
              // buttons: `"${this.state.typed.join(" ")}"`
              buttons: "a"
            },
            {
              class: "key-button key-button-untyped",
              // buttons: `"${this.state.untyped.join("")}"`
              buttons: "b"
            }
          ]}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state),
  typed: selectors.getTypedLetters(state),
  guessed: selectors.getGuessedLetters(state)
});
const mapDispatchToProps = {
  pressLetter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keypad);