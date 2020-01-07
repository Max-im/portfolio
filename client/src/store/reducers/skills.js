import {
  LOADING_SKILLS,
  GET_SKILLS,
  GET_CATEGORIES,
  SKILL_ERROR
} from "../constants";

const initialState = {
  isReady: false,
  categories: null,
  skills: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SKILLS:
      return { ...state, loading: action.payload };

    case GET_SKILLS:
      return { ...state, skills: action.payload, error: null };

    case GET_CATEGORIES:
      return { ...state, categories: action.payload, error: null };

    case SKILL_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
