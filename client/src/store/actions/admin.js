import axios from 'axios';
import { GET_LEVELS } from '../constants';

export const updateProjectData = (id, params, skills) => (dispatch) => {
  axios
    .put('/admin/project/' + id, { params, skills })
    .then(() => (window.location = '/portfolio/project/' + id))
    .catch((err) => console.error(err));
};

export const getLevels = () => (dispatch) => {
  axios
    .get('/admin/project/levels')
    .then(({ data }) => dispatch({ type: GET_LEVELS, payload: data }))
    .catch((err) => console.error(err));
};
