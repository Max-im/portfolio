import {
  LOAD_PROJECTS,
  GET_PROJECTS,
  GET_PROJECT,
  GET_MORE_PROJECTS,
  PROJECTS_ERROR
} from "../actions/constants";

const initialState = {
  loading: false,
  projects: null,
  shownProjects: null,
  loadIndex: 3,
  project: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        shownProjects: action.payload.filter((v, i) => i < state.loadIndex)
      };

    case LOAD_PROJECTS:
      return { ...state, loading: action.payload };

    case GET_MORE_PROJECTS:
      const add = state.projects.filter(
        (v, i) => i >= state.loadIndex && i <= state.loadIndex + 3
      );
      return {
        ...state,
        shownProjects: [...state.shownProjects, ...add],
        loadIndex: state.loadIndex + 3
      };

    case GET_PROJECT:
      return { ...state, project: action.payload };

    case PROJECTS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
