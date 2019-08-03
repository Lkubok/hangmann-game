import React, { Component } from "react";
import Keyboard from "react-simple-keyboard";
import { connect } from "react-redux";
import { pressLetter } from "../../../../actions/gameActions";
import "react-simple-keyboard/build/css/index.css";
import * as selectors from "../../../../reducers/selectors";

class Keypad extends Component {
  onKeyPress = button => {
    const { pressLetter, gameId } = this.props;
    pressLetter(button, gameId);
  };

  render() {
    return (
      <Keyboard
        onKeyPress={button => this.onKeyPress(button)}
        layout={{
          default: ["q w e r t y u i o p", "a s d f g h j k l", "z x c v b n m"]
        }}
      />
    );
  }
}
const mapStateToProps = state => ({
  gameId: selectors.getGameId(state)
});
const mapDispatchToProps = {
  pressLetter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keypad);
