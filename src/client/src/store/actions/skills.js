import axios from "axios";
import { SET_SKILLS, LOAD_SKILLS } from "./constants";

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
