import { GET_EXPERIENCE, LOAD_EXP, EXP_ERROR } from "../constants";

const initialState = {
  loading: false,
  list: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCE:
      return { ...state, list: action.payload, error: null };

    case LOAD_EXP:
      return { ...state, loading: action.payload };

    case EXP_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
