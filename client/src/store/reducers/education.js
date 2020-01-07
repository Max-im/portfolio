import { GET_EDUCATION, LOADING_EDU, EDU_ERROR } from "../constants";

const initialState = {
  loading: false,
  list: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EDUCATION:
      return { ...state, list: action.payload, error: null };

    case LOADING_EDU:
      return { ...state, loading: action.payload };

    case EDU_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
