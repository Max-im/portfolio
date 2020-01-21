import { GET_EDUCATION, EDU_ERROR, EDU_READY  } from "../constants";

const initialState = {
  isReady: false,
  list: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EDUCATION:
      return { ...state, list: action.payload, error: null };

    case EDU_ERROR:
      return { ...state, error: action.payload };

    case EDU_READY:
      return { ...state, isReady: action.payload };

    default:
      return state;
  }
};
