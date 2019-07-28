import { createSelector } from "reselect";
import matchSorter from "match-sorter";

export const getQuotes = state => state.quotesReducer.quotes;
export const getPageLimit = state => state.quotesReducer.pageLimit;
export const getActualPage = state => state.quotesReducer.actualPage;
export const getFilterQuery = state => state.quotesReducer.filterQuery;
export const getSortingOrder = state => state.quotesReducer.sortOrder;
export const getSortingBy = state => state.quotesReducer.sortBy;

export const getSortedQuotes = createSelector(
  getQuotes,
  getFilterQuery,
  getSortingBy,
  getSortingOrder,
  (quotes, filterQuery, sortingBy, sortingOrder) => {
    return matchSorter(quotes, filterQuery, {
      keys: [
        { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: "quote" },
        {
          threshold: matchSorter.rankings.WORD_STARTS_WITH,
          key: "quoteAuthor"
        },
        { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: "lang" },
        { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: "difficulty" },
        { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: "dateInsert" },
        { threshold: matchSorter.rankings.WORD_STARTS_WITH, key: "dateModify" },
        {
          threshold: matchSorter.rankings.WORD_STARTS_WITH,
          key: "insertAuthor"
        }
      ]
    });
  }
);

export const pagesCount = createSelector(
  getSortedQuotes,
  getPageLimit,
  (quotes, limit) => {
    return parseInt(quotes.length / limit);
  }
);
