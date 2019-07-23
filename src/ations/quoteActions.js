import * as types from "../types/quotesTypes";

export const loadQuotes = arrayWithQuotes => ({
  type: types.LOAD_QUOTES,
  quotes: arrayWithQuotes
});
