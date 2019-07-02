import { SET_SKILLS, LOAD_SKILLS } from "../actions/constants";

const initialState = {
  loading: false,
  skills: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SKILLS:
      return { ...state, skills: action.payload };

    case LOAD_SKILLS:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
