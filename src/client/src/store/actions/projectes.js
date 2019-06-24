import axios from "axios";
import { GET_PROJECTS, LOAD_PROJECTS, GET_PROJECT } from "../actions/constants";

export const getProjects = () => dispatch => {
  dispatch({ type: LOAD_PROJECTS, payload: true });
  axios
    .get("/projects")
    .then(res => {
      dispatch({ type: GET_PROJECTS, payload: res.data });
      dispatch({ type: LOAD_PROJECTS, payload: false });
    })
    .catch(err => console.error(err));
};

export const getProject = id => (dispatch, getState) => {
  dispatch({ type: LOAD_PROJECTS, payload: true });
  const { portfolio } = getState();
  //   return data from store
  if (portfolio.projects.length > 0) {
    const theProject = portfolio.projects.find(item => item.id === id);
    dispatch({ type: GET_PROJECT, payload: theProject });
    dispatch({ type: LOAD_PROJECTS, payload: false });
  }
  //   fetch data from server
  else {
    axios
      .get(`/projects/${id}`)
      .then(({ data }) => {
        dispatch({ type: GET_PROJECT, payload: data });
        dispatch({ type: LOAD_PROJECTS, payload: false });
      })
      .catch(err => console.error(err));
  }
};
