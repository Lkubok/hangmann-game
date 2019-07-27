import * as types from "../types/quotesTypes";
import axios from "axios";

export const loadQuotes = arrayWithQuotes => ({
  type: types.LOAD_QUOTES,
  quotes: arrayWithQuotes
});
export const changeActualPage = actualPage => ({
  type: types.CHANGE_ACTUAL_PAGE,
  page: actualPage
});
export const deleteQuoteInState = quoteId => ({
  type: types.DELETE_QUOTE_STATE,
  quoteId
});
export const deleteQuoteInApi = quoteId => ({
  type: types.DELETE_QUOTE_API,
  quoteId
});

// THUNK ACTIONS:

export const updateQuotes = api => dispatch => {
  axios
    .get(api + "/quotes/all")
    .then(response => dispatch(loadQuotes(response.data)))
    .catch(err => console.log(err));
};

// export const fetchAndUpdateQuotes = api =>

export const updateActualPage = actualPage => dispatch => {
  dispatch(changeActualPage(actualPage));
};

export const deleteQuote = (api, quote) => dispatch => {
  console.log("Quote", quote, "Deleted in remote API");
  axios.delete(api + "/quotes/delete", { data: { id: quote } });
  dispatch(deleteQuoteInState(quote));
};
