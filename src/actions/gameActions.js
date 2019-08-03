import * as types from "../types/gameTypes";
import axios from "axios";
const { REACT_APP_API_HOST } = process.env;

export const setNewGame = game => ({
  type: types.SET_NEW_GAME,
  game
});
export const removeGame = () => ({
  type: types.REMOVE_GAME
});
export const setRequesting = status => ({
  type: types.SET_REQUESTING,
  status
});
export const addTypedLetter = letter => ({
  type: types.ADD_TYPED_LETTER,
  letter
});
export const changeLetterStatus = (positions, letter) => ({
  type: types.CHANGE_LETTER_STATUS,
  positions,
  letter
});
export const changeStateOfGame = state => ({
  type: types.CHANGE_STATE_OF_GAME,
  state
});
export const changeLifesCount = lifes => ({
  type: types.CHANGE_LIFES_COUNT,
  lifes
});
export const changeIsAlive = value => ({
  type: types.CHANGE_IS_ALIVE,
  value
});
export const addToGuessedLetter = letter => ({
  type: types.ADD_GUESSED_LETTER,
  letter
});
export const changeIsFinished = status => ({
  type: types.CHANGE_IS_FINISHED,
  status
});
export const resetGame = () => ({
  type: types.RESET_GAME
});
/* export const keyboardRefresh = () => ({
  type: types.KEYBOARD_REFRESH
}); */
//THUNK

export const launchNewGame = () => dispatch => {
  dispatch(setRequesting(true));
  // setTimeout(() => {
  axios
    .post(REACT_APP_API_HOST + "/games/new", {
      player: "JonSnow",
      level: "easy",
      lang: "eng"
    })
    .then(response => response.data)
    .then(data => {
      dispatch(setNewGame(data));
      dispatch(setRequesting(false));
    });
  // }, 1000);
};

export const deleteGame = gameId => dispatch => {
  let check = window.confirm("Are you sure to leave the game ?");
  if (check === true) {
    axios
      .delete(REACT_APP_API_HOST + "/games/delete", {
        data: { gameId: gameId }
      })
      .then(response => response.data)
      .then(data => {
        if ((data.status = "deleted")) {
          dispatch(removeGame());
        }
      });
  }
};

//TUTAJ OBSLUŻ CHANGE FINISH - WYKASUJ COMMENT

export const pressLetter = (letter, gameId, typed) => dispatch => {
  if (typed.includes(letter)) {
    return;
  } else {
    axios
      .post(REACT_APP_API_HOST + "/games/check", { gameId, letter })
      .then(response => response.data)
      .then(data => {
        dispatch(addTypedLetter(letter));
        if (data.arrayToRespond.length > 0) {
          dispatch(changeLetterStatus(data.arrayToRespond, letter));
          dispatch(addToGuessedLetter(letter));
          if (data.stateOfGame === "win") {
            dispatch(changeIsFinished(true));
          }
        } else if (data.arrayToRespond.length === 0) {
          dispatch(changeLifesCount(parseInt(data.lifes)));
          dispatch(changeStateOfGame(data.stateOfGame));
          if (parseInt(data.lifes) === 0) {
            dispatch(changeIsAlive(false));
            dispatch(changeIsFinished(true));
          }
        }
      });
  }
};

export const closeGame = () => dispatch => {
  dispatch(changeIsFinished(true));
};

export const clearGameParams = () => dispatch => {
  dispatch(resetGame());
};
