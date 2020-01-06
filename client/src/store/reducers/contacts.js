import {
  SET_CONTACTS,
  LOAD_CONTACTS,
  ADD_CONTACT,
  CONTACT_ERROR,
  DELETE_CONTACT
} from "../actions/constants";

const initialState = {
  loading: false,
  contacts: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.payload, error: null };

    case LOAD_CONTACTS:
      return { ...state, loading: action.payload };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload)
      };

    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case CONTACT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
