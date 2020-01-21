import axios from "axios";
import { onError } from "./utils";
import {
  SKILLS_READY,
  GET_SKILLS,
  GET_CATEGORIES,
  SKILL_ERROR,
} from "../constants";


export const getSkills = () => dispatch => {
  dispatch({ type: SKILLS_READY, payload: false });
  axios
    .get("/skills")
    .then(({ data }) => dispatch({ type: GET_SKILLS, payload: data }))
    .catch(err => {
      dispatch(onError(err, SKILL_ERROR, "Error getting skills, try again"));
    }).finally(() => dispatch({ type: LOADING_SKILLS, payload: true }))
};

/**
 * @description get all skills categories
 * @access public
 */
export const getSkillsCategories = () => dispatch => {
  axios
    .get("/skills/categories")
    .then(({ data }) => dispatch({ type: GET_CATEGORIES, payload: data }))
    .catch(err => console.error(err))
};

