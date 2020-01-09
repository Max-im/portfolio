import {
  GET_PROJECT,
  GET_PROJECT_RATE,
  GET_COMMETNS,
  LOADING_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
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

    case LOADING_COMMENTS:
      return { ...state, loadComments: action.payload };

    case ADD_COMMENT:
      return { ...state, comments: [action.payload, ...state.comments] };

    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(item => item.id !== action.payload)
      };

    case GET_PROJECT_RATE:
      return {
        ...state,
        likes: action.payload.likes,
        dislikes: action.payload.dislikes
      };

    case GET_COMMETNS:
      return { ...state, comments: [...state.comments, ...action.payload] };

    default:
      return state;
  }
};
