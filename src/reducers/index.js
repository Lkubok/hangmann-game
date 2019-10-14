import { combineReducers } from "redux";

import gameReducer from "./gameReducer";
import quotesReducer from "./quotesReducer";
import appParamsReducer from "./appParamsReducer";
import { editQuoteReducer } from "./editQuoteReducer";

export default combineReducers({
  gameReducer,
  quotesReducer,
  appParamsReducer,
  editQuoteReducer
});
