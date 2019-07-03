import axios from "axios";
import {
  SET_SKILLS,
  LOAD_SKILLS,
  SET_SKILLS_CAT,
  SET_A_SKILLS
} from "./constants";

/**
 * get skills
 */
export const getSkills = () => dispatch => {
  dispatch({ type: LOAD_SKILLS, payload: true });
  axios
    .get("/skills")
    .then(({ data }) => {
      dispatch({ type: SET_SKILLS, payload: data });
      dispatch({ type: LOAD_SKILLS, payload: false });
    })
    .catch(err => console.error(err));
};

export const getSkillsCategories = () => dispatch => {
  axios
    .get("/skills/categories")
    .then(({ data }) => dispatch({ type: SET_SKILLS_CAT, payload: data }))
    .catch(err => console.error(err));
};

export const getAdminSkills = () => dispatch => {
  axios
    .get("/skills/admin")
    .then(({ data }) => dispatch({ type: SET_A_SKILLS, payload: data }))
    .catch(err => console.error(err));
};
