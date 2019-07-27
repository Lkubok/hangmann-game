import * as types from "../types/quotesTypes";

const initialState = {
  quotes: [],
  sortBy: "",
  filterBy: "",
  filterQuery: "",
  pageLimit: 10,
  actualPage: 0
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_QUOTES:
      return { ...state, quotes: action.quotes };
    case types.CHANGE_ACTUAL_PAGE:
      return { ...state, actualPage: action.page };
    case types.DELETE_QUOTE_STATE:
      return {
        ...state,
        quotes: [...state.quotes].filter(el => el._id !== action.quoteId)
      };
    default:
      return state;
  }
};

export default quotesReducer;
