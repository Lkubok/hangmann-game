import * as types from "../types/quotesTypes";

const initialState = {
  quotes: [],
  sortedQuotes: [],
  sortBy: "dateInsert",
  sortOrder: "ASC",
  filterBy: "",
  filterQuery: "",
  pageLimit: 10,
  actualPage: 0
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_QUOTES:
      return { ...state, quotes: action.quotes };
    case types.UPDATE_SORTED_QUOTES:
      return { ...state, sortedQuotes: action.sortedQuotes };
    case types.CHANGE_ACTUAL_PAGE:
      return { ...state, actualPage: action.actualPage };
    case types.DELETE_QUOTE_STATE:
      return {
        ...state,
        quotes: [...state.quotes].filter(el => el._id !== action.quoteId)
      };
    case types.CHANGE_FILTER_QUERY:
      return { ...state, filterQuery: action.query, actualPage: 0 };
    case types.UPDATE_PAGE_SIZE:
      return { ...state, pageLimit: action.pageSize, actualPage: 0 };
    case types.CHANGE_SORT_ORDER:
      return { ...state, sortOrder: action.order };
    case types.CHANGE_SORT_BY:
      return { ...state, sortBy: action.orderBy };
    default:
      return state;
  }
};

export default quotesReducer;
