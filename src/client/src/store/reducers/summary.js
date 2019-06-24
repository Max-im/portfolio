import { SET_SUMMARY, LOAD_SUMMARY } from "../actions/constants";

const initialState = {
  loading: false,
  photo: null,
  name: null,
  summary: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SUMMARY:
      const { photo, summary, name } = action.payload[0];
      return { ...state, photo, summary, name };

    case LOAD_SUMMARY:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
