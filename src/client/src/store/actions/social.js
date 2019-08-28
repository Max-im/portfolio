import axios from "axios";
import { GET_SOCIAL, SOCIAL_ERROR } from "./constants";
import { onError } from "./utils";

export const getSocial = () => dispatch => {
  axios
    .get("/social/")
    .then(({ data }) => dispatch({ type: GET_SOCIAL, payload: data }))
    .catch(err =>
      dispatch(onError(err, SOCIAL_ERROR, "Error getting social, try again"))
    );
};
