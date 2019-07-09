import {
  SET_SKILLS,
  LOAD_SKILLS,
  SET_SKILLS_CAT,
  SET_A_SKILLS,
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
    case SET_SKILLS:
      return { ...state, skills: action.payload, error: null };

    case LOAD_SKILLS:
      return { ...state, loading: action.payload };

    case SET_SKILLS_CAT:
      return { ...state, categories: action.payload, categoryError: null };

    case SET_A_SKILLS:
      return { ...state, admin: action.payload, error: null };

    case SKILL_ERROR:
      return { ...state, error: action.payload };

    case CATEGORY_ERROR:
      return { ...state, categoryError: action.payload };

    default:
      return state;
  }
};
