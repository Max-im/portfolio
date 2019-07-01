import axios from "axios";
import { bake_cookie, delete_cookie } from "sfcookies";
import { SET_USER } from "./constants";
import { setAuthToken } from "./utils";

/**
 * Login user
 */
export const onLogin = resp => dispatch => {
  const { email, googleId: gId, name, imageUrl: avatar } = resp.profileObj;

  axios
    .post("/auth", { email, gId, name, avatar })
    .then(({ data }) => {
      dispatch({ type: SET_USER, payload: data });
      bake_cookie("max-im", data);
      setAuthToken(data);
    })
    .catch(err => console.error(err));
};

/**
 * Login error handle
 */
export const onLoginError = () => dispatch => {};

/**
 * Logout
 */
export const onLogout = () => dispatch => {
  dispatch({ type: SET_USER, payload: {} });
  delete_cookie("max-im");
  setAuthToken(false);
};
