import * as types from "../types/editQuoteTypes";
import axios from "axios";
const { REACT_APP_API_HOST } = process.env;

export const changeFetchStatus = status => ({
  type: types.IS_FETCHING,
  status
});
export const insertFetchedQuote = quote => ({
  type: types.QUOTE_FETCHED,
  quote
});

export const fetchQuote = id => dispatch => {
  dispatch(changeFetchStatus(true));
  setTimeout(() => {
    // In production, delete setTimeout !!!
    axios
      .get(REACT_APP_API_HOST + "/quotes/single/" + id)
      .then()
      .then(response => {
        dispatch(insertFetchedQuote(response.data));
        dispatch(changeFetchStatus(false));
      });
  }, 1000);
};
