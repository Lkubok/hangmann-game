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
    const { pressLetter, gameId, typed } = this.props;
    if (typed.includes(button)) {
      return;
    } else {
      pressLetter(button, gameId);
    }
  };
  listTypedButtons = () => {
    return this.props.typed.join(" ");
  };

  render() {
    return (
      <div className="keyboard" key={`${this.props.typed.join("-")}`}>
        <Keyboard
          onKeyPress={this.onKeyPress}
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
              buttons: `${this.props.typed.join(" ")}`
              // buttons: "w"
            },
            {
              class: "key-button key-button-untyped",
              // buttons: `${this.state.untyped.join(" ")}`
              buttons: "Q"
            }
          ]}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state),
  // typed: selectors.getTypedLetters(state),
  guessed: selectors.getGuessedLetters(state)
});
const mapDispatchToProps = {
  pressLetter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keypad);
