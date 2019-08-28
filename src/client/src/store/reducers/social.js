import { GET_SOCIAL, SOCIAL_ERROR } from "../actions/constants";

const initialState = {
  social: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SOCIAL:
      return { ...state, error: null, social: action.payload };

    case SOCIAL_ERROR:
      return { ...state, error: action.payload, social: null };

    default:
      return state;
  }
};
