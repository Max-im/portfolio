import {
  LOADING_SKILLS,
  GET_SKILLS,
  GET_CATEGORIES,
  ADD_SKILL,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  DELETE_SKILL,
  SKILL_ERROR,
  CATEGORY_ERROR
} from "../actions/constants";

const initialState = {
  loading: false,
  categories: null,
  admin: null,
  skills: null,
  error: null,
  categoryError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_SKILLS:
      return { ...state, loading: action.payload };

    case GET_SKILLS:
      return { ...state, skills: action.payload, error: null };

    case GET_CATEGORIES:
      return { ...state, categories: action.payload, categoryError: null };

    case ADD_SKILL:
      return { ...state, skills: [...state.skills, action.payload] };

    case ADD_CATEGORY:
      return { ...state, categories: [...state.categories, action.payload] };

    case DELETE_SKILL:
      return {
        ...state,
        skills: state.skills.filter(v => v.id !== action.payload)
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(v => v.id !== action.payload),
        skills: state.skills.filter(v => v.category_id !== action.payload)
      };

    case SKILL_ERROR:
      return { ...state, error: action.payload };

    case CATEGORY_ERROR:
      return { ...state, categoryError: action.payload };

    default:
      return state;
  }
};
