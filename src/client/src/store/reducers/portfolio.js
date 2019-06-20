import { LOAD_PROJECTS, GET_PROJECTS } from "../actions/constants";

const initialState = {
  loading: false,
  projects: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return { ...state, projects: action.payload };

    case LOAD_PROJECTS:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
