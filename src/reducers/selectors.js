import { createSelector } from "reselect";

export const getQuotes = state => state.quotesReducer.quotes;
export const getPageLimit = state => state.quotesReducer.pageLimit;
export const getActualPage = state => state.quotesReducer.actualPage;

export const pagesCount = createSelector(
  getQuotes,
  getPageLimit,
  (quotes, limit) => {
    return parseInt(quotes.length / limit);
  }
);
