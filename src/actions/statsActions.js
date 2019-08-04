import * as types from "../types/statsTypes";
import axios from "axios";
const { REACT_APP_API_HOST } = process.env;

export const loadStats = stats => ({
  type: types.LOAD_STATS,
  stats
});

export const loadStatistics = () => dispatch => {
  axios
    .get(REACT_APP_API_HOST + "/stats")
    .then(response => response.data)
    .then(data => dispatch(loadStats(data)));
};

export const unloadStatistics = () => dispatch => {
  dispatch(loadStats({}));
};
