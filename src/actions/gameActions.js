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

//THUNK

export const launchNewGame = () => dispatch => {
  dispatch(setRequesting(true));
  setTimeout(() => {
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
  }, 1000);
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

export const pressLetter = (letter, gameId) => dispatch => {
  axios
    .post(REACT_APP_API_HOST + "/games/check", { gameId, letter })
    .then(response => response.data)
    .then(data => {
      dispatch(addTypedLetter(letter));
      if (data.arrayToRespond.length > 0)
        dispatch(changeLetterStatus(data.arrayToRespond, letter));
      console.log(data);
      console.log(data.arrayToRespond, letter);
    });
};
