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
export const getQuoteAuthor = state => state.gameReducer.quoteAuthor;
export const getTypedLetters = state => state.gameReducer.typedLetters;
export const getLifes = state => state.gameReducer.lifes;
export const getStateOfGame = state => state.gameReducer.stateOfGame;
export const getGuessedLetters = state => state.gameReducer.guessedLetters;
export const getStartTime = state => state.gameReducer.gameStartedAt;
export const getIsFinished = state => state.gameReducer.isFinished;
// export const getGameReducer = state => state.gameReducer;
// export const getKeyboardRefresh = state => state.gameReducer.keyboardRefresh;

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
