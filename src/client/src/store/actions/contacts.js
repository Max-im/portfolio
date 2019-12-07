import axios from "axios";
import {
  SET_CONTACTS,
  LOAD_CONTACTS,
  ADD_CONTACT,
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
    .then(({ data }) => dispatch({ type: SET_CONTACTS, payload: data }))
    .catch(er => dispatch(onError(er, CONTACT_ERROR, "Error getting contacts")))
    .finally(() => dispatch({ type: LOAD_CONTACTS, payload: false }));
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

export const createContact = data => dispatch => {
  const options = { headers: { "Content-Type": "multipart/form-data" } };
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));

  axios
    .post("/admin/contacts", formData, options)
    .then(({ data }) => dispatch({ type: ADD_CONTACT, payload: data }))
    .catch(err =>
      dispatch(onError(err, CONTACT_ERROR, "Error creating contact"))
    );
};
