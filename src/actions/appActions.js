import * as types from "../types/appTypes";
// const { REACT_APP_API_HOST } = process.env;

export const userLogIn = userName => ({
  type: types.LOG_IN,
  userName
});

export const userLogOut = () => ({
  type: types.LOG_OUT
});

export const setUserLogIn = (user, email) => dispatch => {
  dispatch(userLogIn(user));
  dispatch(setUserEmail(email));
};

export const setJwt = jwt => ({
  type: types.SET_JWT,
  jwt
});

export const setUserEmail = email => ({
  type: types.SET_EMAIL,
  email
});

export const setUserLogOut = () => dispatch => {
  let check = window.confirm("Are you sure you want to log out ?");
  if (check === true) {
    dispatch(userLogOut());
    dispatch(setJwt(""));
    dispatch(setUserEmail(""));
    localStorage.removeItem("JWT_HANG_TOKEN");
  }
};
