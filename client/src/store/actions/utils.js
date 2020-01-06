import axios from "axios";

export const setAuthToken = token => {
  if (token)
    axios.defaults.headers.common["Authorization"] = JSON.stringify(token);
  else delete axios.defaults.headers.common["Authorization"];
};

export const onError = (err, type, payload) => dispatch => {
  if (err.response && err.response.data) {
    console.error(err.response.data);
    dispatch({ type, payload: err.response.data });
  } else {
    console.error(err);
    dispatch({ type, payload });
  }
};
