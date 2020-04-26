import jwt_decode from 'jwt-decode';
import { read_cookie } from 'sfcookies';
import { setAuthToken } from '../actions/utils';
import { APP_NAME, SET_USER, AUTH_ERROR } from '../constants';

const initialState = {
  isAuth: false,
  user: null,
  error: null,
};

try {
  const access_token = read_cookie(APP_NAME);
  const decoded = jwt_decode(access_token);
  if (decoded && decoded.exp) {
    if (decoded.exp * 1000 > Date.now()) {
      initialState.isAuth = true;
      initialState.user = decoded.payload;
      setAuthToken(access_token);
    }
  }
} catch (err) {
  initialState.isAuth = false;
  initialState.user = null;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: action.payload ? true : false,
      };

    default:
      return state;
  }
};
