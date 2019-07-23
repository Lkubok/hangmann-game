import * as types from "../types/loginTypes";

const initialState = {
  userName: "",
  email: "",
  password: "",
  responseFromServer: "",
  isProceding: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_USER_NAME:
      return state;
    default:
      return state;
  }
};

export default loginReducer;
