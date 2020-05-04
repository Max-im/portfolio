import axios from 'axios';
import * as CONSTANTS from '../constants';

export const setAuthToken = (token) => {
  if (token) axios.defaults.headers.common['Authorization'] = JSON.stringify(token);
  else delete axios.defaults.headers.common['Authorization'];
};

export const onError = (err, type) => (dispatch) => {
  let payload = '';
  if (err && err.response && err.response.data) {
    payload = err.response.data;
  } else if (err && err.message && typeof err.message === 'string') {
    payload = err.message;
  } else {
    payload = CONSTANTS[type + '_MSG'];
  }
  dispatch({ type, payload });
  setTimeout(() => dispatch({ type, payload: null }), 5000);
};
