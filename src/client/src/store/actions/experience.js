import axios from "axios";
import { onError } from "./utils";
import { SET_EXP, LOAD_EXP, EXP_ERROR } from "./constants";

/**
 * @description get all experience
 */
export const getExp = () => dispatch => {
  dispatch({ type: LOAD_EXP, payload: true });
  axios
    .get("/experience")
    .then(({ data }) => {
      dispatch({ type: LOAD_EXP, payload: false });
      dispatch({ type: SET_EXP, payload: data });
    })
    .catch(err => {
      dispatch(onError(err, EXP_ERROR, "Getting experience error, try again"));
      dispatch({ type: LOAD_EXP, payload: false });
    });
};

/**
 *
 * @param {Object} expData {exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description}
 * @description create new experience item
 */
export const createExp = expData => dispatch => {
  axios
    .post("/experience", expData)
    .then(() => dispatch(getExp()))
    .catch(err => console.error(err));
};

/**
 *
 * @param {Object} expData {exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description, id}
 * @param {Object} history - from withRouter (react-router-dom)
 */
export const updateExp = (expData, history) => () => {
  axios
    .put("/experience", expData)
    .then(() => history.push("/resume"))
    .catch(err => console.error(err));
};

/**
 *
 * @param {String} id
 * @description remove experience item by id
 */
export const deleteExp = id => dispatch => {
  axios
    .delete(`/experience/${id}`)
    .then(() => dispatch(getExp()))
    .catch(err => console.error(err));
};
