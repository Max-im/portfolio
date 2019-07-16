import axios from "axios";
import { getProject } from "./projectes";
import { COMMENT_ERROR } from "./constants";
import { onError } from "./utils";

/**
 *
 * @param {Object} data {text, project_id, author_id }
 * @description add comment
 */
export const createComment = data => dispatch => {
  axios
    .post("/comment", data)
    .then(() => dispatch(getProject(data.project_id)))
    .catch(err =>
      dispatch(onError(err, COMMENT_ERROR, "Error creating comment"))
    );
};
