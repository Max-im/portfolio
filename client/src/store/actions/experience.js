import axios from "axios";
import { GET_EXPERIENCE, LOAD_EXP, EXP_ERROR } from "../constants";
import { onError } from "./utils";


export const getExp = () => dispatch => {
  dispatch({ type: LOAD_EXP, payload: true });
  axios
    .get("/experience")
    .then(({ data }) => dispatch({ type: GET_EXPERIENCE, payload: data }))
    .catch(err => dispatch(onError(err, EXP_ERROR, "Getting experience error")))
    .finally(() => dispatch({ type: LOAD_EXP, payload: false }));
};
