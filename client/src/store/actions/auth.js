import axios from "axios";
import { bake_cookie, delete_cookie } from "sfcookies";
import jwt_decode from "jwt-decode";
import { SET_USER, AUTH_ERROR } from "../constants";
import { onError, setAuthToken } from "./utils";

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
      const { access_token } = data;
      setAuthToken(access_token);
      bake_cookie("max-im", access_token);

      // decode token
      const { payload } = jwt_decode(access_token);
      dispatch({ type: SET_USER, payload });
    })
    .catch(err => dispatch(onError(err, AUTH_ERROR, "Auth error")));
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
