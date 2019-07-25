import axios from "axios";
import { SET_EXP, LOAD_EXP, EXP_ERROR } from "./constants";
import { onError } from "./utils";

/**
 * @description get all experience
 * @access public
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
 * @param {Object} expData {exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description}
 * @description create new experience item
 * @access private
 */
export const createExp = expData => dispatch => {
  const formData = new FormData();
  const options = { headers: { "Content-Type": "multipart/form-data" } };
  Object.keys(expData).forEach(key => formData.append(key, expData[key]));

  axios
    .post("/admin/experience", formData, options)
    .then(() => dispatch(getExp()))
    .catch(err =>
      dispatch(onError(err, EXP_ERROR, "Error creating experience item"))
    );
};

/**
 * @param {Object} expData {exp_title, exp_company, exp_from, exp_to, exp_is_current, exp_image, exp_description, id}
 * @param {Object} history - from withRouter (react-router-dom)
 * @access private
 */
export const updateExp = (expData, history) => dispatch => {
  axios
    .put("/admin/experience", expData)
    .then(() => history.push("/resume"))
    .catch(err =>
      dispatch(onError(err, EXP_ERROR, "Error updating experience item"))
    );
};

/**
 * @param {String} id
 * @description remove experience item by id
 * @access private
 */
export const deleteExp = id => dispatch => {
  axios
    .delete(`/admin/experience/${id}`)
    .then(() => dispatch(getExp()))
    .catch(err =>
      dispatch(onError(err, EXP_ERROR, "Error deleting experience item"))
    );
};
