import {
  SET_CONTACTS,
  LOAD_CONTACTS,
  CONTACT_ERROR
} from "../actions/constants";

const initialState = {
  loading: false,
  contacts: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CONTACTS:
      return { ...state, contacts: action.payload };

    case LOAD_CONTACTS:
      return { ...state, loading: action.payload };

    case CONTACT_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
