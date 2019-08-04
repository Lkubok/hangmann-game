import * as types from "../types/statsTypes";
const initialState = {};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_STATS:
      return { ...action.stats };
    default:
      return state;
  }
};

export default statsReducer;
