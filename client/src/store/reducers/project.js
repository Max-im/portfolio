import { GET_PROJECT, PROJECT_READY, PROJECT_ERROR, SET_RATE, EMIT_RATE_ERROR } from '../constants';

const initialState = {
  isReady: false,
  project: null,
  rate: null,
  rateError: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_READY:
      return { ...state, isReady: action.payload };

    case GET_PROJECT:
      return { ...state, project: action.payload };

    case PROJECT_ERROR:
      return { ...state, error: action.payload };

    case SET_RATE:
      return { ...state, rate: action.payload };

    case EMIT_RATE_ERROR:
      return { ...state, rateError: action.payload };

    default:
      return state;
  }
};
