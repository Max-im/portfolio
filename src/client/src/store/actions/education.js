import axios from "axios";
import { GET_EDU, LOADING_EDU, DELETE_EDU, EDU_ERROR } from "./constants";
import { onError } from "./utils";

/**
 * @description get all educations
 * @access public
 */
export const getEdu = () => dispatch => {
  dispatch({ type: LOADING_EDU, payload: true });
  axios
    .get("/education")
    .then(({ data }) => {
      dispatch({ type: GET_EDU, payload: data });
      dispatch({ type: LOADING_EDU, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, EDU_ERROR, "Getting education error"));
      dispatch({ type: LOADING_EDU, payload: false });
    });
};

/**
 *
 * @param {Object} eduData {edu_photo, edu_title, edu_description}
 * @description add education item
 * @access private
 */
export const createEdu = eduData => dispatch => {
  axios
    .post("/admin/education", eduData)
    .then(() => dispatch(getEdu()))
    .catch(err => dispatch(onError(err, EDU_ERROR, "Error creating edu item")));
};

/**
 *
 * @param {Object} eduData {edu_photo, range, edu_title, edu_description, id}
 * @param {Object} history - from withRouter (react-router-dom)
 * @description update education item
 * @access private
 */
export const updateEdu = (eduData, history) => dispatch => {
  axios
    .put("/admin/education", eduData)
    .then(() => history.push("/resume"))
    .catch(err => dispatch(onError(err, EDU_ERROR, "Error updating edu item")));
};

/**
 *
 * @param {String} id
 * @description remove education item by id
 * @access private
 */
export const deleteEdu = id => dispatch => {
  axios
    .delete(`/admin/education/${id}`)
    .then(() => dispatch({ type: DELETE_EDU, payload: id }))
    .catch(err => dispatch(onError(err, EDU_ERROR, "Error deleting edu item")));
};
