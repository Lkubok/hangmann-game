import * as types from "../types/editQuoteTypes";
const initialState = { fetchedQuote: {}, isFetching: false };

export const editQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IS_FETCHING:
      return { ...state, isFetching: action.status };
    case types.QUOTE_FETCHED:
      return { ...state, fetchedQuote: action.quote };
    default:
      return state;
  }
};
