import { SET_EDU, LOAD_EDU } from "../actions/constants";

const initialState = {
  loading: false,
  edu: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EDU:
      return { ...state, edu: action.payload };

    case LOAD_EDU:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
