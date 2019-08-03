import { createSelector } from "reselect";
import matchSorter from "match-sorter";
import _ from "lodash";

export const getQuotes = state => state.quotesReducer.quotes;
export const getPageLimit = state => state.quotesReducer.pageLimit;
export const getActualPage = state => state.quotesReducer.actualPage;
export const getFilterQuery = state => state.quotesReducer.filterQuery;
export const getSortingOrder = state => state.quotesReducer.sortOrder;
export const getSortingBy = state => state.quotesReducer.sortBy;
export const getFetchingStatus = state => state.editQuoteReducer.isFetching;
export const getFetchedQuote = state => state.editQuoteReducer.fetchedQuote;
//GAME SELECTORS
export const getGameId = state => state.gameReducer.gameId;
export const getIsRequesting = state => state.gameReducer.isRequesting;
export const getLettersToGuess = state => state.gameReducer.lettersToGuess;

export const getSortedQuotes = createSelector(
  getQuotes,
  getFilterQuery,
  getSortingBy,
  getSortingOrder,
  (quotes, filterQuery, sortingBy, sortingOrder) => {
    const sortedQuotes = matchSorter(quotes, filterQuery, {
      keys: ["quote", "quoteAuthor", "insertAuthor", "lang", "difficulty"],
      threshold: matchSorter.rankings.WORD_STARTS_WITH
    });
    return _.orderBy(sortedQuotes, [sortingBy], [_.toLower(sortingOrder)]);
  }
);

export const pagesCount = createSelector(
  getSortedQuotes,
  getPageLimit,
  (quotes, limit) => {
    return parseInt(quotes.length / limit);
  }
);
