import { SET_SUMMARY, LOAD_SUMMARY, SUMMARY_ERROR } from "../actions/constants";

const initialState = {
  loading: false,
  photo: null,
  name: null,
  summary: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SUMMARY:
      const { photo, summary, name } = action.payload[0];
      return { ...state, photo, summary, name };

    case LOAD_SUMMARY:
      return { ...state, loading: action.payload };

    case SUMMARY_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
