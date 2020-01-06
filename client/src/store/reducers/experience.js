import { SET_EXP, LOAD_EXP, EXP_ERROR } from "../actions/constants";

const initialState = {
  loading: false,
  exp: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXP:
      return { ...state, exp: action.payload, error: null };

    case LOAD_EXP:
      return { ...state, loading: action.payload };

    case EXP_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
