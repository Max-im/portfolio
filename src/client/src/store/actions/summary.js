import axios from "axios";
import { onError } from "./utils";
import { SET_SUMMARY, LOAD_SUMMARY, SUMMARY_ERROR } from "./constants";

/**
 * @description get summary
 */
export const getSummary = () => dispatch => {
  dispatch({ type: LOAD_SUMMARY, payload: true });
  axios
    .get("/summary")
    .then(({ data }) => {
      dispatch({ type: LOAD_SUMMARY, payload: false });
      dispatch({ type: SET_SUMMARY, payload: data });
    })
    .catch(err => {
      dispatch(onError(err, SUMMARY_ERROR, "Error getting summary"));
      dispatch({ type: LOAD_SUMMARY, payload: false });
    });
};

/**
 *
 * @param {String} text
 * @description update summary
 */
export const updateSummary = (text, field) => dispatch => {
  axios
    .put("/summary", { text, field })
    .then(() => dispatch(getSummary()))
    .catch(err => console.error(err));
};
