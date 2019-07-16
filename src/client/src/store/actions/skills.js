import axios from "axios";
import { onError } from "./utils";
import {
  LOADING_SKILLS,
  GET_SKILLS,
  GET_CATEGORIES,
  ADD_SKILL,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  DELETE_SKILL,
  SKILL_ERROR,
  CATEGORY_ERROR
} from "./constants";

/**
 * @description get all skills
 * @access public
 */
export const getSkills = () => dispatch => {
  dispatch({ type: LOADING_SKILLS, payload: true });
  axios
    .get("/skills")
    .then(({ data }) => {
      dispatch({ type: GET_SKILLS, payload: data });
      dispatch({ type: LOADING_SKILLS, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, SKILL_ERROR, "Error getting skills, try again"));
      dispatch({ type: LOADING_SKILLS, payload: false });
    });
};

/**
 * @description get all skills categories
 * @access public
 */
export const getSkillsCategories = () => dispatch => {
  axios
    .get("/skills/categories")
    .then(({ data }) => dispatch({ type: GET_CATEGORIES, payload: data }))
    .catch(err =>
      dispatch(onError(err, CATEGORY_ERROR, "Error getting categories"))
    );
};

/**
 * @param {Object} skillData {skill_picture, source, skill, range, category_id}
 * @description create new Skill
 * @access private
 */
export const createSkill = skillData => dispatch => {
  dispatch({ type: LOADING_SKILLS, payload: true });
  axios
    .post("/admin/skills", skillData)
    .then(({ data }) => {
      dispatch({ type: ADD_SKILL, payload: data });
      dispatch({ type: LOADING_SKILLS, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, SKILL_ERROR, "Error create skill"));
      dispatch({ type: LOADING_SKILLS, payload: false });
    });
};

/**
 * @param {Object} categoryData {category, range}
 * @description create new category
 * @access private
 */
export const createCategory = categoryData => dispatch => {
  dispatch({ type: LOADING_SKILLS, payload: true });
  axios
    .post("/admin/skills/category", categoryData)
    .then(({ data }) => {
      dispatch({ type: ADD_CATEGORY, payload: data });
      dispatch({ type: LOADING_SKILLS, payload: false });
    })
    .catch(err => {
      dispatch({ type: LOADING_SKILLS, payload: false });
      dispatch(onError(err, CATEGORY_ERROR, "Error create category"));
    });
};

/**
 * @param {Object} skillData {skill_picture, source, skill, range, category_id, id}
 * @param {Object} history - from withRouter (react-router-dom)
 * @description update skill data
 * @access private
 */
export const updateSkill = (skillData, history) => dispatch => {
  axios
    .put("/admin/skills", skillData)
    .then(() => history.push("/resume"))
    .catch(err => {
      dispatch(onError(err, SKILL_ERROR, "Error update skill"));
    });
};

/**
 *
 * @param {String} id
 * @description delete skill by id
 * @access private
 */
export const deleteSkill = id => dispatch => {
  axios
    .delete(`/admin/skills/${id}`)
    .then(() => dispatch({ type: DELETE_SKILL, payload: id }))
    .catch(err => dispatch(onError(err, SKILL_ERROR, "Error delete skill")));
};

/**
 *
 * @param {String} id
 * @description delete category by id
 * @access private
 */
export const deleteCategory = id => dispatch => {
  axios
    .delete(`/admin/skills/category/${id}`)
    .then(() => {
      dispatch({ type: DELETE_CATEGORY, payload: id });
      dispatch(getSkills());
    })
    .catch(err =>
      dispatch(onError(err, CATEGORY_ERROR, "Error delete category"))
    );
};
