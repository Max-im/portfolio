import { GET_EXPERIENCE, EXP_ERROR, EXP_READY } from "../constants";

const initialState = {
  isReady: false,
  list: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return { ...state, list: action.payload, error: null };

    case EXP_ERROR:
      return { ...state, error: action.payload };

    case EXP_READY:
      return { ...state, isReady: action.payload };

    default:
      return state;
  }
};
