import * as types from "../types/gameTypes";
import axios from "axios";
const { REACT_APP_API_HOST } = process.env;

export const setNewGame = game => ({
  type: types.SET_NEW_GAME,
  game
});

export const launchNewGame = () => dispatch => {
  axios
    .post(REACT_APP_API_HOST + "/games/new", {
      player: "JonSnow",
      level: "easy",
      lang: "eng"
    })
    .then(response => response.data)
    .then(data => dispatch(setNewGame(data)));
};
