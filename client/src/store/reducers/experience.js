import { GET_EXPERIENCE, EXP_ERROR } from "../constants";

const initialState = {
  isReady: false,
  list: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return { ...state, list: action.payload, error: null, isReady: true };

    case EXP_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
