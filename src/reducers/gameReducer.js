import * as types from "../types/gameTypes";

const initialState = {
  isAlive: "",
  gameId: "",
  guessedLetters: [],
  typedLetters: [],
  timeLeft: "",
  stateOfGame: "",
  lifes: "",
  isRequesting: false
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LAUNCH_NEW_GAME:
      return { ...state };
    default:
      return state;
  }
};

export default gameReducer;
