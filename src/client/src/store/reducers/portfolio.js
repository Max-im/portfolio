import {
  LOAD_PROJECTS,
  GET_PROJECTS,
  GET_PROJECTS_NUM,
  PROJECTS_ERROR
} from "../actions/constants";

const initialState = {
  loading: false,
  projects: null,
  projectsNum: null,
  loadIndex: 3,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        shownProjects: action.payload.filter((v, i) => i < state.loadIndex),
        error: null
      };

    case LOAD_PROJECTS:
      return { ...state, loading: action.payload };

    case GET_PROJECTS_NUM:
      return { ...state, projectsNum: action.payload };

    case PROJECTS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
