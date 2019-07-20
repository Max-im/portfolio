import axios from "axios";
import { onError } from "./utils";
import {
  GET_PROJECTS,
  LOAD_PROJECTS,
  GET_PROJECTS_NUM,
  GET_PROJECT,
  PROJECTS_ERROR
} from "../actions/constants";

/**
 * @description get all projects
 * @access public
 */
export const getProjects = page => dispatch => {
  dispatch({ type: LOAD_PROJECTS, payload: true });
  axios
    .get(`/projects/${page}`)
    .then(res => {
      dispatch({ type: GET_PROJECTS, payload: res.data });
      dispatch({ type: LOAD_PROJECTS, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, PROJECTS_ERROR, "Error getting projects"));
      dispatch({ type: LOAD_PROJECTS, payload: false });
    });
};

export const getProjectsNum = () => dispatch => {
  axios
    .get("/projects/number")
    .then(({ data }) => dispatch({ type: GET_PROJECTS_NUM, payload: data }))
    .catch(err => {
      dispatch(onError(err, PROJECTS_ERROR, "Error getting projects number"));
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
    .get(`/projects/single/${id}`)
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
 * @param {Object} projectData {picture, description, title, skills, github, deploy, author_id}
 * @description create new project
 * @access private
 */
export const createProject = projectData => dispatch => {
  axios
    .post("/admin/projects", projectData)
    .then(() => dispatch(getProjects()))
    .catch(err =>
      dispatch(onError(err, PROJECTS_ERROR, "Error creating project"))
    );
};

/**
 * @param {Object} projectData {title, description, picture, skills, project_id}
 * @param {Object} history - from withRouter (react-router-dom)
 * @description update project data
 * @access private
 */
export const updateProject = (projectData, history) => dispatch => {
  axios
    .put("/admin/projects", projectData)
    .then(() => history.push(`/portfolio/project/${projectData.project_id}`))
    .catch(err =>
      dispatch(onError(err, PROJECTS_ERROR, "Error update project"))
    );
};

/**
 * @description change rate of the project
 * @access public - for auth only
 */
export const setRate = ({ project_id, sign }) => dispatch => {
  axios
    .post("/projects/likes", { project_id, sign })
    .then(() => dispatch(getProject(project_id)))
    .catch(err =>
      dispatch(onError(err, PROJECTS_ERROR, "Error change project rate"))
    );
};

/**
 * @param {String} id
 * @param {Object} history - from withRouter (react-router-dom)
 * @description delete project by id
 * @access private
 */
export const deleteProject = (id, history) => dispatch => {
  axios
    .delete(`/admin/projects/${id}`)
    .then(() => history.push("/portfolio"))
    .catch(err =>
      dispatch(onError(err, PROJECTS_ERROR, "Error delete project"))
    );
};
