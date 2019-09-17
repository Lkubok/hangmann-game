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
    case types.LOG_IN:
      return { ...state, isLogged: true, userName: action.userName };
    case types.LOG_OUT:
      return { ...state, isLogged: false, userName: "" };
    default:
      return state;
  }
};

export default appParamsReducer;
