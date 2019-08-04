import { combineReducers } from "redux";

import gameReducer from "./gameReducer";
import quotesReducer from "./quotesReducer";
import appParamsReducer from "./appParamsReducer";
import loginReducer from "./loginReducer";
import { editQuoteReducer } from "./editQuoteReducer";
import statsReducer from "./statsReducer";

export default combineReducers({
  gameReducer,
  quotesReducer,
  appParamsReducer,
  loginReducer,
  editQuoteReducer,
  statsReducer
});
