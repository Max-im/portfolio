import { DO_SMTH } from "../actions/constants";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DO_SMTH:
      return {
        ...state
      };

    default:
      return state;
  }
};
