import {
  GET_PROJECT,
  GET_PROJECT_RATE,
  GET_COMMETNS,
  LOADING_COMMENTS,
  ADD_COMMENT,
  REMOVE_COMMENT,
  LOAD_PROJECT
} from "../actions/constants";

const initialState = {
  loading: false,
  project: null,
  comments: [],
  likes: null,
  dislikes: null,
  loadComments: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROJECT:
      return { ...state, loading: action.payload };

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
