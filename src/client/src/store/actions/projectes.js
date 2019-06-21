import axios from "axios";
import { GET_PROJECTS, LOAD_PROJECTS } from "../actions/constants";

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
