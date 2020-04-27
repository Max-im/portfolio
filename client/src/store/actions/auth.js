import axios from 'axios';
import { bake_cookie, delete_cookie } from 'sfcookies';
import jwt_decode from 'jwt-decode';
import { SET_USER, AUTH_ERROR, APP_NAME } from '../constants';
import { onError, setAuthToken } from './utils';

/**
 *
 * @param {Object} resp - response from google
 * @description Login or register user by google account
 */
export const onLogin = (resp) => (dispatch) => {
  const { email, googleId: gId, name, imageUrl: avatar } = resp.profileObj;
  axios
    .post('/auth', { email, gId, name, avatar })
    .then(({ data }) => {
      const { access_token } = data;
      setAuthToken(access_token);
      bake_cookie(APP_NAME, access_token);

      // decode token
      const { payload } = jwt_decode(access_token);
      dispatch({ type: SET_USER, payload });
    })
    .catch((err) => dispatch(onError(err, AUTH_ERROR)));
};

/**
 * @description show auth error
 */
export const onLoginError = (err) => (dispatch) => {
  console.log(err, 'Auth error');
  dispatch({ type: AUTH_ERROR, payload: 'Auth error' });
};

/**
 * @description logout
 */
export const onLogout = () => (dispatch) => {
  dispatch({ type: SET_USER, payload: null });
  delete_cookie(APP_NAME);
  setAuthToken(false);
};
