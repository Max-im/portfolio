import { GET_ABOUT, ABOUT_READY } from "../constants";

const initialState = {
  summary: null,
  name: null,
  lastName: null,
  avatar: null,
  title: null,
  social: null,
  contacts: null,
  isReady: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ABOUT:
      return { ...state, ...action.payload, error: null };

    case ABOUT_READY:
      return { ...state, isReady: action.payload };

    default:
      return state;
  }
};
