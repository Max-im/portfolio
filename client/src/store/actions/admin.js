import axios from 'axios';

export const updateProjectData = (id, params, skills) => (dispatch) => {
  axios
    .put('/admin/project/' + id, { params, skills })
    .then(() => (window.location = '/portfolio/project/' + id))
    .catch((err) => console.error(err));
};
