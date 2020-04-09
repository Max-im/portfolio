import axios from "axios";
import {
  GET_ABOUT,
  ABOUT_ERROR,
  ABOUT_READY,
  GET_SKILLS,
  SKILLS_READY,
  SKILL_ERROR,
  GET_CATEGORIES,
  GET_EXPERIENCE,
  EXP_READY,
  EXP_ERROR,
  GET_EDUCATION,
  EDU_READY,
  EDU_ERROR
} from "../constants";
import {onError} from './utils';

export const getAbout = () => dispatch => {
  dispatch({ type: ABOUT_READY, payload: false });

  axios
    .get("/resume/about")
    .then(({ data }) => dispatch({ type: GET_ABOUT, payload: data }))
    .catch(err => dispatch(onError(err, ABOUT_ERROR)))
    .finally(() => dispatch({ type: ABOUT_READY, payload: true }))
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
        payload: [{ id: 'all', name: "All" }, ...categories.data]
      });
    })
    .catch(err => dispatch(onError(err, SKILL_ERROR)))
    .finally(() => dispatch({type: SKILLS_READY, payload: true}));
};

export const getExperience = () => dispatch => {
  dispatch({type: EXP_READY, payload: false});

  axios
    .get("/resume/experience")
    .then(({ data }) => dispatch({ type: GET_EXPERIENCE, payload: data }))
    .catch(err => dispatch(onError(err, EXP_ERROR)))
    .finally(() => dispatch({type: EXP_READY, payload: true}));
};

export const getEducation = () => dispatch => {
  dispatch({type: EDU_READY, payload: false});

  axios
    .get("/resume/education")
    .then(({ data }) => dispatch({ type: GET_EDUCATION, payload: data }))
    .catch(err => dispatch(onError(err, EDU_ERROR)))
    .finally(() => dispatch({type: EDU_READY, payload: true}));
};


export const downloadCV = () => {
  axios.get("/resume/cv", {responseType: 'blob'})
  .then(({data}) => {
    const link = document.createElement("a");
    document.body.appendChild(link);
    link.style = "display: none";
    const file = new Blob(
      [data], 
      {type: 'application/pdf'});
      const fileURL = URL.createObjectURL(file);
      link.href = fileURL;
      link.download = 'm.pozhydaiev_CV.pdf';
      link.click();
      window.URL.revokeObjectURL(fileURL);
      link.remove();
  })
  .catch(err => console.error(err))
}