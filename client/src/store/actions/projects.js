import axios from 'axios';
import {
  GET_PROJECTS,
  GET_PROJECTS_NUM,
  PROJECTS_ERROR,
  PROJECTS_READY,
  PROJECT_READY,
  GET_PROJECT,
  PROJECT_ERROR
} from '../constants';
import { onError } from './utils';

const _getProjectsNum = q => axios.get(`/projects/number${q}`);
const _getProj = (page, q) => axios.get(`/projects/${page}${q}`);

export const getProjectsData = (query, page = 1) => dispatch => {
  dispatch({ type: PROJECTS_READY, payload: false });
  Promise.all([_getProjectsNum(query), _getProj(page, query)])
    .then(([num, projects]) => {
      dispatch({ type: GET_PROJECTS, payload: projects.data });
      dispatch({ type: GET_PROJECTS_NUM, payload: num.data });
    })
    .catch(err => dispatch(onError(err, PROJECTS_ERROR)))
    .finally(() => dispatch({ type: PROJECTS_READY, payload: true }))
};

export const getProject = id => dispatch => {
  dispatch({ type: PROJECT_READY, payload: false });
  axios
    .get(`/projects/single/${id}`)
    .then(({ data }) => dispatch({ type: GET_PROJECT, payload: data }))
    .catch(err => dispatch(onError(err, PROJECT_ERROR)))
    .finally(() => dispatch({ type: PROJECT_READY, payload: true }));
};
