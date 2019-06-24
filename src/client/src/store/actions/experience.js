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
