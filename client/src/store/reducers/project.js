import {
  GET_PROJECT,  
  PROJECT_READY,
  PROJECT_ERROR
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
    
    case PROJECT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
