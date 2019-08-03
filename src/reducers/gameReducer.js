import * as types from "../types/gameTypes";

const initialState = {
  isAlive: "",
  gameId: null,
  guessedLetters: [],
  typedLetters: [],
  lettersToGuess: [],
  quoteAuthor: "",
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
    case types.SET_REQUESTING:
      return { ...state, isRequesting: action.status };
    case types.REMOVE_GAME:
      return { ...initialState, typedLetters: [] };
    case types.ADD_TYPED_LETTER:
      return { ...state, ...state.typedLetters.push(action.letter) };
    case types.CHANGE_LETTER_STATUS:
      return {
        ...state,
        lettersToGuess: [
          ...state.lettersToGuess.map((el, index) =>
            action.positions.includes(index) ? action.letter : el
          )
        ]
      };
    default:
      return state;
  }
};

export default gameReducer;
