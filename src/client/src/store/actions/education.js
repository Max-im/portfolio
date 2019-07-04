import axios from "axios";
import { SET_EDU, LOAD_EDU } from "./constants";

export const getEdu = () => dispatch => {
  dispatch({ type: LOAD_EDU, payload: true });
  axios
    .get("/education")
    .then(({ data }) => {
      dispatch({ type: LOAD_EDU, payload: false });
      dispatch({ type: SET_EDU, payload: data });
    })
    .catch(err => console.error(err));
};

export const removeEdu = id => dispatch => {
  axios
    .delete(`/education/${id}`)
    .then(() => dispatch(getEdu()))
    .catch(err => console.error(err));
};
