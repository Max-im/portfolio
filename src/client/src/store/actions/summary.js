import axios from "axios";
import { SET_SUMMARY, LOAD_SUMMARY } from "./constants";

export const getSummary = () => dispatch => {
  dispatch({ type: LOAD_SUMMARY, payload: true });
  axios
    .get("/summary")
    .then(({ data }) => {
      dispatch({ type: LOAD_SUMMARY, payload: false });
      dispatch({ type: SET_SUMMARY, payload: data });
    })
    .catch(err => console.error(err));
};

export const updateSummary = text => dispatch => {
  axios
    .put("/summary", { text })
    .then(() => dispatch(getSummary()))
    .catch(err => console.error(err));
};
