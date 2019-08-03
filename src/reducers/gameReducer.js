import * as types from "../types/gameTypes";

const initialState = {
  isAlive: "",
  gameId: null,
  guessedLetters: [],
  typedLetters: [],
  lettersToguess: [],
  timeLeft: "",
  stateOfGame: "",
  lifes: "",
  isRequesting: false,
  isFinished: null,
  gameStartedAt: ""
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NEW_GAME:
      return { ...state, ...action.game, gameStartedAt: Date.now() };
    default:
      return state;
  }
};

export default gameReducer;
