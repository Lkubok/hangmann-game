import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
