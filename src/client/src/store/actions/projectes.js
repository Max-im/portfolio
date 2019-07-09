import axios from "axios";
import {
  GET_PROJECTS,
  LOAD_PROJECTS,
  GET_PROJECT,
  GET_MORE_PROJECTS
} from "../actions/constants";

/**
 * @description get all projects
 */
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

/**
 *
 * @param {String} id
 * @description get particular project by id
 */
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

/**
 * @description show more projects in the page
 */
export const getMoreProjects = () => ({ type: GET_MORE_PROJECTS });

/**
 *
 * @param {Object} projectData {picture, description, title, skills, github, deploy, author_id}
 * @description create new project
 */
export const createProject = projectData => dispatch => {
  axios
    .post("/projects", projectData)
    .then(() => dispatch(getProjects()))
    .catch(err => console.error(err));
};

/**
 *
 * @param {Object} projectData {title, description, picture, skills, project_id}
 * @param {Object} history - from withRouter (react-router-dom)
 * @description update project data
 */
export const updateProject = (projectData, history) => () => {
  axios
    .put("/projects", projectData)
    .then(() => history.push(`/portfolio/project/${projectData.project_id}`))
    .catch(err => console.error(err));
};

/**
 * @description change rate of the project
 */
export const setRate = ({ project_id, sign }) => dispatch => {
  axios
    .post("/projects/likes", { project_id, sign })
    .then(() => dispatch(getProject(project_id)))
    .catch(err => console.error(err));
};

/**
 *
 * @param {String} id
 * @param {Object} history - from withRouter (react-router-dom)
 * @description delete project by id
 */
export const deleteProject = (id, history) => () => {
  axios
    .delete(`/projects/${id}`)
    .then(() => history.push("/portfolio"))
    .catch(err => console.error(err));
};
