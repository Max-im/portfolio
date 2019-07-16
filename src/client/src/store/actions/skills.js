import axios from "axios";
import { onError } from "./utils";
import {
  SET_SKILLS,
  LOAD_SKILLS,
  SET_SKILLS_CAT,
  SET_A_SKILLS,
  SKILL_ERROR,
  CATEGORY_ERROR
} from "./constants";

/**
 * @description get all skills
 */
export const getSkills = () => dispatch => {
  dispatch({ type: LOAD_SKILLS, payload: true });
  axios
    .get("/skills")
    .then(({ data }) => {
      dispatch({ type: SET_SKILLS, payload: data });
      dispatch({ type: LOAD_SKILLS, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, SKILL_ERROR, "Error getting skills, try again"));
      dispatch({ type: LOAD_SKILLS, payload: false });
    });
};

/**
 * @description get all skills categories
 */
export const getSkillsCategories = () => dispatch => {
  axios
    .get("/skills/categories")
    .then(({ data }) => dispatch({ type: SET_SKILLS_CAT, payload: data }))
    .catch(err =>
      dispatch(onError(err, CATEGORY_ERROR, "Error getting categories"))
    );
};

/**
 *
 * @param {Object} skillData {skill_picture, source, skill, range, category_id}
 * @description create new Skill
 */
export const createSkill = skillData => dispatch => {
  axios
    .post("/skills", skillData)
    .then(() => dispatch(getSkills()))
    .catch(err => console.error(err));
};

/**
 *
 * @param {Object} categoryData {category, range}
 * @description create new category
 */
export const createCategory = categoryData => dispatch => {
  axios
    .post("/skills/category", categoryData)
    .then(() => {
      dispatch(getSkillsCategories());
      dispatch(getSkills());
    })
    .catch(err => console.error(err));
};

/**
 *
 * @param {Object} skillData {skill_picture, source, skill, range, category_id, id}
 * @param {Object} history - from withRouter (react-router-dom)
 * @description update skill data
 */
export const updateSkill = (skillData, history) => () => {
  axios
    .put("/skills", skillData)
    .then(() => history.push("/admin"))
    .catch(err => console.error(err));
};

/**
 *
 * @param {String} id
 * @description delete skill by id
 */
export const deleteSkill = id => dispatch => {
  axios
    .delete(`/skills/${id}`)
    .then(() => dispatch(getSkills()))
    .catch(err => console.error(err));
};

/**
 *
 * @param {String} id
 * @description delete category by id
 */
export const deleteCategory = name => dispatch => {
  axios
    .delete(`/skills/category/${name}`)
    .then(() => {
      dispatch(getSkillsCategories());
      dispatch(getSkills());
    })
    .catch(err => console.error(err));
};
