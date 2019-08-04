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
  gameStartedAt: "",
  userName: "",
  userEmail: "",
  gameLevel: "",
  gameLang: "",
  searchedQuote: "",
  timeLeft: null
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NEW_GAME:
      return {
        ...state,
        ...action.game,
        stateOfGame: "alive",
        isAlive: true,
        gameStartedAt: Date.now(),
        timeLeft: null
      };
    case types.RESET_GAME:
      return {
        ...initialState,
        typedLetters: [],
        guessedLetters: [],
        timeLeft: null
      };
    case types.CHANGE_GAME_USERNAME:
      return { ...state, userName: action.userName };
    case types.CHANGE_USER_EMAIL:
      return { ...state, userEmail: action.email };
    case types.CHANGE_GAME_LEVEL:
      return { ...state, gameLevel: action.level };
    case types.CHANGE_GAME_LANG:
      return { ...state, gameLang: action.lang };
    case types.SET_REQUESTING:
      return { ...state, isRequesting: action.status };
    case types.REMOVE_GAME:
      return {
        ...initialState,
        typedLetters: [],
        guessedLetters: [],
        timeLeft: null
      };
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
    case types.CHANGE_SEARCHED_QUOTE:
      return { ...state, searchedQuote: action.quote };
    case types.SAVE_TIME_LEFT:
      return { ...state, timeLeft: action.time };
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
