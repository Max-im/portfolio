import {
  GET_PROJECT,
  PROJECT_READY,
  PROJECT_ERROR,
  SET_RATE,
  EMIT_RATE_ERROR,
  SET_RECOMMENDATIONS,
  SET_COMMENTS,
  ADD_COMMENT,
  EMIT_CREATE_COMMENT_ERROR
} from '../constants';

const initialState = {
  isReady: false,
  project: null,
  rate: null,
  recommendations: null,
  comments: null,
  rateError: null,
  error: null,
  createCommentError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_READY:
      return { ...state, isReady: action.payload };

    case GET_PROJECT:
      return { ...state, project: action.payload };

    case PROJECT_ERROR:
      return { ...state, error: action.payload };

    case SET_RATE:
      return { ...state, rate: action.payload };

    case SET_RECOMMENDATIONS:
      return { ...state, recommendations: action.payload };

    case SET_COMMENTS:
      return { ...state, comments: action.payload };
    
    case ADD_COMMENT:
      return { ...state, comments: [action.payload, ...state.comments] };
    
    case EMIT_CREATE_COMMENT_ERROR:
      return { ...state, createCommentError: action.payload };

    case EMIT_RATE_ERROR:
      return { ...state, rateError: action.payload };

    default:
      return state;
  }
};
