import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
const { REACT_APP_REDUX_DEVTOOLS } = process.env;

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    REACT_APP_REDUX_DEVTOOLS
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : ""
  )
);
