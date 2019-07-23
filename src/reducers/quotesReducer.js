import * as types from "../types/quotesTypes";

const initialState = {
  quotes: [],
  sortBy: "",
  filterBy: "",
  filterQuery: ""
};

const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_QUOTES:
      return { ...state, quotes: action.quotes };
    default:
      return state;
  }
};

export default quotesReducer;
