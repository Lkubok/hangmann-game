import * as types from "../types/quotesTypes";
import axios from "axios";

export const loadQuotes = arrayWithQuotes => ({
  type: types.LOAD_QUOTES,
  quotes: arrayWithQuotes
});

// THUNK ACTIONS:

export const updateQuotes = api => dispatch => {
  axios
    .get(api + "/quotes")
    .then(response => dispatch(loadQuotes(response.data)))
    .catch(err => console.log(err));
};
