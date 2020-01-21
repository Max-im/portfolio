import { SET_USER, AUTH_ERROR } from "../constants";

const initialState = {
    isAuth: null,
    error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: false
      };

    default:
      return state;
  }
};
