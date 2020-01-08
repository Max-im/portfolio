import axios from "axios";
import {
  GET_ABOUT,
  GET_SKILLS,
  SKILLS_READY,
  GET_CATEGORIES,
  GET_EXPERIENCE,
  GET_EDUCATION
} from "../constants";

export const getAbout = () => dispatch => {
  axios
    .get("/resume/about")
    .then(({ data }) => dispatch({ type: GET_ABOUT, payload: data }))
    .catch(err => console.log(err));
};

const _getSkills = () => axios.get("/resume/skills");
const _getCategories = () => axios.get("/resume/skills-categories");

export const getSkills = () => dispatch => {
  dispatch({type: SKILLS_READY, payload: false});
  Promise.all([_getSkills(), _getCategories()])
    .then(([skills, categories]) => {
      dispatch({ type: GET_SKILLS, payload: skills.data });
      dispatch({
        type: GET_CATEGORIES,
        payload: [{ name: "All" }, ...categories.data]
      });
    })
    .catch(err => console.log(err))
    .finally(() => dispatch({type: SKILLS_READY, payload: true}));
};

export const getExperience = () => dispatch => {
  axios
    .get("/resume/experience")
    .then(({ data }) => dispatch({ type: GET_EXPERIENCE, payload: data }))
    .catch(err => console.log(err))
    .finally();
};

export const getEducation = () => dispatch => {
  axios
    .get("/resume/education")
    .then(({ data }) => dispatch({ type: GET_EDUCATION, payload: data }))
    .catch(err => console.log(err))
    .finally();
};
