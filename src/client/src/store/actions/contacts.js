import axios from "axios";
import { SET_CONTACTS, LOAD_CONTACTS } from "./constants";

/**
 * @description get all contacts
 */
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

/**
 *
 * @param {String} id
 * @description delete contact by id
 */
export const deleteContact = id => dispatch => {
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(getContacts()))
    .catch(err => console.error(err));
};
