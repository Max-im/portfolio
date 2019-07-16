import axios from "axios";
import { onError } from "./utils";
import { SET_EDU, LOAD_EDU, EDU_ERROR } from "./constants";

/**
 * @description get all educations
 * @access public
 */
export const getEdu = () => dispatch => {
  dispatch({ type: LOAD_EDU, payload: true });
  axios
    .get("/education")
    .then(({ data }) => {
      dispatch({ type: SET_EDU, payload: data });
      dispatch({ type: LOAD_EDU, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, EDU_ERROR, "Getting education error"));
      dispatch({ type: LOAD_EDU, payload: false });
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
    .catch(err => console.error(err));
};

/**
 *
 * @param {Object} eduData {edu_photo, range, edu_title, edu_description, id}
 * @param {Object} history - from withRouter (react-router-dom)
 * @description update education item
 * @access private
 */
export const updateEdu = (eduData, history) => () => {
  axios
    .put("/admin/education", eduData)
    .then(() => history.push("/resume"))
    .catch(err => console.error(err));
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
    .then(() => dispatch(getEdu()))
    .catch(err => console.error(err));
};
