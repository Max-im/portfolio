import { SCROLL_PAGE } from "../constants";

const initialState = {
  scroll: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_PAGE:
      return { ...state, scroll: action.payload };

    default:
      return state;
  }
};
