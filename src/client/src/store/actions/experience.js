import axios from "axios";
import { SET_EXP, LOAD_EXP } from "./constants";

export const getExp = () => dispatch => {
  dispatch({ type: LOAD_EXP, payload: true });
  axios
    .get("/experience")
    .then(({ data }) => {
      dispatch({ type: LOAD_EXP, payload: false });
      dispatch({ type: SET_EXP, payload: data });
    })
    .catch(err => console.error(err));
};

export const removeExp = id => dispatch => {
  axios
    .delete(`/experience/${id}`)
    .then(() => dispatch(getExp()))
    .catch(err => console.error(err));
};

export const addExp = expData => dispatch => {
  axios
    .post("/experience", expData)
    .then(() => dispatch(getExp()))
    .catch(err => console.error(err));
};
