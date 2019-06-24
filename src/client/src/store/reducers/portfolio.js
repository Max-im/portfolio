import { LOAD_PROJECTS, GET_PROJECTS, GET_PROJECT } from "../actions/constants";

const initialState = {
  loading: false,
  projects: [],
  project: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return { ...state, projects: action.payload };

    case LOAD_PROJECTS:
      return { ...state, loading: action.payload };

    case GET_PROJECT:
      return { ...state, project: action.payload };

    default:
      return state;
  }
};
