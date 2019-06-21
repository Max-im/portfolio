import axios from "axios";
import { SET_USER } from "./constants";

/**
 * Login user
 */
export const onLogin = resp => dispatch => {
  const { email, googleId: gId, name, imageUrl: avatar } = resp.profileObj;

  axios
    .post("/auth", { email, gId, name, avatar })
    .then(({ data }) => dispatch({ type: SET_USER, payload: data }))
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
};
