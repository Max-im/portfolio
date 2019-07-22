import {
  LOAD_PROJECTS,
  GET_PROJECTS,
  GET_PROJECT,
  GET_PROJECTS_NUM,
  FILTER_PROJECTS,
  PROJECTS_ERROR
} from "../actions/constants";

const initialState = {
  loading: false,
  projects: null,
  projectsNum: null,
  loadIndex: 3,
  project: null,
  query: {
    quality: [],
    skills: [],
    sortBy: null
  },
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

    case GET_PROJECT:
      return { ...state, project: action.payload, error: null };

    case PROJECTS_ERROR:
      return { ...state, error: action.payload };

    case FILTER_PROJECTS:
      const query = { ...state.query };
      if (query[action.meta].includes(action.payload)) {
        query[action.meta] = query[action.meta].filter(
          item => item !== action.payload
        );
      } else {
        query[action.meta] = [...query[action.meta], action.payload];
      }
      return { ...state, query };

    default:
      return state;
  }
};
