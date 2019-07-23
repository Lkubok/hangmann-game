import * as types from "../types/appTypes";

const initialState = {
  isLogged: false,
  isActive: false,
  userName: "",
  refreshDate: "",
  appStartedAt: ""
};

const appParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGGED_IN:
      return state;
    default:
      return state;
  }
};

export default appParamsReducer;
