import { combineReducers } from "redux";

import gameReducer from "./gameReducer";
import quotesReducer from "./quotesReducer";
import appParamsReducer from "./appParamsReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  gameReducer,
  quotesReducer,
  appParamsReducer,
  loginReducer
});
