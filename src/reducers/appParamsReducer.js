import * as types from "../types/appTypes";

const initialState = {
  isLogged: false,
  userName: "",
  jwt: "",
  userEmail: ""
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
    default:
      return state;
  }
};

export default appParamsReducer;
