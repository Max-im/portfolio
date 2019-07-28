import axios from "axios";
import { onError } from "./utils";
import {
  GET_PROJECTS,
  LOAD_PROJECTS,
  LOADING_COMMENTS,
  GET_PROJECTS_NUM,
  COMMENT_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT,
  GET_PROJECT,
  GET_PROJECT_RATE,
  GET_COMMETNS,
  LOAD_PROJECT,
  PROJECTS_ERROR
} from "../actions/constants";

/**
 * @description get all projects
 * @access public
 */
export const getProjects = (page, history) => dispatch => {
  dispatch({ type: LOAD_PROJECTS, payload: true });

  axios
    .get(`/projects/${page}${history.location.search}`)
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
 * @description get all projects number
 * @access public
 */
export const getProjectsNum = history => dispatch => {
  axios
    .get(`/projects/number${history.location.search}`)
    .then(({ data }) => dispatch({ type: GET_PROJECTS_NUM, payload: data }))
    .catch(err => {
      dispatch(onError(err, PROJECTS_ERROR, "Error getting projects number"));
    });
};

/**
 * @description get particular project comments
 * @access public
 */
export const getProjectComments = (project_id, step) => dispatch => {
  dispatch({ type: LOADING_COMMENTS, payload: true });
  axios
    .get(`/projects/comments/${project_id}/${step}`)
    .then(({ data }) => {
      dispatch({ type: GET_COMMETNS, payload: data });
      dispatch({ type: LOADING_COMMENTS, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, PROJECTS_ERROR, "Error getting projects rate"));
      dispatch({ type: LOADING_COMMENTS, payload: false });
    });
};

/**
 * @param {Object} data {text, project_id, author_id }
 * @description add comment
 */
export const createComment = data => dispatch => {
  axios
    .post("/comment", data)
    .then(({ data }) => dispatch({ type: ADD_COMMENT, payload: data }))
    .catch(err =>
      dispatch(onError(err, COMMENT_ERROR, "Error creating comment"))
    );
};

/**
 * @description get all particular rate
 * @access public
 */
export const getProjectRate = project_id => dispatch => {
  axios
    .get(`/projects/likes/${project_id}`)
    .then(({ data }) => dispatch({ type: GET_PROJECT_RATE, payload: data }))
    .catch(err => {
      dispatch(onError(err, PROJECTS_ERROR, "Error getting projects rate"));
    });
};

/**
 * @param {String} id
 * @description get particular project by id
 * @access public
 */
export const getProject = id => dispatch => {
  dispatch({ type: LOAD_PROJECT, payload: true });
  axios
    .get(`/projects/single/${id}`)
    .then(({ data }) => {
      dispatch({ type: GET_PROJECT, payload: data });
      dispatch({ type: LOAD_PROJECT, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, PROJECTS_ERROR, "Error getting project"));
      dispatch({ type: LOAD_PROJECT, payload: false });
    });
};

/**
 * @param {Object} projectData {picture, description, title, skills, github, deploy, author_id}
 * @description create new project
 * @access private
 */
export const createProject = projData => dispatch => {
  const options = { headers: { "Content-Type": "multipart/form-data" } };
  const formData = new FormData();
  Object.keys(projData).forEach(key => formData.append(key, projData[key]));

  axios
    .post("/admin/projects", formData, options)
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
    .then(() => dispatch(getProjectRate(project_id)))
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

export const deleteComment = id => dispatch => {
  axios
    .delete(`/comment/${id}`)
    .then(() => dispatch({ type: REMOVE_COMMENT, payload: id }))
    .catch(err =>
      dispatch(onError(err, PROJECTS_ERROR, "Error delete project"))
    );
};
