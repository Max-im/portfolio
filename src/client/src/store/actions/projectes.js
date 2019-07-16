import axios from "axios";
import { onError } from "./utils";
import {
  GET_PROJECTS,
  LOAD_PROJECTS,
  GET_PROJECT,
  GET_MORE_PROJECTS,
  PROJECTS_ERROR
} from "../actions/constants";

/**
 * @description get all projects
 * @access public
 */
export const getProjects = () => dispatch => {
  dispatch({ type: LOAD_PROJECTS, payload: true });
  axios
    .get("/projects")
    .then(res => {
      dispatch({ type: GET_PROJECTS, payload: res.data });
      dispatch({ type: LOAD_PROJECTS, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, PROJECTS_ERROR, "Error getting projects"));
      dispatch({ type: LOAD_PROJECTS, payload: false });
    });
};

/**
 * @param {String} id
 * @description get particular project by id
 * @access public
 */
export const getProject = id => dispatch => {
  dispatch({ type: LOAD_PROJECTS, payload: true });
  axios
    .get(`/projects/${id}`)
    .then(({ data }) => {
      dispatch({ type: GET_PROJECT, payload: data });
      dispatch({ type: LOAD_PROJECTS, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, PROJECTS_ERROR, "Error getting project"));
      dispatch({ type: LOAD_PROJECTS, payload: false });
    });
};

/**
 * @description show more projects in the page
 * @access public
 */
export const getMoreProjects = () => ({ type: GET_MORE_PROJECTS });

/**
 * @param {Object} projectData {picture, description, title, skills, github, deploy, author_id}
 * @description create new project
 * @access private
 */
export const createProject = projectData => dispatch => {
  axios
    .post("/admin/projects", projectData)
    .then(() => dispatch(getProjects()))
    .catch(err => console.error(err));
};

/**
 * @param {Object} projectData {title, description, picture, skills, project_id}
 * @param {Object} history - from withRouter (react-router-dom)
 * @description update project data
 * @access private
 */
export const updateProject = (projectData, history) => () => {
  axios
    .put("/admin/projects", projectData)
    .then(() => history.push(`/portfolio/project/${projectData.project_id}`))
    .catch(err => console.error(err));
};

/**
 * @description change rate of the project
 * @access public - for auth only
 */
export const setRate = ({ project_id, sign }) => dispatch => {
  axios
    .post("/projects/likes", { project_id, sign })
    .then(() => dispatch(getProject(project_id)))
    .catch(err => console.error(err));
};

/**
 * @param {String} id
 * @param {Object} history - from withRouter (react-router-dom)
 * @description delete project by id
 * @access private
 */
export const deleteProject = (id, history) => () => {
  axios
    .delete(`/admin/projects/${id}`)
    .then(() => history.push("/portfolio"))
    .catch(err => console.error(err));
};
