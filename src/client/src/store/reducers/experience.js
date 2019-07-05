import { SET_EXP, LOAD_EXP } from "../actions/constants";

const initialState = {
  loading: false,
  exp: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EXP:
      return { ...state, exp: action.payload };

    case LOAD_EXP:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
