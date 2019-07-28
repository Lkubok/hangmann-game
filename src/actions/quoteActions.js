import * as types from "../types/quotesTypes";
import axios from "axios";

export const loadQuotes = arrayWithQuotes => ({
  type: types.LOAD_QUOTES,
  quotes: arrayWithQuotes
});
export const updateSortedQuotes = arrayWithSortedQuotes => ({
  type: types.UPDATE_SORTED_QUOTES,
  sortedQuotes: arrayWithSortedQuotes
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

export const changeFilterQuery = query => ({
  type: types.CHANGE_FILTER_QUERY,
  query
});
export const updatePageSize = pageSize => ({
  type: types.UPDATE_PAGE_SIZE,
  pageSize
});
export const changeSortOrder = order => ({
  type: types.CHANGE_SORT_ORDER,
  order
});
export const changeSortBy = orderBy => ({
  type: types.CHANGE_SORT_BY,
  orderBy
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
  let check = window.confirm("Are You sure to delete this quote ?");
  if (check === true) {
    console.log("Quote", quote, "Deleted in remote API");
    axios.delete(api + "/quotes/delete", { data: { id: quote } });
    dispatch(deleteQuoteInState(quote));
  }
};
export const changeSorting = (byElem, oldElem, curSorting) => dispatch => {
  if (byElem === oldElem) {
    const newSortOrder = curSorting === "ASC" ? "DESC" : "ASC";
    dispatch(changeSortOrder(newSortOrder));
  } else {
    dispatch(changeSortBy(byElem));
    dispatch(changeSortOrder("ASC"));
  }
};
