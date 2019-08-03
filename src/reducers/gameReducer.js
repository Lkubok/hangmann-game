import * as types from "../types/gameTypes";

const initialState = {
  isAlive: "",
  gameId: null,
  guessedLetters: [],
  typedLetters: [],
  lettersToGuess: [],
  quoteAuthor: "",
  stateOfGame: "",
  lifes: "",
  isRequesting: false,
  isFinished: false,
  gameStartedAt: ""
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NEW_GAME:
      return {
        ...state, //IT MIGHT BE PROBLEMATIC - SEARCH HERE IN FUTURE IN CASE OF PROBLEMS
        ...action.game,
        stateOfGame: "alive",
        isAlive: true,
        gameStartedAt: Date.now()
      };
    case types.RESET_GAME:
      return { ...initialState, typedLetters: [], guessedLetters: [] };
    case types.SET_REQUESTING:
      return { ...state, isRequesting: action.status };
    case types.REMOVE_GAME:
      return { ...initialState, typedLetters: [] };
    case types.ADD_TYPED_LETTER:
      return { ...state, ...state.typedLetters.push(action.letter) };
    case types.CHANGE_STATE_OF_GAME:
      return { ...state, stateOfGame: action.state };
    case types.CHANGE_LIFES_COUNT:
      return { ...state, lifes: action.lifes };
    case types.CHANGE_IS_ALIVE:
      return { ...state, isAlive: action.value };
    case types.ADD_GUESSED_LETTER:
      return { ...state, ...state.guessedLetters.push(action.letter) };
    case types.CHANGE_IS_FINISHED:
      return { ...state, isFinished: action.status };
    case types.KEYBOARD_REFRESH:
      return {
        ...state
      };
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
