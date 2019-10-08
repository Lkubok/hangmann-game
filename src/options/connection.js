const { REACT_APP_API_HOST } = process.env;
export const token = localStorage.getItem("JWT_HANG_TOKEN");
export const options = {
  method: "GET",
  headers: { "content-type": "application/json", Authorization: token },
  url: REACT_APP_API_HOST + `/islogged`
};
