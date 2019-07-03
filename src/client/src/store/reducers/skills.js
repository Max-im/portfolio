import {
  SET_SKILLS,
  LOAD_SKILLS,
  SET_SKILLS_CAT,
  SET_A_SKILLS
} from "../actions/constants";

const initialState = {
  loading: false,
  categories: null,
  admin: null,
  skills: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SKILLS:
      return { ...state, skills: action.payload };

    case LOAD_SKILLS:
      return { ...state, loading: action.payload };

    case SET_SKILLS_CAT:
      return { ...state, categories: action.payload };

    case SET_A_SKILLS:
      return { ...state, admin: action.payload };

    default:
      return state;
  }
};
