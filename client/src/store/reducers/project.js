import {
  GET_PROJECT,  
  PROJECT_READY
} from "../constants";

const initialState = {
  isReady: false,
  project: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_READY:
      return { ...state, isReady: action.payload };

    case GET_PROJECT:
      return { ...state, project: action.payload };

    default:
      return state;
  }
};
