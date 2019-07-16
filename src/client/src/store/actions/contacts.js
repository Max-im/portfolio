import axios from "axios";
import {
  SET_CONTACTS,
  LOAD_CONTACTS,
  CONTACT_ERROR,
  DELETE_CONTACT
} from "./constants";
import { onError } from "./utils";

/**
 * @description get all contacts
 * @access public
 */
export const getContacts = () => dispatch => {
  dispatch({ type: LOAD_CONTACTS, payload: true });
  axios
    .get("/contacts")
    .then(({ data }) => {
      dispatch({ type: SET_CONTACTS, payload: data });
      dispatch({ type: LOAD_CONTACTS, payload: false });
    })
    .catch(err => {
      dispatch(onError(err, CONTACT_ERROR, "Error getting contacts"));
      dispatch({ type: LOAD_CONTACTS, payload: false });
    });
};

/**
 *
 * @param {String} id
 * @description delete contact by id
 * @access private - admin only
 */
export const deleteContact = id => dispatch => {
  axios
    .delete(`/admin/contacts/${id}`)
    .then(() => dispatch({ type: DELETE_CONTACT, payload: id }))
    .catch(err =>
      dispatch(onError(err, CONTACT_ERROR, "Error deleting contact"))
    );
};
