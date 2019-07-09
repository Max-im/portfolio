import axios from "axios";
import { bake_cookie, delete_cookie } from "sfcookies";
import { SET_USER, AUTH_ERROR } from "./constants";
import { setAuthToken } from "./utils";

/**
 *
 * @param {Object} resp - response from google
 * @description Login or register user by google account
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
 * @description show auth error
 */
export const onLoginError = () => ({ type: AUTH_ERROR, payload: "Auth error" });

/**
 * @description logout
 */
export const onLogout = () => dispatch => {
  dispatch({ type: SET_USER, payload: {} });
  delete_cookie("max-im");
  setAuthToken(false);
};
