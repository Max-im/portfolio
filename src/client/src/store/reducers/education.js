import { SET_EDU, LOAD_EDU, EDU_ERROR } from "../actions/constants";

const initialState = {
  loading: false,
  edu: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EDU:
      return { ...state, edu: action.payload };

    case LOAD_EDU:
      return { ...state, loading: action.payload };

    case EDU_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
