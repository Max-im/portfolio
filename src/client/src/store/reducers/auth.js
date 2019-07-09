import { SET_USER, AUTH_ERROR } from "../actions/constants";

const initialState = {
  user: {},
  isAuth: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: Object.keys(action.payload).length > 0
      };

    case AUTH_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
