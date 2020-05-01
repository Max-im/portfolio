import axios from 'axios';
import {
  GET_PROJECTS,
  GET_PROJECTS_NUM,
  PROJECTS_ERROR,
  PROJECTS_READY,
  PROJECT_READY,
  GET_PROJECT,
  SET_RATE,
  SET_RECOMMENDATIONS,
  EMIT_RATE_ERROR,
  PROJECT_ERROR,
} from '../constants';
import { onError } from './utils';

const _getProjectsNum = (q) => axios.get(`/projects/number${q}`);
const _getProj = (page, q) => axios.get(`/projects/${page}${q}`);
const _getProjectRate = (id) => axios.get(`/projects/rate/${id}`);
const _getSingleProject = (id) => axios.get(`/projects/single/${id}`);

export const getProjectsData = (query, page = 1) => (dispatch) => {
  dispatch({ type: PROJECTS_READY, payload: false });
  Promise.all([_getProjectsNum(query), _getProj(page, query)])
    .then(([num, projects]) => {
      dispatch({ type: GET_PROJECTS, payload: projects.data });
      dispatch({ type: GET_PROJECTS_NUM, payload: num.data });
    })
    .catch((err) => dispatch(onError(err, PROJECTS_ERROR)))
    .finally(() => dispatch({ type: PROJECTS_READY, payload: true }));
};

export const getProject = (id) => (dispatch) => {
  dispatch({ type: PROJECT_READY, payload: false });
  Promise.all([_getSingleProject(id), _getProjectRate(id)])
    .then(([{ data: project }, { data: rate }]) => {
      dispatch({ type: GET_PROJECT, payload: project });
      dispatch({ type: SET_RATE, payload: rate });
    })
    .catch((err) => dispatch(onError(err, PROJECT_ERROR)))
    .finally(() => dispatch({ type: PROJECT_READY, payload: true }));
};

export const updateRate = (vote, id) => (dispatch) => {
  axios
    .post(`/projects/rate/${id}`, { vote })
    .then(({ data }) => dispatch({ type: SET_RATE, payload: data }))
    .catch((err) => dispatch(onError(err, EMIT_RATE_ERROR)));
};

export const getProjectRecommendations = (id) => (dispatch) => {
  axios
    .get(`/projects/recommendations/${id}`)
    .then(({ data }) => dispatch({ type: SET_RECOMMENDATIONS, payload: data }))
    .catch((err) => console.log(err));
};
