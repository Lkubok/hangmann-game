import * as types from "../types/quotesTypes";
import axios from "axios";

export const updateSortedQuotes = sortedQuotes => ({
  type: types.UPDATE_SORTED_QUOTES,
  sortedQuotes
});
export const changeActualPage = actualPage => ({
  type: types.CHANGE_ACTUAL_PAGE,
  actualPage
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

export const updateQuotes = api => dispatch => {
  axios
    .get(api + "/quotes/all")
    .then(response => dispatch(loadQuotes(response.data)))
    .catch(err => {});
};

export const deleteQuote = (api, quote, token) => dispatch => {
  let check = window.confirm("Are You sure to delete this quote ?");
  if (check === true) {
    const url = api + "/quotes/delete";
    const content = {
      id: quote
    };
    axios
      .delete(url, {
        headers: {
          "content-type": "application/json",
          Authorization: token
        },
        data: content
      })
      .then(response => {
        if (response.status === 200) {
          dispatch(deleteQuoteInState(quote));
        }
      })
      .catch(error => {
        alert(error.response.data);
      });
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

export const changeFilter = filterQuery => dispatch => {
  dispatch(changeFilterQuery(filterQuery));
};

export const changeSortedQuotes = quotes => dispatch => {
  dispatch(updateSortedQuotes(quotes));
};

export const changePageSize = pageSize => dispatch => {
  dispatch(updatePageSize(pageSize));
};
export const removeAllQuotes = () => dispatch => {
  dispatch(loadQuotes([]));
  dispatch(updateSortedQuotes([]));
};
