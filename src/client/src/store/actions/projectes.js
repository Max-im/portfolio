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

export const getProject = id => dispatch => {
  dispatch({ type: LOAD_PROJECTS, payload: true });

  axios
    .get(`/projects/${id}`)
    .then(({ data }) => {
      dispatch({ type: GET_PROJECT, payload: data[0] });
      dispatch({ type: LOAD_PROJECTS, payload: false });
    })
    .catch(err => console.error(err));
};
