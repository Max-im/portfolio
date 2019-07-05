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
      dispatch({ type: GET_PROJECT, payload: data });
      dispatch({ type: LOAD_PROJECTS, payload: false });
    })
    .catch(err => console.error(err));
};

export const addProject = projectData => dispatch => {
  axios
    .post("/projects", projectData)
    .then(() => dispatch(getProjects()))
    .catch(err => console.error(err));
};

export const deleteProject = (id, history) => dispatch => {
  axios
    .delete(`/projects/${id}`)
    .then(() => history.push("/portfolio"))
    .catch(err => console.error(err));
};

export const setRate = ({ project_id, sign }) => dispatch => {
  axios
    .post("/projects/likes", { project_id, sign })
    .then(() => dispatch(getProject(project_id)))
    .catch(err => console.error(err));
};

export const updateProject = (projectData, history) => () => {
  axios
    .put("/projects", projectData)
    .then(() => history.push(`/portfolio/project/${projectData.project_id}`))
    .catch(err => console.error(err));
};
