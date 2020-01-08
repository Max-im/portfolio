import {
  PROJECTS_READY,
  GET_PROJECTS,
  GET_PROJECTS_NUM,
  PROJECTS_ERROR
} from "../constants";

const initialState = {
  isReady: false,
  projects: null,
  projectsNum: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        error: null
      };

    case PROJECTS_READY:
      return { ...state, isReady: action.payload };

    case GET_PROJECTS_NUM:
      return { ...state, projectsNum: action.payload };

    case PROJECTS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
