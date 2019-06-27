import axios from "axios";
import { getProject } from "./projectes";

export const addComment = data => dispatch => {
  axios
    .post("/comment", data)
    .then(() => dispatch(getProject(data.project_id)))
    .catch(err => console.error(err));
};
