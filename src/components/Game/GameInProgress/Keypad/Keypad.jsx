import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import { connect } from "react-redux";
import { pressLetter } from "../../../../actions/gameActions";
import "react-simple-keyboard/build/css/index.css";
import * as selectors from "../../../../reducers/selectors";
import "./Keypad.scss";

class Keypad extends Component {
  onKeyPress = button => {
    const { pressLetter, gameId, typed } = this.props;
    pressLetter(button, gameId, typed);
  };
  listTypedButtons = () => {
    return this.props.typed.join(" ");
  };

  render() {
    return (
      <div className="keyboard">
        <Keyboard
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
              class: "key-button-typed",
              buttons: ""
            },
            {
              class: "key-button-untyped",
              buttons: " "
            }
          ]}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state),
  typed: selectors.getTypedLetters(state)
});
const mapDispatchToProps = {
  pressLetter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keypad);
