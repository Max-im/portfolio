import axios from 'axios';
import { GET_ABOUT } from '../constants'

export const getAbout = () => dispatch => {
  axios
    .get("/resume/about")
    .then(({data}) => dispatch({type: GET_ABOUT, payload: data}))
    .catch(err => console.log(err));
};
