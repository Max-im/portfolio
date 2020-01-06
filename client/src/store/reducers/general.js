import { SCROLL_PAGE } from "../actions/constants";

const initialState = {
  scrollY: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_PAGE:
      return { ...state, scrollY: action.payload };

    default:
      return state;
  }
};
