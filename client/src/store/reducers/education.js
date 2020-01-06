import {
  GET_EDU,
  LOADING_EDU,
  EDU_ERROR,
  DELETE_EDU
} from "../actions/constants";

const initialState = {
  loading: false,
  edu: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EDU:
      return { ...state, edu: action.payload, error: null };

    case LOADING_EDU:
      return { ...state, loading: action.payload };

    case DELETE_EDU:
      return { ...state, edu: state.edu.filter(v => v.id !== action.payload) };

    case EDU_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
