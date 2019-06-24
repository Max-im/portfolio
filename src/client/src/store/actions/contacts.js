import axios from "axios";
import { SET_CONTACTS, LOAD_CONTACTS } from "./constants";

export const getContacts = () => dispatch => {
  dispatch({ type: LOAD_CONTACTS, payload: true });

  axios
    .get("/contacts")
    .then(({ data }) => {
      dispatch({ type: LOAD_CONTACTS, payload: false });
      dispatch({ type: SET_CONTACTS, payload: data });
    })
    .catch(err => console.error(err));
};
