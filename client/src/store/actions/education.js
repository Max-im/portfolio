import axios from "axios";
import { GET_EDUCATION, LOADING_EDU,  EDU_ERROR } from "../constants";
import { onError } from "./utils";

export const getEdu = () => dispatch => {
  dispatch({ type: LOADING_EDU, payload: true });
  
  axios
    .get("/education")
    .then(({ data }) => dispatch({ type: GET_EDUCATION, payload: data }))
    .catch(err => dispatch(onError(err, EDU_ERROR, "Getting education error")))
    .finally(() => dispatch({ type: LOADING_EDU, payload: false }));
};




