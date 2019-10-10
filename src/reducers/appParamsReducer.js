import * as types from "../types/appTypes";

const initialState = {
  isLogged: false,
  userName: "",
  jwt: "",
  userEmail: "",
  isRequesting: false
};

const appParamsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return { ...state, isLogged: true, userName: action.userName };
    case types.LOG_OUT:
      return { ...state, isLogged: false, userName: "" };
    case types.SET_JWT:
      return { ...state, jwt: action.jwt };
    case types.SET_EMAIL:
      return { ...state, userEmail: action.email };
    case types.SET_REQUESTING:
      return { ...state, isRequesting: action.requestValue };
    default:
      return state;
  }
};

export default appParamsReducer;
